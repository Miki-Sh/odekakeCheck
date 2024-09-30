class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params[:session][:email].downcase)
    if @user && @user.authenticate(params[:session][:password])
      reset_session      # セッション固定攻撃への対策（ログインの直前に必ずこれを書くこと）
      log_in @user
    else
      render json: { errors: "メールアドレスとパスワードの組み合わせが間違っています" }, status: :unprocessable_entity
    end
  end

  def destroy
    log_out
    redirect_to root_url, status: :see_other
  end
end