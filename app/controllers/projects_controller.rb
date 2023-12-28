class ProjectsController < ApplicationController
  def index
    @projets = Project.all
  end

  def show
    @projet = Project.find(params[:id])
  end
end
