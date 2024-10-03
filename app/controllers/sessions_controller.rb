class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params[:session][:email].downcase)
    if @user && @user.authenticate(params[:session][:password])
      reset_session      # セッション固定攻撃への対策（ログインの直前に必ずこれを書くこと）
      params[:session][:remember_me] == '1' ? remember(@user) : forget(@user)
      log_in @user
      render json: @user, status: :ok
    else
      render json: { errors: "メールアドレスとパスワードの組み合わせが間違っています" }, status: :unprocessable_entity
    end
  end

  def destroy
    log_out if logged_in?
    head :no_content
  end
end