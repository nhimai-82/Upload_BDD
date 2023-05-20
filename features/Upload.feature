Feature: Upload validation
@Regression

Scenario: Successful File Upload

 Given I am on the Upload page
 When I select a 'file_to_upload.txt' file within the allowed file size limit
 And accept the terms
 And click on the Submit button
 Then I should see a 'success' message

Scenario: Uploading with Empty File

 Given I am on the Upload page
 When accept the terms
 And click on the Submit button
 Then I should see a 'error' message

Scenario: File Upload Exceeding Size Limit

 Given I am on the Upload page
 When I select a 'max_to_upload.txt' file within the allowed file size limit
 And accept the terms
 And click on the Submit button
 Then I should see a 'error' message

Scenario: Uploading File Without Accepting Terms

 Given I am on the Upload page
 When I select a 'file_to_upload.txt' file within the allowed file size limit
 And not accept the terms
 And click on the Submit button
 Then I should see a 'error' message

