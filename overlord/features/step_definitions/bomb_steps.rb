
Given /^The bomb is not activated$/ do
  expect(page.find_by_id('status').text).to eq('Inactive')
end

Given /^I try to start the bomb with the code$/ do
  visit('/')
  fill_in('message', with: '1234')
  click_button('submit')
end

Then /^It should be activated/ do
  expect(page.find_by_id('status').text).to eq('Active')
end