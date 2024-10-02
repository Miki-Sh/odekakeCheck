require "test_helper"

class UsersEditTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:michael)
  end

  test "編集失敗" do
    get edit_user_path(@user)
    patch user_path(@user), params: { user: { email: "foo@invalid",
                                              password:              "foo",
                                              password_confirmation: "bar" } }
    assert_response :unprocessable_entity
  end

  test "編集成功" do
    get edit_user_path(@user)
    email = "foo@bar.com"
    patch user_path(@user), params: { user: { email: email,
                                              password:              "",
                                              password_confirmation: "" } }
    assert_response :ok
    @user.reload
    assert_equal email, @user.email
  end
end