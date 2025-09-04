import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import logo from '@/assets/logo.png';

const LogoProcessor = () => {
  const [processedLogo, setProcessedLogo] = useState<string>(logo);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        
        // Fetch the logo as a blob
        const response = await fetch(logo);
        const blob = await response.blob();
        
        // Load as image element
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedLogo(processedUrl);
        
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original logo
        setProcessedLogo(logo);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  return { processedLogo, isProcessing };
};

export default LogoProcessor;