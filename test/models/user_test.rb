require "test_helper"

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(email: "user@example.com")
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "空欄のemailは無効" do
    @user.email = "     "
    assert_not @user.valid?
  end

  test "emailは255文字以下" do
    @user.email = "a" * 244 + "@example.com"
    assert_not @user.valid?
  end
end