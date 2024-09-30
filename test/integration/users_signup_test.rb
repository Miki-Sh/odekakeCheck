require "test_helper"

class UsersSignupTest < ActionDispatch::IntegrationTest
  test "無効なユーザー登録情報" do
    get signup_path
    assert_no_difference 'User.count' do
      post users_path, params: { user: { email: "user@invalid",
                                         password:              "foo",
                                         password_confirmation: "bar" } }
    end
    assert_response :unprocessable_entity
  end

  test "有効なユーザー登録情報" do
    assert_difference 'User.count', 1 do
      post users_path, params: { user: { email: "user@example.com",
                                         password:              "password",
                                         password_confirmation: "password" } }
    end
    assert_response :created
    assert is_logged_in?
  end
end