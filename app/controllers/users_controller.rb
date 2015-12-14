class UsersController < ApplicationController


  def index
   		@user = User.all
	end

  def new
   @user = User.new
  end

   def create
      @user = User.new user_params
      @settings = @user.setting
      if @user.save
        session[:user_id] = @user.id
        flash[:notice] = "You have signed up for awesomeness:)"
        redirect_to home_path
      else
        flash[:alert] = "We were unable to sign you up. Please try again."
        redirect_to home_path
      end
    end

    def show
		@user = User.find_by_id params[:id]
		@settings = @user.setting
    if session[:user_id] != @user.id
      redirect_to home_path
      return
    end
		if @settings.frames == 1
			render :oneframe
		elsif @settings.frames == 2
			render :twoframe
		elsif @settings.frames == 3
			render :threeframe
		elsif @settings.frames == 4
			render :fourframe
		end 
	end 

	def update
	end

	def edit
	end

	def destroy
	end

	private
    def user_params
      params.require(:user).permit( :fname, :lname, :email, :password, :password_confirmation)
    end

end
