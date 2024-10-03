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
    assert_response :ok
    assert is_logged_in?
    delete logout_path
    assert_response :no_content
    assert_not is_logged_in?
  end

  test "remember_tokenキーがある時のログイン" do
    log_in_as(@user, remember_me: '1')
    assert_equal cookies['remember_token'], assigns(:user).remember_token
  end

  test "remember_tokenキーがない時のログイン" do
    # cookieを保存してログイン
    log_in_as(@user, remember_me: '1')
    delete logout_path
    # cookieを削除してログイン
    log_in_as(@user, remember_me: '0')
    assert_empty cookies['remember_token']
  end
end