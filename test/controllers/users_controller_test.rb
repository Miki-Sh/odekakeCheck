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
end
