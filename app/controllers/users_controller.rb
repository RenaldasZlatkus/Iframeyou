class UsersController < ApplicationController

  def new
   @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = "Your account was created succesfully."
      redirect_to login_path
    else
      flash.now[:alert] = "There was a problem saving your account"
      render "new"
     end
  end

	def show
		@user = User.find_by_id params[:id]
		@settings = @user.settings.find_by_id params[:id]
		render :frame
	end 

	def update
	end

	def edit
	end

  def index
    @user = User.all
  end

	def destroy
	end

end
