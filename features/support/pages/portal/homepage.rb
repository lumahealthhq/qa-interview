class Homepage < Page
  # Sidebar links
  div :referrals, text: 'Referrals'

  def goto_referrals
    referrals_div.click
    wait_for_dom
  end
end
