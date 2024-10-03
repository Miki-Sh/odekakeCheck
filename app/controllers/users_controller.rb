class UsersController < ApplicationController
  before_action :logged_in_user, only: [:edit, :update, :destroy]
  before_action :correct_user,   only: [:edit, :update]
  
  def show
    @user = User.find(params[:id])
    render json: @user, status: :ok
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      reset_session
      log_in @user
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def edit
    @user = User.find(params[:id])
    render json: @user, status: :ok
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: { message: "ユーザー情報が更新されました！", user: @user }, status: :ok
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    User.find(params[:id]).destroy
    if user.destroy
      render json: { message: 'ユーザーが削除されました' }, status: :ok
    else
      render json: { error: 'ユーザーの削除に失敗しました' }, status: :unprocessable_entity
    end
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end

    # beforeフィルタ

    # ログイン済みユーザーかどうか確認
    def logged_in_user
      unless logged_in?
        render json: { error: 'ログインしてください' }, status: :unauthorized
      end
    end

    def correct_user
      @user = User.find(params[:id])
      unless @user == current_user
        render json: { error: '自分以外のユーザーの編集はできません' }, status: :forbidden
      end
    end
end