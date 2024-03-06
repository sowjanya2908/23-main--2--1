const unsatisfiedServicesTemplate = `
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title></title>
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
  <!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
  <!--<![endif]-->
</head>

<body>
  <div class="es-wrapper-color">
    <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#ffffff"></v:fill>
			</v:background>
		<![endif]-->
    <table class="es-wrapper" style="background-position: center top;" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td class="esd-email-paddings" valign="top">
            <table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center">
              <tbody>
                <tr>
                  <td class="esd-stripe" align="center">
                    <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0"
                      cellpadding="0" align="center">
                      <tbody>
                        <tr>
                          <td class="esd-structure" align="left">
                            <table width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td class="esd-container-frame" width="600" valign="top" align="center">
                                    <table
                                      style="border-radius: 3px; border-collapse: separate; background-color: #fcfcfc;"
                                      width="100%" cellspacing="0" cellpadding="0" bgcolor="#fcfcfc">
                                      <tbody>
                                        <tr>
                                          <td class="esd-block-text es-m-txt-l es-p30t es-p20r es-p20l" align="center">
                                            <h2 style="color: #333333;">Welcome to Yoda Diagnostics</h2>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td class="esd-structure es-p30t es-p20r es-p20l" style="background-color: #fcfcfc;"
                            esd-custom-block-id="15791" bgcolor="#fcfcfc" align="left">
                            <table width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td class="esd-container-frame" width="560" valign="top" align="center">
                                    <table
                                      style="border-color: #efefef; border-style: solid; border-width: 1px; border-radius: 3px; border-collapse: separate; background-color: #ffffff;"
                                      width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                      <tbody>
                                        <tr>
                                          <td class="esd-block-text es-p20t es-p15b" align="center">
                                            <h3 style="color: #333333;">Doctor information:</h3>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td class="esd-block-text" align="center">
                                            <p style="color: #64434a; font-size: 16px; line-height: 150%;">Name: <%=
                                                doctor %>
                                            </p>
                                            <p style="color: #64434a; font-size: 16px; line-height: 150%;">Hospital: <%=
                                                hospitalName %>
                                            </p>
                                            <p style="color: #64434a; font-size: 16px; line-height: 150%;">Visited On:
                                              <%= visitedDate %>
                                            </p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td class="esd-block-text es-p20t es-p15b" align="center">
                                            <h3 style="color: #333333;">Has issues with our services:</h3>
                                            <%for(var j=0 ;j < has_issues_with_our_services.length;j++) { %>
                                              <p>Logistic support</p>
                                              <% } %>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td class="esd-block-text es-p20t es-p15b" align="center">
                                            <h3 style="color: #333333;">Unsatisfied with our services:</h3>
                                            <%for(var j=0 ;j < unsatisfied_with_our_services.length;j++) { %>
                                              <p>Escalate to the scientific team for immediate trouble shooting</p>
                                              <% } %>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>

</html>`

export default unsatisfiedServicesTemplate