require "test_helper"

class TodoTest < ActiveSupport::TestCase
  def setup
    @todo = Todo.new(task: "火の元を確認する")
  end

  test "有効なTodoか" do
    assert @todo.valid?
  end

  test "taskが空欄だと無効になるか" do
    @todo.task = "   "
    assert_not @todo.valid?
  end

  test "taskが31文字以上だと無効になるか" do
    @todo.task = "a" * 31
    assert_not @todo.valid?
  end
end