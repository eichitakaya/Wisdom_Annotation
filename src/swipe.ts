window.onload = () => {
    const imageUpload = document.getElementById('imageUpload') as HTMLInputElement;
    const imageDisplay = document.getElementById('imageDisplay') as HTMLImageElement;
    const prevButton = document.getElementById('prevButton') as HTMLButtonElement;
    const nextButton = document.getElementById('nextButton') as HTMLButtonElement;

    let images: string[] = [];
    let currentIndex = 0;

    imageUpload.addEventListener('change', (event) => {
        images = [];
        currentIndex = 0;
        const files = (event.target as HTMLInputElement).files;
        if (files) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const target = event.target;
                    if (target) {
                        images.push(target.result as string);
                        if (images.length === 1) {
                            displayImage();
                        }
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    });

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        displayImage();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, images.length - 1);
        displayImage();
    });

    function displayImage() {
        imageDisplay.src = images[currentIndex];
    }
};