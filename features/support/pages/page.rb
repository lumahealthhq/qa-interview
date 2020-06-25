Watirsome.settable << :input

class Page
  include Watirsome

  def initialize
    super(browser)
  end

  element :html, tag_name: 'html'
  element :head, tag_name: 'head'
  element :body, tag_name: 'body'

  def open_url(url)
    browser.goto(url)
    self.class.new
  end

  def refresh
    browser.refresh
  end

  def current_url
    browser.url
  end

  def scroll_to_top
    browser.scroll.to(:top)
  end

  def scroll_to_end
    browser.scroll.to(:end)
  end

  def body
    body_element.text
  end

  def has_text?(text)
    body_element.text.include?(text)
  end

  private

  def browser
    Features::Helpers::Watir.browser
  end

  def wait_for_dom
    html_element.wait_until(&:dom_changed?)
  end
end
