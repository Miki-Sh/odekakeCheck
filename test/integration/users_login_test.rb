require "test_helper"

class UsersLoginTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:michael) # users.ymlのmichaelを参照
  end

  test "無効なemailでログインする" do
    get login_path
    post login_path, params: { session: { email: "hoge@email.com", password: "password" } }
    assert_response :unprocessable_entity
  end

  test "無効なpasswordでログインする" do
    get login_path
    post login_path, params: { session: { email: @user.email, password: "hogehoge" } }
    assert_response :unprocessable_entity
  end

  test "有効な情報でログインして、ログアウトする" do
    post login_path, params: { session: { email: @user.email, password: "password" } }
    assert is_logged_in?
    delete logout_path
    assert_not is_logged_in?
    assert_response :see_other
  end
end