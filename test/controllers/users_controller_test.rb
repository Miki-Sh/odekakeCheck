require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  def setup
    @user       = users(:michael)
    @other_user = users(:archer)
  end
  
  test "should get new" do
    get signup_path
    assert_response :success
  end

  test "ログインせずにdestroyアクションを実行できない" do
    assert_no_difference 'User.count' do
      delete user_path(@user)
    end
    assert_response :unauthorized
  end

  test "違うユーザーのeditアクションは実行できない" do
    log_in_as(@other_user)
    get edit_user_path(@user)
    assert_response :forbidden
  end

  test "違うユーザーのupdateアクションは実行できない" do
    log_in_as(@other_user)
    patch user_path(@user), params: { user: { email: @user.email } }
    assert_response :forbidden
  end
end
