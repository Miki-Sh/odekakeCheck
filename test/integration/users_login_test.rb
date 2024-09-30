require "test_helper"

class UsersLoginTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:michael) # users.ymlのmichaelを参照
  end

  test "無効なemailでログインする" do
    get login_path
    post login_path, params: { session: { email: "", password: @user.password } }
    assert_response :unprocessable_entity
  end

  test "無効なpasswordでログインする" do
    get login_path
    post login_path, params: { session: { email: @user.email, password: "" } }
    assert_response :unprocessable_entity
  end
end