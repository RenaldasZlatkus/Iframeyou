class UsersController < ApplicationController
	def new
  	end

	def show
		@user = User.find_by_id params[:id]
		@settings = @user.settings.find_by_id params[:id]
		if @settings.frames == 1
			render :oneframe
		elsif @ settings.frames == 2
			render :twoframe
		elsif @settings.frames == 3
			render :threeframe
		elsif @settings.frames == 4
			render :fourframe
		end 
	end 

	def create
	end

	def update
	end

	def edit
	end

	def destroy
	end

	def index
	end

end
