class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      # Optionnel : Ajoute des actions après la sauvegarde du contact
      redirect_to root_path, notice: 'Message envoyé avec succès!'
    else
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
