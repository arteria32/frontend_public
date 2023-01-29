export const readFromFile = () => {
    return new Promise(resolve => {
      const input = document.createElement('input');
      input.classList.add('d-none');
      input.type = 'file';
      input.onchange = (e: any) => {
        const files: any[] = [...e.target.files];
        const reader = new FileReader();
        reader.onload = (file: any) => {
          reader.onload = null;
          resolve(JSON.parse(file.target.result));
        }
        reader.readAsText(files[0])
        input.remove();
      }
      input.click()
    })
  }
  