import { ModalState } from "../slices/modal"

const  prepareCode = (modalObj: ModalState): string =>  {
    console.log(modalObj);
    let sendObj = JSON.stringify(modalObj);
    let code = `<script src="https://cdn.tailwindcss.com"></script><script src="${modalObj.baseUrl}/modalFunctions/modal${modalObj.modal}.js"></script><script>window.start.init(${sendObj})</script>`;
    console.log(code);
    return code;
}


export default prepareCode