import $ from 'jquery';
class Modal{
    constructor(){
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closemodalButton = $(".modal__close");
        this.events();
    }

    events(){
        this.openModalButton.click(this.openModal.bind(this));
        this.closemodalButton.click(this.closeModal.bind(this));
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if(e.keyCode== 27){
            this.closeModal();
        }
    }
    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
    }
    closeModal(){
        this.modal.removeClass("modal--is-visible");
        return false;

    }

}

export default Modal;