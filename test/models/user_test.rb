require "test_helper"

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(email: "user@example.com", password: "foooobar", password_confirmation: "foooobar")
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

  test "emailのバリデーションは有効なアドレスを受け入れる" do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
                         first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert @user.valid?, "#{valid_address.inspect}は有効なメールアドレスです"
    end
  end

  test "emailのバリデーションは無効なアドレスを受け入れない" do
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
                           foo@bar_baz.com foo@bar+baz.com]
    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert_not @user.valid?, "#{invalid_address.inspect}は無効なメールアドレスです"
    end
  end

  test "emailアドレスは一意の値である" do
    duplicate_user = @user.dup
    @user.save
    assert_not duplicate_user.valid?
  end

  test "emailアドレスは小文字で保存される" do
    mixed_case_email = "Foo@ExAMPle.CoM"
    @user.email = mixed_case_email
    @user.save
    assert_equal mixed_case_email.downcase, @user.reload.email
  end

  test "空欄のパスワードは無効" do
    @user.password = @user.password_confirmation = " " * 8
    assert_not @user.valid?
  end

  test "パスワードは8文字以上" do
    @user.password = @user.password_confirmation = "a" * 7
    assert_not @user.valid?
  end
end