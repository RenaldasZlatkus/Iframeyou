class SessionsController < ApplicationController
  def index
  end
#iets klopt hier niet
  def show
    @users = User.all
  end

  def new
  end

        def create
        user = User.find_by_email(params[:session][:email])
        # If the user exists AND the password entered is correct.
        if user && user.authenticate(params[:session][:password])
          session[:user_id] = user.id
          redirect_to user
        else
        # If user's login doesn't work, send them back to the login form.
          redirect_to home_path
        end
      end

      def destroy
        session[:user_id] = nil
        redirect_to '/login'
      end

   def update
   end

  def edit
  end

end

