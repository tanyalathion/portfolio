class ProjectsController < ApplicationController
  def index

  end

  def show
    render "show_#{params[:id]}"
  end
end
