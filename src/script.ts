window.onload = () => {
    const imageUpload = document.getElementById('imageUpload') as HTMLInputElement;
    const imageDisplay = document.getElementById('imageDisplay') as HTMLImageElement;

    imageUpload.addEventListener('change', (event) => {
        if (!event.target.files) return;
        const file = (event.target as HTMLInputElement).files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imageDisplay.src = event.target.result as string;
            };
            reader.readAsDataURL(file);
        }
    });
};