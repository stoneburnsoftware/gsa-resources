<!-- *** START OF STYLESHEET *** -->

<!-- **********************************************************************
 XSL to format the search output for Google Search Appliance
     ********************************************************************* -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

<!-- **********************************************************************
  GSA embedded mode support for websites that wants to display GSA search
  experience embedded inside the parent contaifner via  proxying the
  request to the GSA. DO NOT EDIT the below part.
*************************************************************************** -->
<!-- Incoming query parameter identifying root path prefix to be used for links
     that should refresh the main page. -->
<xsl:variable name="embedded_mode_root_path_param" select="'emmain'" />
<!-- Incoming query parameter identifying root path prefix to be used for
     resources that should be loaded in isolation e.g. images, CSS, JS,
     AJAX requests etc. over an HTTP connection. -->
<xsl:variable name="embedded_mode_resource_root_path_param"
    select="'emsingleres'" />
<!-- Incoming query parameter for enabling/disabling style for embedded
     mode. -->
<xsl:variable name="embedded_mode_disable_style" select="'emdstyle'" />
<!-- Incoming query parameter specifying the GSA host name to be used for
     documill full preview viewer. -->
<xsl:variable name="embedded_mode_dps_viewer_param" select="'emdvhost'" />
<!-- Root path prefix for full-refresh requests that should be used instead
     of GSA's default "/search" root path prefix. -->
<xsl:variable name="embedded_mode_root_path_prefix"
    select="/GSP/PARAM[@name=$embedded_mode_root_path_param]/@value" />
<!-- Root path prefix for resources (e.g. CSS, images, JavaScript, AJAX requests
     etc.) that should be used instead of GSA's default "/" root path
     prefix. -->
<xsl:variable name="embedded_mode_resource_root_path_prefix"
    select="/GSP/PARAM[@name=$embedded_mode_resource_root_path_param]/@value" />
<!-- The GSA host to be used for documill full preview viewer. -->
<xsl:variable name="embedded_mode_dps_viewer_host"
    select="/GSP/PARAM[@name=$embedded_mode_dps_viewer_param]/@value" />
<!-- Checks if style should be disabled in embedded mode or not. -->
<xsl:variable name="is_disable_style_in_embedded_mode"
  select="
  if (/GSP/PARAM[@name=$embedded_mode_disable_style]/@value = 'true') then '1'
  else '0'" />
<!-- Checks if the incoming root path prefix arguments are relative paths as
     we don't want to allow absolute paths. -->
<xsl:variable name="invalid_embedded_mode_request" >
  <xsl:if test="
      starts-with(
          normalize-space($embedded_mode_root_path_prefix), 'http://') or
      starts-with(
          normalize-space($embedded_mode_root_path_prefix), 'https://') or
      starts-with(normalize-space(
          $embedded_mode_resource_root_path_prefix), 'http://') or
      starts-with(normalize-space(
          $embedded_mode_resource_root_path_prefix), 'https://') or
      not(starts-with(
          normalize-space($embedded_mode_root_path_prefix), '/')) or
      not(starts-with(
          normalize-space($embedded_mode_resource_root_path_prefix), '/'))">
    <xsl:value-of select="'1'" />
  </xsl:if>
</xsl:variable>
<!-- Flag to signal if current mode is embeddeded or not.
     '1' - yes, '0' - No -->
<xsl:variable name="is_embedded_mode"
    select="if ($embedded_mode_root_path_prefix != '' and
                $invalid_embedded_mode_request != '1') then '1' else '0'" />

<!-- **********************************************************************
  Root path prefix variables that should be used for search and static
  resources throughout.
********************************************************************** -->
<!-- Root path prefix for search requests that should be used instead of GSA's
     default "/search" root path prefix. -->
<xsl:variable name="gsa_search_root_path_prefix">
  <xsl:choose>
    <xsl:when test="$embedded_mode_root_path_prefix != '' and
                    $invalid_embedded_mode_request != '1'">
      <xsl:value-of select="$embedded_mode_root_path_prefix" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="'/search'" />
    </xsl:otherwise>
  </xsl:choose>
</xsl:variable>
<!-- Root path prefix for resources files (e.g. CSS, images, JavaScript etc.)
     and other HTTP requests that should be processed in isolation
     (e.g. Iframe, AJAX etc.) -->
<xsl:variable name="gsa_resource_root_path_prefix">
  <xsl:choose>
    <xsl:when test="$embedded_mode_resource_root_path_prefix != '' and
                    $invalid_embedded_mode_request != '1'">
      <xsl:value-of select="$embedded_mode_resource_root_path_prefix" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="''" />
    </xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<!-- **********************************************************************
 include customer-onebox.xsl, which is auto-generated from the customer's
 set of OneBox Module definitions, and in turn invokes either the default
 OneBox template, or the customer's:
********************************************************************** -->
<xsl:include href="customer-onebox.xsl"/>

<!--
  Expert Search - Include the expert search XSL to get expert search
  functionality. Please DO NOT remove this import as template and
  variables inside this XSL are being used below. To find all expert search
  related changes in this XSL search for "Expert Search" (quotes for clarity)
  string.
-->
<xsl:include href="expertsearch.xsl"/>

<xsl:output method="html"/>

<!-- **********************************************************************
 Logo setup (can be customized)
     - whether to show logo: 0 for FALSE, 1 (or non-zero) for TRUE
     - logo url
     - logo size: '' for default image size
     ********************************************************************** -->

<xsl:variable name="show_logo">0</xsl:variable>
<xsl:variable name="logo_url"><xsl:value-of
    select="$gsa_resource_root_path_prefix" />images/Title_Left.png</xsl:variable>
<xsl:variable name="logo_width">200</xsl:variable>
<xsl:variable name="logo_height">78</xsl:variable>

<!-- **********************************************************************
S. MIRZA CUSTOM FEATURE VARIABLES
********************************************************************** -->
<xsl:variable name="show_map_search_canvas">1</xsl:variable>
<xsl:variable name="show_get_directions_map_canvas">1</xsl:variable>
<xsl:variable name="show_gmap_icon_canvas">1</xsl:variable>
<xsl:variable name="show_date_range_filter">0</xsl:variable>
<xsl:variable name="show_filter_tabs">0</xsl:variable>
<xsl:variable name="show_social_sharing">1</xsl:variable>
<xsl:variable name="show_user_location">1</xsl:variable>
<xsl:variable name="show_my_page_header">1</xsl:variable>
<xsl:variable name="show_copyright">0</xsl:variable>
<xsl:variable name="show_res_url_custom">0</xsl:variable>
<xsl:variable name="show_sort_by_mobile">1</xsl:variable>

<!-- **********************************************************************
 Global Style variables (can be customized): '' for using browser's default
     ********************************************************************** -->

<xsl:variable name="global_font">arial,sans-serif</xsl:variable>
<xsl:variable name="global_font_size"></xsl:variable>
<xsl:variable name="global_bg_color">#ffffff</xsl:variable>
<xsl:variable name="global_text_color">#333333</xsl:variable>
<xsl:variable name="global_link_color">#666</xsl:variable>
<xsl:variable name="global_vlink_color">#551a8b</xsl:variable>
<xsl:variable name="global_alink_color">#ff0000</xsl:variable>


<!-- **********************************************************************
 Result page components (can be customized)
     - whether to show a component: 0 for FALSE, non-zero (e.g., 1) for TRUE
     - text and style
     ********************************************************************** -->

<!-- *** choose result page header: '', 'provided', 'mine', or 'both' *** -->
<xsl:variable name="choose_result_page_header">both</xsl:variable>

<!-- *** customize provided result page header *** -->
<xsl:variable name="show_swr_link">1</xsl:variable>
<xsl:variable name="swr_search_anchor_text">Search Within Results</xsl:variable>
<xsl:variable name="show_result_page_adv_link">0</xsl:variable>
<xsl:variable name="adv_search_anchor_text">Advanced Search</xsl:variable>
<xsl:variable name="show_result_page_help_link">0</xsl:variable>
<xsl:variable name="search_help_anchor_text">Search Tips</xsl:variable>

<!-- *** search boxes *** -->
<xsl:variable name="show_top_search_box">0</xsl:variable>
<xsl:variable name="show_bottom_search_box">0</xsl:variable>
<xsl:variable name="search_box_size">32</xsl:variable>

<!-- *** choose search button type: 'text' or 'image' *** -->
<xsl:variable name="choose_search_button">text</xsl:variable>
<xsl:variable name="search_button_text">Google Search</xsl:variable>
<xsl:variable name="search_button_image_url"></xsl:variable>
<xsl:variable name="search_collections_xslt"></xsl:variable>

<!-- *** search info bars *** -->
<xsl:variable name="show_search_info">1</xsl:variable>

<!-- *** choose separation bar: 'ltblue', 'blue', 'line', 'nothing' *** -->
<xsl:variable name="choose_sep_bar"></xsl:variable>
<xsl:variable name="sep_bar_std_text">Search</xsl:variable>
<xsl:variable name="sep_bar_adv_text">Advanced Search</xsl:variable>
<xsl:variable name="sep_bar_error_text">Error</xsl:variable>

<!-- *** navigation bars: '', 'google', 'link', or 'simple'.
         DO NOT use 'google' as the navigation bar type for secure search
         i.e. when access='a' or access='s'. Read documentation of
         "secure_bottom_navigation_type" variable below. *** -->
<xsl:variable name="show_top_navigation">1</xsl:variable>
<xsl:variable name="choose_bottom_navigation">link</xsl:variable>
<xsl:variable name="my_nav_align">right</xsl:variable>
<xsl:variable name="my_nav_size">-1</xsl:variable>
<xsl:variable name="my_nav_color">#6f6f6f</xsl:variable>

<!-- ***  navigation bar for secure search: DO NOT change.
     Please keep the navigation type as 'simple' for secure search i.e.
     when access='a' or access='s' because results size estimation is not
     available for generating numbered pagination. *** -->
<xsl:variable name="secure_bottom_navigation_type">simple</xsl:variable>

<!-- *** sort by date/relevance *** -->
<xsl:variable name="show_sort_by">1</xsl:variable>

<!-- *** spelling suggestions *** -->
<xsl:variable name="show_spelling">1</xsl:variable>
<xsl:variable name="spelling_text">Did you mean:</xsl:variable>
<xsl:variable name="spelling_text_color">#cc0000</xsl:variable>

<!-- *** synonyms suggestions *** -->
<xsl:variable name="show_synonyms">1</xsl:variable>
<xsl:variable name="synonyms_text">You could also try:</xsl:variable>
<xsl:variable name="synonyms_text_color">#cc0000</xsl:variable>

<!-- *** keymatch suggestions *** -->
<xsl:variable name="show_keymatch">1</xsl:variable>
<xsl:variable name="keymatch_text">KeyMatch</xsl:variable>
<xsl:variable name="keymatch_text_color">#2255aa</xsl:variable>
<xsl:variable name="keymatch_bg_color">#e8e8ff</xsl:variable>

<!-- *** Google Desktop integration *** -->
<xsl:variable name="egds_show_search_tabs">1</xsl:variable>
<xsl:variable name="egds_appliance_tab_label">Appliance</xsl:variable>
<xsl:variable name="egds_show_desktop_results">1</xsl:variable>

<!-- *** onebox information *** -->
<xsl:variable name="show_onebox">0</xsl:variable>
<xsl:variable name="uar_provider"> GSA User-Added Results </xsl:variable>

<!-- *** analytics information *** -->
<xsl:variable name="analytics_account"></xsl:variable>

<!-- *** ASR enabling *** -->
<xsl:variable name="show_asr">1</xsl:variable>

<!-- *** UAR v2, Expert Search - Document directionality. Global variable to
         hold document directionality for the user language. *** -->
<xsl:variable name="document_direction">ltr</xsl:variable>

<!-- *** Dynamic Navigation *** -->
<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />
<xsl:variable name="show_dynamic_navigation">
<xsl:choose>
<xsl:when test="contains($requiredfields_val, 'contenttypename')">
<xsl:text>0</xsl:text>
</xsl:when>
<xsl:otherwise>
<xsl:text>1</xsl:text>
</xsl:otherwise>
</xsl:choose>
</xsl:variable>

<xsl:variable name="dyn_nav_max_rows">20</xsl:variable>
<!-- Expert Search - render dynamic navigation if expanded mode with dynamic
     navigation is configured for this frontend. -->
<xsl:variable name="render_dynamic_navigation"><xsl:if
  test="($show_dynamic_navigation != '0' or
         $show_expert_search_expanded_results = '1') and
         count(/GSP/RES/PARM) > 0">1</xsl:if>
</xsl:variable>

<!-- *** Show Google Apps results on right side as a sidebar element *** -->
<xsl:variable name="show_apps_segmented_ui">0</xsl:variable>

<!-- *** Google Site Search results *** -->
<xsl:variable name="show_gss_results">0</xsl:variable>
<xsl:variable name="gss_search_engine_id"></xsl:variable>

<!-- *** Twitter Search results *** -->
<xsl:variable name="show_twitter_results">0</xsl:variable>
<xsl:variable name="twitter_search_operators"></xsl:variable>

<!-- *** People Search results *** -->
<xsl:variable name="show_people_search">0</xsl:variable>

<!-- *** Translation Integration *** -->
<xsl:variable name="show_translation">0</xsl:variable>
<xsl:param name="translate_key"/>

<!-- *** Sidebar for holding elements that can load data asynchronously *** -->
<xsl:variable name="show_sidebar">
  <xsl:choose>
    <!-- Expert Search - enable sidebar if expert search widget view is
         configured. -->
    <xsl:when test="($show_apps_segmented_ui = '1' or $show_gss_results = '1' or
                     $show_twitter_results = '1' or $show_people_search = '1' or
                     $show_expert_search_widget_view = '1') and
                     $show_expert_search_expanded_results != '1' and
                     $show_dynamic_navigation != '1' and /GSP/Q != '' and
                     ($show_res_clusters = '0' or $res_cluster_position != 'right')">
      <xsl:value-of select="'1'"/>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="'0'"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<!-- *** Document Previews *** -->
<xsl:variable name="show_document_previews">1</xsl:variable>

<!-- **********************************************************************
 Result elements (can be customized)
     - whether to show an element ('1' for yes, '0' for no)
     - font/size/color ('' for using style of the context)
     ********************************************************************** -->

<!-- *** result title and snippet *** -->
<xsl:variable name="show_res_title">1</xsl:variable>
<xsl:variable name="res_title_length">70</xsl:variable>
<xsl:variable name="res_title_length_default">70</xsl:variable>
<xsl:variable name="res_title_color">#002495 !important</xsl:variable>
<xsl:variable name="res_title_size"></xsl:variable>
<xsl:variable name="show_res_snippet">1</xsl:variable>
<xsl:variable name="res_snippet_size">80%</xsl:variable>

<!-- *** keyword match (in title or snippet) *** -->
<xsl:variable name="res_keyword_color"></xsl:variable>
<xsl:variable name="res_keyword_size"></xsl:variable>
<xsl:variable name="res_keyword_format">b</xsl:variable> <!-- 'b' for bold -->

<!-- *** link URL *** -->
<xsl:variable name="show_res_url">1</xsl:variable>
<xsl:variable name="res_url_color">#666</xsl:variable>
<xsl:variable name="res_url_size">-2</xsl:variable>
<xsl:variable name="truncate_result_urls">1</xsl:variable>
<xsl:variable name="truncate_result_url_length">100</xsl:variable>

<!-- *** misc elements *** -->
<xsl:variable name="show_meta_tags">0</xsl:variable>
<xsl:variable name="show_res_size">0</xsl:variable>
<xsl:variable name="show_res_date">0</xsl:variable>
<xsl:variable name="show_res_cache">0</xsl:variable>

<!-- *** used in result cache link, similar pages link, and description *** -->
<xsl:variable name="faint_color">#7777cc</xsl:variable>

<!-- *** show secure results radio button *** -->
<xsl:variable name="show_secure_radio">0</xsl:variable>

<!-- *** show suggestions (remote aut-completions) *** -->
<xsl:variable name="show_suggest">1</xsl:variable>

<!-- **********************************************************************
 Other variables (can be customized)
     ********************************************************************** -->

<!-- *** page title *** -->
<xsl:variable name="front_page_title">Search Home</xsl:variable>
<xsl:variable name="result_page_title">Search Results</xsl:variable>
<xsl:variable name="adv_page_title">Advanced Search</xsl:variable>
<xsl:variable name="error_page_title">Error</xsl:variable>
<xsl:variable name="swr_page_title">Search Within Results</xsl:variable>

<!-- *** choose adv_search page header: '', 'provided', 'mine', or 'both' *** -->
<xsl:variable name="choose_adv_search_page_header">both</xsl:variable>

<!-- *** cached page header text *** -->
<xsl:variable name="cached_page_header_text">This is the cached copy of</xsl:variable>

<!-- *** error message text *** -->
<xsl:variable name="server_error_msg_text">A server error has occurred.</xsl:variable>
<xsl:variable name="server_error_des_text">Check server response code in details.</xsl:variable>
<xsl:variable name="xml_error_msg_text">Unknown XML result type.</xsl:variable>
<xsl:variable name="xml_error_des_text">View page source to see the offending XML.</xsl:variable>

<!-- *** advanced search page panel background color *** -->
<xsl:variable name="adv_search_panel_bgcolor">#cbdced</xsl:variable>

<!-- *** dynamic result cluster options *** -->
<xsl:variable name="show_res_clusters">1</xsl:variable>
<xsl:variable name="res_cluster_position">top</xsl:variable>

<!-- *** alerts2 options *** -->
<xsl:variable name="show_alerts2">0</xsl:variable>

<!-- Expert Search - i18n messages used by the expert search UI component. -->
<xsl:variable name="msg_back_to_main_results_action"><![CDATA[Back to main results]]></xsl:variable>
<xsl:variable name="msg_expert_search_no_experts_found"><![CDATA[No expert(s) found.]]></xsl:variable>
<xsl:variable name="msg_expert_search_switch_to_expanded_mode"><![CDATA[Switch to the expert search results expanded mode]]></xsl:variable>
<xsl:variable name="msg_go_to_previous_page"><![CDATA[Go to the previous results page]]></xsl:variable>
<xsl:variable name="msg_go_to_next_page"><![CDATA[Go to the next results page]]></xsl:variable>
<xsl:variable name="msg_loading_expert_results"><![CDATA[Loading results...]]></xsl:variable>
<xsl:variable name="msg_next_page_action"><![CDATA[Next]]></xsl:variable>
<xsl:variable name="msg_previous_page_action"><![CDATA[Prev]]></xsl:variable>
<xsl:variable name="msg_results_page_number_prefix"><![CDATA[Page]]></xsl:variable>

<!-- *** UAR i18n messages *** -->
<xsl:variable name="msg_uar_added_by"><![CDATA[Added by]]></xsl:variable>
<xsl:variable name="msg_uar_edit"><![CDATA[Edit]]></xsl:variable>
<xsl:variable name="msg_uar_title"><![CDATA[Title]]></xsl:variable>
<xsl:variable name="msg_uar_save"><![CDATA[Save]]></xsl:variable>
<xsl:variable name="msg_uar_cancel"><![CDATA[Cancel]]></xsl:variable>
<xsl:variable name="msg_uar_ok"><![CDATA[Ok]]></xsl:variable>
<xsl:variable name="msg_uar_address"><![CDATA[Address]]></xsl:variable>
<xsl:variable name="msg_uar_or"><![CDATA[or]]></xsl:variable>
<xsl:variable name="msg_uar_delete"><![CDATA[delete]]></xsl:variable>
<xsl:variable name="msg_uar_username"><![CDATA[UserName]]></xsl:variable>
<xsl:variable name="msg_uar_less"><![CDATA[Less]]></xsl:variable>
<xsl:variable name="msg_uar_more"><![CDATA[More]]></xsl:variable>
<xsl:variable name="msg_uar_add_another_result"><![CDATA[Add another result]]></xsl:variable>
<xsl:variable name="msg_uar_add_a_result"><![CDATA[Add a result]]></xsl:variable>
<xsl:variable name="msg_uar_saving"><![CDATA[Saving]]></xsl:variable>
<xsl:variable name="msg_uar_deleting"><![CDATA[Deleting]]></xsl:variable>
<xsl:variable name="msg_uar_save_failed"><![CDATA[Save failed]]></xsl:variable>
<xsl:variable name="msg_uar_delete_failed"><![CDATA[Deletion failed]]></xsl:variable>
<xsl:variable name="msg_uar_error_handling_request"><![CDATA[Error handling this request]]></xsl:variable>
<xsl:variable name="msg_uar_error_deleting"><![CDATA[Error deleting this result! Could not create the request]]></xsl:variable>
<xsl:variable name="msg_uar_error_add_or_update"><![CDATA[Problem adding/updating this result: Could not create the request]]></xsl:variable>

<!-- UAR v2 - i18n messages used by the UAR UI component. -->
<xsl:variable name="msg_uar_confirm_delete_title"><![CDATA[Confirm delete]]></xsl:variable>
<xsl:variable name="msg_uar_confirm_delete_text"><![CDATA[Are you sure you want to delete the user added result?]]></xsl:variable>
<xsl:variable name="msg_uar_confirm_delete_moderation_required"><![CDATA[Are you sure you want to delete the user added resultThe selected result will be deleted only after the administrator reviews and approves the same. The result will continue to show until review is done.]]></xsl:variable>
<xsl:variable name="msg_uar_delete_in_progress"><![CDATA[Deleting...]]></xsl:variable>
<xsl:variable name="msg_uar_add_pending_review_title"><![CDATA[New addition - Admin review pending]]></xsl:variable>
<xsl:variable name="msg_uar_add_pending_review_content"><![CDATA[The result that you contributed has been submitted but it will be displayed only after the administrator reviews and approves the same.]]></xsl:variable>
<xsl:variable name="msg_uar_update_pending_review_title"><![CDATA[Edit - Admin review pending]]></xsl:variable>
<xsl:variable name="msg_uar_update_pending_review_content"><![CDATA[The changes to result that you edited has been submitted but it will be displayed only after the administrator reviews and approves the same.]]></xsl:variable>
<xsl:variable name="msg_uar_delete_pending_review_title"><![CDATA[Delete - Admin review pending]]></xsl:variable>
<xsl:variable name="msg_uar_delete_pending_review_content"><![CDATA[The request for deleting the result has been submitted but result will be deleted only after the administrator reviews and approves the same.]]></xsl:variable>
<xsl:variable name="msg_uar_existing_review_pending_title"><![CDATA[Existing admin review pending]]></xsl:variable>
<xsl:variable name="msg_uar_existing_review_pending_content"><![CDATA[An existing request to update the same result is pending therefore this request is not processed. You can take action only after the administrator reviews the existing request.]]></xsl:variable>
<xsl:variable name="msg_uar_confirm_add_title"><![CDATA[Confirm add - Admin review required]]></xsl:variable>
<xsl:variable name="msg_uar_confirm_add_content"><![CDATA[New result contribution will be submitted for administrator review. The result will be displayed only after the administrator will approve the same.]]></xsl:variable>
<xsl:variable name="msg_uar_confirm_update_title"><![CDATA[Confirm edit - Admin review required]]></xsl:variable>
<xsl:variable name="msg_uar_confirm_update_content"><![CDATA[The changes to the result will be submitted for administrator review. The existing result will continue to show until the administrator approves the changes.]]></xsl:variable>
<xsl:variable name="msg_uar_confirm_submit_request"><![CDATA[Are you sure you want to submit this request?]]></xsl:variable>
<xsl:variable name="msg_uar_review_note"><![CDATA[Note that the existing result will continue to show until the review is done.]]></xsl:variable>
<xsl:variable name="msg_uar_discard_changes_title"><![CDATA[Discard changes]]></xsl:variable>
<xsl:variable name="msg_uar_discard_changes_content"><![CDATA[Do you want to discard existing changes?]]></xsl:variable>
<xsl:variable name="msg_uar_no_results"><![CDATA[No results. Consider contributing a result.]]></xsl:variable>
<xsl:variable name="msg_uar_description"><![CDATA[Description]]></xsl:variable>
<xsl:variable name="msg_uar_enter_title_value"><![CDATA[Enter title to be displayed]]></xsl:variable>
<xsl:variable name="msg_uar_enter_url_value"><![CDATA[Enter absolute URL of the document]]></xsl:variable>
<xsl:variable name="msg_uar_enter_username_value"><![CDATA[Enter user name]]></xsl:variable>
<xsl:variable name="msg_uar_edit_this_result"><![CDATA[Edit this result]]></xsl:variable>
<xsl:variable name="msg_uar_delete_this_result"><![CDATA[Delete this result]]></xsl:variable>
<xsl:variable name="msg_uar_view_all_results"><![CDATA[View all results]]></xsl:variable>
<xsl:variable name="msg_uar_hide_few_results"><![CDATA[Hide few results]]></xsl:variable>
<xsl:variable name="msg_uar_contribute_result"><![CDATA[Contribute a result]]></xsl:variable>
<xsl:variable name="msg_uar_loading_settings"><![CDATA[Loading settings. Please try again in a second.]]></xsl:variable>
<xsl:variable name="msg_uar_server_error"><![CDATA[Server error! Please try again.]]></xsl:variable>
<xsl:variable name="msg_uar_authn_required"><![CDATA[Authentication is required.]]></xsl:variable>
<xsl:variable name="msg_uar_username_required"><![CDATA[Username is required. Please specify the same.]]></xsl:variable>
<xsl:variable name="msg_uar_save_in_progress"><![CDATA[Saving...]]></xsl:variable>

<!-- *** Template to sanitize UAR i18n messages *** -->
<xsl:template name="sanitize_uar_i18n_message">
  <xsl:param name="uar_message_to_be_sanitized"/>
  <xsl:variable name="uar_message_without_apos">
         <xsl:call-template name="replace_string">
           <xsl:with-param name="find" select='"&apos;"'/>
           <xsl:with-param name="replace" select='"\&apos;"'/>
           <xsl:with-param name="string" select="$uar_message_to_be_sanitized"/>
         </xsl:call-template>
  </xsl:variable>
  <xsl:variable name="uar_message_without_apos_double_quotes">
      <xsl:call-template name="escape_quot">
        <xsl:with-param name="string" select="$uar_message_without_apos"/>
      </xsl:call-template>
  </xsl:variable>
  <xsl:variable name="uar_message_without_apos_double_quotes_lt">
         <xsl:call-template name="replace_string">
           <xsl:with-param name="find" select='"&lt;"'/>
           <xsl:with-param name="replace" select='"&amp;lt;"'/>
           <xsl:with-param name="string"
             select="$uar_message_without_apos_double_quotes"/>
         </xsl:call-template>
  </xsl:variable>
  <xsl:variable name="uar_message_without_apos_double_quotes_lt_gt">
         <xsl:call-template name="replace_string">
           <xsl:with-param name="find" select='"&gt;"'/>
           <xsl:with-param name="replace" select='"&amp;gt;"'/>
           <xsl:with-param name="string"
             select="$uar_message_without_apos_double_quotes_lt"/>
         </xsl:call-template>
  </xsl:variable>
  <xsl:value-of select="$uar_message_without_apos_double_quotes_lt_gt"/>
</xsl:template>

<!-- *** UAR v2, Expert Search - Template to include the localized messages
         for UAR and Expert Search component. *** -->
<xsl:template name="include_localized_messages_for_uar_expert_search">
  <script type="text/javascript">
  <xsl:comment>
    // Variable definition included here so that no error is thrown. This will
    // be overriden as soon as the UI component JS library loads.
    var gsa = {'ui': {msg: {}}};

    /**
     * Adds localized messages to be used by the UI component(s).
     */
    function _gsa_addLocalizedMessages() {
      // UAR messages.
      gsa.ui.msg.MSG_CANCEL_BTN =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_cancel"/></xsl:call-template>';
      gsa.ui.msg.MSG_OK_BTN =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_ok"/></xsl:call-template>';
      gsa.ui.msg.MSG_SAVE_BTN =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_save"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_CONFIRM_DELETE_TITLE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_confirm_delete_title"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_CONFIRM_DELETE_TEXT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_confirm_delete_text"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_CONFIRM_DELETE_MODERATION_REQUIRED =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_confirm_delete_moderation_required"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_DELETE_IN_PROGRESS =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_delete_in_progress"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_ADD_PENDING_REVIEW_TITLE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_add_pending_review_title"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_ADD_PENDING_REVIEW_CONTENT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_add_pending_review_content"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_UPDATE_PENDING_REVIEW_TITLE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_update_pending_review_title"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_UPDATE_PENDING_REVIEW_CONTENT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_update_pending_review_content"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_DELETE_PENDING_REVIEW_TITLE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_delete_pending_review_title"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_DELETE_PENDING_REVIEW_CONTENT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_delete_pending_review_content"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_EXISTING_REVIEW_PENDING_TITLE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_existing_review_pending_title"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_EXISTING_REVIEW_PENDING_CONTENT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_existing_review_pending_content"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_CONFIRM_ADD_TITLE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_confirm_add_title"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_CONFIRM_ADD_CONTENT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_confirm_add_content"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_CONFIRM_UPDATE_TITLE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_confirm_update_title"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_CONFIRM_UPDATE_CONTENT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_confirm_update_content"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_CONFIRM_SUBMIT_REQUEST =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_confirm_submit_request"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_REVIEW_NOTE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_review_note"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_DISCARD_CHANGES_TITLE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_discard_changes_title"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_DISCARD_CHANGES_CONTENT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_discard_changes_content"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_NO_RESULTS =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_no_results"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_ADDED_BY =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_added_by"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_DESCRIPTION =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_description"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_ENTER_TITLE_VALUE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_enter_title_value"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_ENTER_URL_VALUE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_enter_url_value"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_ENTER_USERNAME_VALUE =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_enter_username_value"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_EDIT_THIS_RESULT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_edit_this_result"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_DELETE_THIS_RESULT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_delete_this_result"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_VIEW_ALL_RESULTS =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_view_all_results"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_HIDE_FEW_RESULTS =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_hide_few_results"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_CONTRIBUTE_RESULT =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_contribute_result"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_LOADING_SETTINGS =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_loading_settings"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_SERVER_ERROR =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_server_error"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_AUTHN_REQUIRED =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_authn_required"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_USERNAME_REQUIRED =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_username_required"/></xsl:call-template>';
      gsa.ui.msg.MSG_UAR_SAVE_IN_PROGRESS =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_uar_save_in_progress"/></xsl:call-template>';
      // Expert search messages.
      gsa.ui.msg.MSG_LOADING_EXPERT_RESULTS =
          '<xsl:call-template name="sanitize_uar_i18n_message">
            <xsl:with-param name="uar_message_to_be_sanitized"
              select="$msg_loading_expert_results"/></xsl:call-template>';
    }
  //</xsl:comment>
  </script>
</xsl:template>

<!-- *** UAR v2 - Template to include the JavaScript required for the UAR UI
         component. *** -->
<xsl:template name="include_uar_ui_component">
  <script src="{$gsa_resource_root_path_prefix}/uardesktop_compiled.js"
      type="text/javascript">
  </script>
  <script type="text/javascript">
    gsa.ui.uar.init();
  </script>
</xsl:template>

<!-- *** Template to populate the i18n message array which is used by uar.js *** -->
<xsl:template name="populate_uar_i18n_array">
  <script type="text/javascript">
  <xsl:comment>
    // User added results - i18n messages.
    var uar_i18n_messages = {};
    uar_i18n_messages['ADDED_BY'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                       <xsl:with-param name="uar_message_to_be_sanitized"
                                         select="$msg_uar_added_by"/>
                                     </xsl:call-template>' + ' ';
    uar_i18n_messages['EDIT'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                   <xsl:with-param name="uar_message_to_be_sanitized"
                                     select="$msg_uar_edit"/>
                                 </xsl:call-template>';
    uar_i18n_messages['TITLE'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                    <xsl:with-param name="uar_message_to_be_sanitized"
                                      select="$msg_uar_title"/>
                                  </xsl:call-template>'  + ':';
    uar_i18n_messages['SAVE'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                   <xsl:with-param name="uar_message_to_be_sanitized"
                                     select="$msg_uar_save"/>
                                 </xsl:call-template>';
    uar_i18n_messages['CANCEL'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                     <xsl:with-param name="uar_message_to_be_sanitized"
                                       select="$msg_uar_cancel"/>
                                   </xsl:call-template>';
    uar_i18n_messages['ADDRESS'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                      <xsl:with-param name="uar_message_to_be_sanitized"
                                        select="$msg_uar_address"/>
                                    </xsl:call-template>'  + ':';
    uar_i18n_messages['OR'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                 <xsl:with-param name="uar_message_to_be_sanitized"
                                   select="$msg_uar_or"/>
                               </xsl:call-template>'  + ' ';
    uar_i18n_messages['DELETE'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                     <xsl:with-param name="uar_message_to_be_sanitized"
                                       select="$msg_uar_delete"/>
                                   </xsl:call-template>';
    uar_i18n_messages['USERNAME'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                       <xsl:with-param name="uar_message_to_be_sanitized"
                                         select="$msg_uar_username"/>
                                     </xsl:call-template>'  + ':';
    uar_i18n_messages['LESS'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                   <xsl:with-param name="uar_message_to_be_sanitized"
                                     select="$msg_uar_less"/>
                                 </xsl:call-template>';
    uar_i18n_messages['MORE'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                   <xsl:with-param name="uar_message_to_be_sanitized"
                                     select="$msg_uar_more"/>
                                 </xsl:call-template>';
    uar_i18n_messages['ADD_ANOTHER_RESULT'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                                 <xsl:with-param name="uar_message_to_be_sanitized"
                                                   select="$msg_uar_add_another_result"/>
                                               </xsl:call-template>';
    uar_i18n_messages['ADD_A_RESULT'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                           <xsl:with-param name="uar_message_to_be_sanitized"
                                             select="$msg_uar_add_a_result"/>
                                         </xsl:call-template>';
    uar_i18n_messages['SAVING'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                     <xsl:with-param name="uar_message_to_be_sanitized"
                                       select="$msg_uar_saving"/>
                                   </xsl:call-template>'  + '...';
    uar_i18n_messages['DELETING'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                       <xsl:with-param name="uar_message_to_be_sanitized"
                                         select="$msg_uar_deleting"/>
                                     </xsl:call-template>'  + '...';
    uar_i18n_messages['SAVE_FAILED'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                          <xsl:with-param name="uar_message_to_be_sanitized"
                                            select="$msg_uar_save_failed"/>
                                        </xsl:call-template>'  + '!';
    uar_i18n_messages['DELETE_FAILED'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                            <xsl:with-param name="uar_message_to_be_sanitized"
                                              select="$msg_uar_delete_failed"/>
                                          </xsl:call-template>'  + '!';
    uar_i18n_messages['ERROR_HANDLING_REQUEST'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                                     <xsl:with-param name="uar_message_to_be_sanitized"
                                                       select="$msg_uar_error_handling_request"/>
                                                   </xsl:call-template>'  + '.';
    uar_i18n_messages['ERROR_DELETING'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                             <xsl:with-param name="uar_message_to_be_sanitized"
                                               select="$msg_uar_error_deleting"/>
                                           </xsl:call-template>'  + '.';
    uar_i18n_messages['ERROR_ADD_OR_UPDATE'] = '<xsl:call-template name="sanitize_uar_i18n_message">
                                                  <xsl:with-param name="uar_message_to_be_sanitized"
                                                    select="$msg_uar_error_add_or_update"/>
                                                </xsl:call-template>'  + '.';
  //</xsl:comment>
  </script>
</xsl:template>

<!-- *** Previewer i18n messages *** -->
<xsl:variable name="msg_previewer_error"><![CDATA[Transformation error]]></xsl:variable>
<xsl:variable name="msg_previewer_connecting"><![CDATA[Connecting]]></xsl:variable>
<xsl:variable name="msg_previewer_document_too_large"><![CDATA[Document too large]]></xsl:variable>
<xsl:variable name="msg_previewer_hit_page"><![CDATA[Hit page]]></xsl:variable>
<xsl:variable name="msg_previewer_initializing"><![CDATA[Initializing]]></xsl:variable>
<xsl:variable name="msg_previewer_page"><![CDATA[Page]]></xsl:variable>
<xsl:variable name="msg_previewer_pending"><![CDATA[Pending]]></xsl:variable>
<xsl:variable name="msg_previewer_preview_unavailable"><![CDATA[Preview unavailable]]></xsl:variable>



<!-- *** Template to populate the i18n message array which is used by floating previewer widget *** -->
<xsl:template name="populate_previewer_i18n_array">
  <script type="text/javascript">
  <xsl:comment>
    // Document previews - i18n messages.
    var previewer_i18n_messages = {
      'connecting': '<xsl:value-of select="$msg_previewer_connecting"/>',
      'document_too_large': '<xsl:value-of select="$msg_previewer_document_too_large"/>',
      'hitpage': '<xsl:value-of select="$msg_previewer_hit_page"/>',
      'initializing': '<xsl:value-of select="$msg_previewer_initializing"/>',
      'page': '<xsl:value-of select="$msg_previewer_page"/>',
      'pending': '<xsl:value-of select="$msg_previewer_pending"/>',
      'preview_unavailable': '<xsl:value-of select="$msg_previewer_preview_unavailable"/>',
      'transformation_aborted': '<xsl:value-of select="$msg_previewer_error"/>',
      'transformation_cancelled': '<xsl:value-of select="$msg_previewer_error"/>',
      'transformation_error': '<xsl:value-of select="$msg_previewer_error"/>'
    };
  //</xsl:comment>
  </script>
</xsl:template>

<!-- **********************************************************************
 My global page header/footer (can be customized)
     ********************************************************************** -->
<xsl:template name="my_page_header">
  <!-- *** replace the following with your own xhtml code or replace the text
   between the xsl:text tags with html escaped html code *** -->

<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PNZPJF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>
<![CDATA[
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PNZPJF');
]]>
</script>
<!-- End Google Tag Manager -->

<div id="client_top_navigation">

 <script>

 $.get('http://www.globalblue.com/search/?areaNames=navigation', function (data) {

 $('#client_top_navigation').html($('<div></div>').html(data).find('#navigation').clone());

 $(".nav .lng").hover(

 function() {

 $(this).closest("li").addClass("open")

 }, function() {

 $(this).closest("li").removeClass("open")

 }

 );

 $("#mainNav .nav").bootCanvas({

 device:$.fn.deviceNow(),

 toggler:'.navbar-toggle.navbar-left,.slid-close>a'

 });

 $('.offcanvas,.navbar').affix();

 });

 </script>

</div>

<div id="client_header">

 <script>

 $.get('http://www.globalblue.com/search/?areaNames=mainHeader', function (data) {

 $('#client_header').html($('<div></div>').html(data).find('#mainHeader').clone());

 });

 </script>

</div>

<div id="client_leaderboard_ad">
<iframe src="http://www.globalblue.com/search/?areaNames=top" width="100%" name="topIFrame" id="topIFrame" marginheight="0" frameborder="0" scrolling="no"></iframe>
</div>

<xsl:text disable-output-escaping="yes"> &lt;!-- S.MIRZA Please enter html code below. --&gt;

&lt;!-- ************************************************************************
S.MIRZA TOP NAV FROM GLOBAL BLUE
**************************************************************************--&gt;
&lt;!--
&lt;div id="topNavigation"&gt;

&lt;div class="topNavigationHeader "&gt;
&lt;div class="topNavigationHeaderContainer"&gt;
&lt;div class="widget search simpleForm"&gt;
&lt;div class="simpleSearch"&gt;

&lt;form name="gs" method="GET" action="search" onsubmit="return (this.q.value == '') ? false : true;"&gt;

</xsl:text>
	<input type="text" id="searchString" name="q" size="32" maxlength="256" value="{$space_normalized_query}" autocomplete="off" placeholder="Search" />

<xsl:text disable-output-escaping="yes">
    &lt;input type="submit" value="GO" class="button" title="Click here to search"&gt;
        
    &lt;input type="hidden" name="as_q" id="date_range_filter" value=""&gt;
    &lt;input type="hidden" name="client" value="globalblue"&gt;
    &lt;input type="hidden" name="output" value="xml_no_dtd"&gt;
    &lt;input type="hidden" name="proxystylesheet" value="globalblue"&gt;
    &lt;input type="hidden" name="proxyreload" value="1"&gt;
    &lt;input type="hidden" name="getfields" value="*"&gt;
    &lt;input type="hidden" name="sort" value="date:D:L:d1"&gt;
    &lt;input type="hidden" name="oe" value="UTF-8"&gt;
    &lt;input type="hidden" name="ie" value="UTF-8"&gt;
    &lt;input type="hidden" name="ud" value="1"&gt;
    &lt;input type="hidden" name="exclude_apps" value="1"&gt;
    &lt;input type="hidden" name="site" value="globalblue"&gt;
    &lt;input type="hidden" name="filter" value="0"&gt;
&lt;/form&gt;

&lt;/div&gt;
&lt;/div&gt;
&lt;div class="widget code html header_nav_code_widget"&gt;
&lt;div class="header_nav"&gt;
&lt;ul&gt;
&lt;li class="languages"&gt;
&lt;div class="languageSelector"&gt;
&lt;p class="english"&gt;&lt;img src="http://www.globalblue.com/globalblue/skins/global-blue/images/icon-english.png" height="20px" width="20px"&gt;
&lt;span class="languageSelectorArrow"&gt;
&lt;img src="http://www.globalblue.com/globalblue/skins/global-blue/images/icon-arrow-down.png"&gt;
&lt;/span&gt;
&lt;/p&gt;
&lt;div class="languageSelectorDropDown"&gt;
&lt;ul&gt;
&lt;li class="chinese"&gt;&lt;a href="http://www.globalblue.cn/" onclick="_gaq.push(['_link', 'http://www.globalblue.cn/']); return true;"&gt;&lt;img src="http://www.globalblue.com/globalblue/skins/global-blue/images/icon-chinese.png" height="20px" width="20px"&gt;&lt;/a&gt;&lt;/li&gt;
&lt;li class="russian"&gt;&lt;a href="http://www.globalblue.ru"&gt;&lt;img src="http://www.globalblue.com/globalblue/skins/global-blue/images/icon-russian.png" height="20px" width="20px"&gt;
&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt; &lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;script type="text/javascript"&gt;
$(document).ready(function() {
$(".languageSelector").hover(function () {
$(this).addClass('hover');
}, function () {
$(this).removeClass('hover');
}
);	});
&lt;/script&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="widget code html header_nav_code_widget"&gt;
&lt;div class="header_nav"&gt;
&lt;ul&gt;
&lt;li&gt;
&lt;a href="/traveller-services/" target="_blank"&gt;Customer services&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="https://members.global-blue.com/Account/Login" target="_blank"&gt;Login&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;|
&lt;/li&gt;
&lt;li&gt;
&lt;a href="https://members.global-blue.com/Registration/SignupForNewCard?packageReference=041c359d-a8cc-46c7-b4d6-1c374c7d6218&amp;benefitReferences=1d7d1724-4aa1-4087-a8d2-2d0f15fb753e&amp;culture=en-GB&amp;&amp;sourcecode=OUHPG002XXXXXXENG000"&gt;Register&lt;/a&gt;
&lt;/li&gt;
&lt;li class="share_button"&gt;
&lt;a href="http://pinterest.com/globalblue/" target="_blank"&gt;&lt;img src="http://www.globalblue.com/globalblue/skins/global-blue/images/icon-pinterest.png"&gt;&lt;/a&gt;	&lt;/li&gt;
&lt;li class="share_button"&gt;
&lt;a href="https://www.facebook.com/Globalblue" target="_blank"&gt;&lt;img src="http://www.globalblue.com/globalblue/skins/global-blue/images/icon-facebook.png"&gt;&lt;/a&gt;	&lt;/li&gt;
&lt;li class="share_button"&gt;
&lt;a href="https://twitter.com/globalblue" target="_blank"&gt;&lt;img src="http://www.globalblue.com/globalblue/skins/global-blue/images/icon-twitter.png"&gt;&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="widget menu business widget-editable viziwyg-section-4 inpage-widget-295154"&gt;
&lt;ul&gt;
&lt;li&gt;
&lt;a class="businessMainMenu" href="http://business.globalblue.com/"&gt;
Business
&lt;/a&gt;
&lt;span id="businessMenuRightArrow" class="businessMenuRightArrow"&gt;&lt;img src="http://www.globalblue.com/skins/global-blue/images/icon-arrow-right.png"&gt;&lt;/span&gt;
&lt;ul class="submenu"&gt;
&lt;li&gt;
&lt;a href="http://localservices.globalblue.com/"&gt;
&lt;span&gt;My Service Centre &lt;/span&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://corporate.globalblue.com/"&gt;
&lt;span&gt;About us &lt;/span&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;span id="businessMenuLeftArrow" class="businessMenuLeftArrow"&gt;&lt;img src="http://www.globalblue.com/skins/global-blue/images/icon-arrow-left.png"&gt;&lt;/span&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;script type="text/javascript"&gt;
$(document).ready(function() {
var businessMenuLeftArrow = $("#businessMenuLeftArrow");
var businessMenuRightArrow = $("#businessMenuRightArrow");
var subMenu = $(".widget.menu.business ul.submenu");
businessMenuLeftArrow.click(function() {
businessMenuLeftArrow.hide();
subMenu.hide();
businessMenuRightArrow.show();
});
businessMenuRightArrow.click(function() {
businessMenuRightArrow.hide();
businessMenuLeftArrow.show();
subMenu.show();
});
});
&lt;/script&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="topNavigationMenu " style="z-index: 1000; top: 0px;"&gt;
&lt;div class="topNavigationMainMenu"&gt;
&lt;div class="topNavigationMainMenuContainer"&gt;
&lt;div class="widget menu gbMainNavigationNew widget-editable viziwyg-section-905 inpage-widget-283974" id="dropdownNav"&gt;
&lt;script type="text/javascript"&gt;
$(document).ready(function () {
var menuItem = $("#dropdownNav li");
// Hover styling
menuItem.hover(function () {
$(this).addClass('hover');
}, function () {
$(this).removeClass('hover');
});
// Clicked styling
menuItem.click(function () {
var rel = $(this).attr("rel");
var subMenuItem = $('#' + rel);
if (subMenuItem.is(':visible')) {
$(this).removeClass('clicked');
subMenuItem.slideUp('slow');
}
else {
$("#dropdownNav li").removeClass('clicked');
$(this).addClass('clicked');
$(".topNavigationMenu .topNavigationSubMenu .menuPopUp").css("display","none");
subMenuItem.slideDown('slow');
}
});
});
&lt;/script&gt;
&lt;ul&gt;
&lt;li rel="dropdownNav-0" class="first"&gt;
&lt;img src="http://www.globalblue.com/skins/global-blue/images/menu/icon-shop-tax-free.png" alt="" width="40px" height="40px"&gt;
&lt;span class="menuText"&gt;Shop Tax Free&lt;/span&gt;
&lt;span class="navigationDropdownArrow"&gt;&lt;/span&gt;
&lt;/li&gt;
&lt;li rel="dropdownNav-1"&gt;
&lt;img src="http://www.globalblue.com/skins/global-blue/images/menu/icon-destination.png" alt="" width="40px" height="40px"&gt;
&lt;span class="menuText"&gt;Destinations&lt;/span&gt;
&lt;span class="navigationDropdownArrow"&gt;&lt;/span&gt;
&lt;/li&gt;
&lt;li rel="dropdownNav-2"&gt;
&lt;img src="http://www.globalblue.com/skins/global-blue/images/menu/icon-brands.png" alt="" width="40px" height="40px"&gt;
&lt;span class="menuText"&gt;Brands&lt;/span&gt;
&lt;span class="navigationDropdownArrow"&gt;&lt;/span&gt;
&lt;/li&gt;
&lt;li rel="dropdownNav-3"&gt;
&lt;img src="http://www.globalblue.com/skins/global-blue/images/menu/icon-products.png" alt="" width="40px" height="40px"&gt;
&lt;span class="menuText"&gt;Products&lt;/span&gt;
&lt;span class="navigationDropdownArrow"&gt;&lt;/span&gt;
&lt;/li&gt;
&lt;li rel="dropdownNav-4"&gt;
&lt;img src="http://www.globalblue.com/skins/global-blue/images/menu/icon-stores.png" alt="" width="40px" height="40px"&gt;
&lt;span class="menuText"&gt;Stores&lt;/span&gt;
&lt;span class="navigationDropdownArrow"&gt;&lt;/span&gt;
&lt;/li&gt;
&lt;li rel="dropdownNav-5" class="last"&gt;
&lt;a href="https://members.global-blue.com/Registration/Signup?packageReference=041c359d-a8cc-46c7-b4d6-1c374c7d6218&amp;benefitReferences=1d7d1724-4aa1-4087-a8d2-2d0f15fb753e&amp;culture=en-GB&amp;source=OUHPG007XXXXXXENG000"&gt;
&lt;img src="http://www.globalblue.com/skins/global-blue/images/menu/icon-gb-card.png" alt="" width="40px" height="40px"&gt;
&lt;span class="menuText"&gt;Global Blue Card&lt;/span&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="topNavigationSubMenu"&gt;
&lt;div class="topNavigationSubMenuContainer"&gt;
&lt;div id="dropdownNav-0" class="menuPopUp"&gt;
&lt;ul class="topMenuItems"&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/customer-services/tax-free-shopping3/"&gt;How to shop Tax Free?&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/customer-services/tax-free-shopping/"&gt;Where can I shop Tax Free?&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/customer-services/tax-free-shopping/tax-free-shopping-faqs/"&gt;Tax Free Shopping FAQs&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="bottomMenuItems"&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/customer-services/tax-free-shopping/"&gt;Tax Free Shopping&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/customer-services/tax-free-shopping/refund-calculator/"&gt;Refund Calculator&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="https://secure.global-blue.com/traveller-services/refundtracker/"&gt;Refund Tracker&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/customer-services/tax-free-shopping/refund-points/"&gt;Refund Offices&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/customer-services/currency-choice/"&gt;Currency Choice&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/customer-services/contact-us/"&gt;Contact us&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;div id="dropdownNav-1" class="menuPopUp"&gt;
&lt;ul class="topMenuItems"&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/"&gt;Explore All Destinations&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="bottomMenuItems"&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/austria/"&gt;Austria&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/belgium/"&gt;Belgium&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/cyprus/"&gt;Cyprus&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/czechrepublic/"&gt;Czech Republic&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/denmark/"&gt;Denmark&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/finland/"&gt;Finland&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/france/"&gt;France&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/germany/"&gt;Germany&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/greece/"&gt;Greece&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/holland/"&gt;Holland&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/iceland/"&gt;Iceland&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/italy/"&gt;Italy&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/japan/"&gt;Japan&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/lebanon/"&gt;Lebanon&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/norway/"&gt;Norway&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/poland/"&gt;Poland&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/portugal/"&gt;Portugal&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/singapore/"&gt;Singapore&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/spain/"&gt;Spain&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/sweden/"&gt;Sweden&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/switzerland/"&gt;Switzerland&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/turkey/"&gt;Turkey&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/destinations/uk/"&gt;UK&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;div id="dropdownNav-2" class="menuPopUp"&gt;
&lt;ul class="topMenuItems"&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/"&gt;Explore All Brands&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="bottomMenuItems"&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/brands-news/"&gt;Brands News&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/"&gt;Brands In Focus&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/asprey/"&gt;Asprey&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/baldinini/"&gt;Baldinini&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/boggi/"&gt;Boggi&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/bric/"&gt;Bric's&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/casadei/"&gt;Casadei&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/ermanno-scervino/"&gt;Ermanno Scervino&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/kipling/"&gt;Kipling&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/rinascente/"&gt;La Rinascente&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/Mastercard/"&gt;Mastercard&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/moreschi/"&gt;Moreschi&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/patek-philippe/"&gt;Patek Philippe&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/pinko/"&gt;Pinko&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/river-island/"&gt;River Island&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/russellandbromley/"&gt;Russell &amp; Bromley&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/selfridges/"&gt;Selfridges&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/simonetta-ravizza/"&gt;Simonetta Ravizza&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/themall/"&gt;The Mall&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/tiffanyco./"&gt;Tiffany &amp; Co.&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/Timberland/"&gt;Timberland&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/brands/specials/7-for-all-mankind/"&gt;7 For All Mankind&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;div id="dropdownNav-3" class="menuPopUp"&gt;
&lt;ul class="topMenuItems"&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/"&gt;Explore All Products&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="bottomMenuItems"&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/menswear/"&gt;Menswear&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/womenswear/"&gt;Womenswear&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/watches-jewellery/"&gt;Watches &amp; Jewellery&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/footwear/"&gt;Footwear&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/health-beauty/"&gt;Health &amp; Beauty&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/accessories/"&gt;Accessories&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/electronics-gadgets/"&gt;Electronics &amp; Gadgets&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/food-drink/"&gt;Food &amp; Drink&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/bridal/"&gt;Bridal&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/childrenswear/"&gt;Childrenswear&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/lingerie/"&gt;Lingerie&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/sports-leisure/"&gt;Sports &amp; Leisure&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/arts-entertainment/"&gt;Arts &amp; Entertainment&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/products/homewares-furniture/"&gt;Homewares &amp; Furniture&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;div id="dropdownNav-4" class="menuPopUp"&gt;
&lt;ul class="topMenuItems"&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/store-type/"&gt;Explore all store types&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="bottomMenuItems"&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/store-type/boutiques/"&gt;Boutiques&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/store-type/shopping-malls/"&gt;Shopping Malls&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/store-type/department-stores/"&gt;Department Stores&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="http://www.globalblue.com/store-type/outlet-shopping/"&gt;Outlet Shopping&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
--&gt;

&lt;!-- ************************************************************************
S.MIRZA TOP NAV FROM GLOBAL BLUE ENDS
**************************************************************************--&gt;

&lt;div id="holder"&gt;
&lt;div id="holder_padding"&gt;

&lt;div id="middle_panel"&gt;

</xsl:text>

<xsl:choose>
<xsl:when test="/GSP/RES/R !='0'">
<xsl:call-template name="top_results_time_bar">
        <xsl:with-param name="text" select="$sep_bar_error_text"/>
                <xsl:with-param name="show_info" select="0"/>
        <xsl:with-param name="time" select="0"/>
</xsl:call-template>
</xsl:when>
<xsl:when test="/GSP/PARAM[(@name='access') and ((@value='p') or (@value=''))]">
<xsl:call-template name="search_box" />
</xsl:when>
</xsl:choose>

<xsl:if test="/GSP/RES/R !='0'">
<xsl:call-template name="search_box" />
</xsl:if>

<!--<xsl:if test="Q != ''">
      <xsl:call-template name="top_sep_bar">
        <xsl:with-param name="text" select="$sep_bar_std_text"/>
          <xsl:with-param name="show_info" select="$show_search_info"/>
        <xsl:with-param name="time" select="TM"/>
      </xsl:call-template>
</xsl:if>-->

<!--<xsl:if test="/GSP/RES/R !='0' and $show_map_search_canvas != '0'">
<xsl:call-template name="map_search_canvas" />
</xsl:if>-->


<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />


<xsl:if test="/GSP/RES/R/MT[(@N='latitude')]/@V and $show_map_search_canvas != '0' and contains($requiredfields_val, 'contenttypename')">
<div class="geo_btn">
<a>Store Locator</a>
</div>

<!-- JB:EDIT GEO MAP DIV  -->
<div id="geo_map">

<div id="map_canvas"></div>

<!--<div id="get_directions_map_canvas"></div>-->
</div><!--geo_map-->
<!-- JB:EDIT  -->
</xsl:if>

<!--<xsl:call-template name="gen_top_navigation" />-->

<!-- for keymatch results -->
    <xsl:if test="$show_keymatch != '0'">
      <xsl:apply-templates select="/GSP/GM"/>
    </xsl:if>


<!--<xsl:if test="$render_dynamic_navigation = '1'">
<xsl:call-template name="dynamic_navigation_results" />
</xsl:if>-->

<xsl:variable name="main_results_class">
    <xsl:choose>
      <xsl:when test="$render_dynamic_navigation = '1'">main-results</xsl:when>
      <xsl:otherwise>main-results-without-dn</xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

<div class="mobile_buttons_container">
<xsl:if test="/GSP/RES/R !='0' and $main_results_class ='main-results'">
<div id="dn_button">FILTER RESULTS</div>
</xsl:if>

<xsl:if test="$show_sort_by_mobile != '0' and /GSP/RES/R !='0'">
<xsl:call-template name="sort_by_mobile"/>
</xsl:if>
</div><!--mobile_buttons_container-->

<xsl:if test="$render_dynamic_navigation = '1'">
<xsl:call-template name="dynamic_navigation_results" />
</xsl:if>

<xsl:variable name="has_dn">
<xsl:if test="$main_results_class ='main-results'">
<xsl:text> has_dn</xsl:text>
</xsl:if>
</xsl:variable>

<div class="dn_before_here{$has_dn}">

<xsl:if test="$show_sort_by != '0' and /GSP/RES/R !='0'">
<xsl:call-template name="sort_by"/>
</xsl:if>

<!-- *** output results details *** -->
<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

      <xsl:if test="$show_res_clusters = '1' and /GSP/RES/R !='0' and not(contains($requiredfields_val, 'contenttypename'))">
        <xsl:call-template name="cluster_results"/>
      </xsl:if>

<xsl:if test="/GSP/RES/R !='0'and $show_filter_tabs != '0' ">
<xsl:call-template name="render_filter_tabs" />
</xsl:if>

<xsl:if test="/GSP/RES/R/MT[(@N='searchType')]/@V">
<xsl:call-template name="custom_expert_search" />
</xsl:if>

<xsl:call-template name="render_main_results" />

<xsl:if test="Q != '' and not(/GSP/RES/R)">
<xsl:call-template name="no_RES">
<xsl:with-param name="query" select="Q"/>
</xsl:call-template>
</xsl:if>

<div class="clear" />
</div><!--dn_before_here-->

<xsl:if test="/GSP/RES/R/MT[(@N='latitude')]/@V and $show_gmap_icon_canvas != '0'">
<div id="gmap_icon_map_holder">
<div id="close_gmap_icon_map">X</div>
<div id="gmap_icon_map_canvas"></div><!--gmap_icon_map_canvas-->
<div id="directions-panel"></div>
</div><!--gmap_icon_map_holder-->
</xsl:if>

<xsl:call-template name="gen_bottom_navigation" />

<xsl:if test="/GSP/PARAM[(@name='access') and(@value='p')] and /GSP/RES/R !='0' and /GSP/RES/M &gt; 10">
<xsl:call-template name="mobile_pagination" />
</xsl:if>

<xsl:text disable-output-escaping="yes">

&lt;/div&gt;&lt;!--middle_panel--&gt;

</xsl:text>

<div id="right_panel">

<script type="text/javascript" src="http://www.globalblue.com/skins/global-blue/js/iframeResizer.min.js"></script>

<script type="text/javascript">

 $(document).ready(function () {

 $('#rightIFrame').iFrameResize({minHeight: 1680});

 });

</script>

<iframe src=" http://www.globalblue.com/search/?areaNames=right" width="100%" id="rightIFrame" marginheight="0" frameborder="0" scrolling="no"></iframe>

</div><!--right_panel-->

<div class="clear"></div>

</xsl:template>

<xsl:template name="my_page_footer">

<!-- *** S.MIRZA SOCIAL SHARING SCRIPT *** -->
<script>
$('.twitter_sl').on('click', function(){
                var that = $(this),
                    twitterOrigURL = that.attr('title').replace(/\%20/g, '%2520'),
                    twitterText = that.attr('name');
            
                window.open('http://www.twitter.com/share?text=' + twitterText + '&amp;url=' + twitterOrigURL, '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=250,width=600');
            });

$('.google_sl').on('click', function(){
var googleOrigURL = $(this).attr('title').replace(/\%20/g, '%2520'),
    googleURL = googleOrigURL,
    googleText = $(this).attr('name');

window.open('https://plus.google.com/share?url='+googleURL,'_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=250,width=600');
});

$('.facebook_sl').on('click', function(){
                var that = $(this);                   

                window.open('http://www.facebook.com/sharer.php?u={$full_url}&amp;t={T}','_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
            });
</script>

  <span class="p">

<!-- S.MIRZA PAGINATION SCRIPT -->
<script>
currentPageView = '<xsl:value-of select="/GSP/PARAM[@name='start']/@value div 10 +1" />';

if (currentPageView &gt;= 10) {
$('div#bottom_navigation_holder div.pagination_link_selected').nextAll('div.pagination_link:gt(4)').hide();
$('div#bottom_navigation_holder div.pagination_link_selected').prevAll('div.pagination_link:gt(4)').hide();
}//if

else {
$('div#bottom_navigation_holder div.pagination_link:gt(8)').hide();
}

/* ADD ... */
if ($('div.pagination_link').length &gt; 8 &amp;&amp; $('div.pagination_link_selected').next().is('div.pagination_link')) {
var lastPage = $('.pagination_link a:visible').last().text();
$('div#bottom_navigation_holder div.pagination_link:visible:last a').text(lastPage+'...');
}

/* CENTRALISE BOTTOM NAVIGATION HOLDER */
var container = $('div.n #bottom_navigation_holder'),
    prevLinkW = $('#previous_link').outerWidth(true),
    nextLinkW = $('#next_link').outerWidth(true),
    paginationLinkSelectedW = $('.pagination_link_selected').outerWidth(true),
    totalWidth = 0;

$('#bottom_navigation_holder div.pagination_link').each(function(index) {
    totalWidth += parseInt($(this).outerWidth(true), 10);
});

//totalWidth = totalWidth + prevLinkW + nextLinkW + paginationLinkSelectedW;

totalWidth = totalWidth + 80 + paginationLinkSelectedW;

totalWidth = totalWidth + 10;

container.css('width', totalWidth);
</script>

<xsl:text disable-output-escaping="yes"> &lt;!-- S.MIRZA Please enter html code below. --&gt;

&lt;/div&gt;&lt;!--holder_padding--&gt;

</xsl:text>

<div id="client_footer">

 <script>
<![CDATA[
 $.get('http://www.globalblue.com/search/?areaNames=footer', function (data) {

 $('#client_footer').html($('<div></div>').html(data).find('#pageFooter').clone());

 $("footer h4").click(function(e){

 if($.fn.deviceNow){

 var dev=$.fn.deviceNow();

 if(dev!="lg"){

 $(".footerBg ul:visible").slideUp();

 var ul=$(this).nextAll("ul").first();

 if(ul.length && ul.is(":hidden")){

 ul.slideDown();

 }

 }

 }

 });

 });
]]>
 </script>

</div>

<xsl:text disable-output-escaping="yes">

&lt;div id="footer"&gt;

</xsl:text>

  <!-- *** Bottom search box *** -->
  <div id="bottom-search-box">
    <xsl:if test="$show_bottom_search_box != '0' and RES">
      <xsl:call-template name="bottom_search_box"/>
    </xsl:if>
  </div>

<xsl:text disable-output-escaping="yes">


&lt;/div&gt;&lt;!--footer--&gt;
&lt;/div&gt;&lt;!--holder--&gt;
</xsl:text>
  </span>

  <xsl:apply-templates select="TraceNode"/>

<!-- S.MIRZA Dropdown Call -->
<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<xsl:if test="contains($requiredfields_val, 'contenttypename')">
<script>
$(window).load(function() {

var data = {
"Austria":[
{
"cityName": "Graz (and Styria)",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=57"
}
,
{
"cityName": "Innsbruck (and Tyrol)",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=101"
}
,
{
"cityName": "Salzburg",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=56"
}
,
{
"cityName": "Vienna",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=55"
}
]
,
"Belgium":[
{
"cityName": "Brussels",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1303"
}
]
,
"Cyprus":[
{
"cityName": "Nicosia",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1085"
}
]
,
"Czech Republic":[
{
"cityName": "Prague",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1001"
}
]
,
"Denmark":[
{
"cityName": "Copenhagen",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1084"
}
]
,
"Finland":[
{
"cityName": "Helsinki",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=65"
}
,
{
"cityName": "Lappeenranta",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=106"
}
,
{
"cityName": "Imatra",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=107"
}
]
,
"France":[
{
"cityName": "Paris",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=66"
}
,
{
"cityName": "French Riviera",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=67"
}
]
,
"Germany":[
{
"cityName": "Berlin",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=60"
}
,
{
"cityName": "Cologne",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=667"
}
,
{
"cityName": "Düsseldorf",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=94"
}
,
{
"cityName": "Frankfurt",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=62"
}
,
{
"cityName": "Hamburg",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=669"
}
,
{
"cityName": "Hanover",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=668"
}
,
{
"cityName": "Munich",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=61"
}
,
{
"cityName": "Stuttgart",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=939"
}
]
,
"Greece":[
{
"cityName": "Athens",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1289"
}
]
,
"Holland":[
{
"cityName": "Amsterdam",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=925"
}
,
{
"cityName": "The Hague (and Delft)",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1299"
}
,
{
"cityName": "Maastricht",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1301"
}
,
{
"cityName": "Rotterdam",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1298"
}
,
{
"cityName": "Utrecht",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1300"
}
]
,
"Iceland":[
{
"cityName": "Reykjavik",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1567"
}
]
,
"Italy":[
{
"cityName": "Florence",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=981"
}
,
{
"cityName": "Milan",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=69"
}
,
{
"cityName": "Rome",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=70"
}
,
{
"cityName": "Venice",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=964"
}
]
,
"Japan":[
{
"cityName": "Tokyo",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=4913"
}
]
,
"Lebanon":[
{
"cityName": "Beirut",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=71"
}
]
,
"Norway":[
{
"cityName": "Oslo",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1555"
}
]
,
"Poland":[
{
"cityName": "Warsaw",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1557"
}
]
,
"Portugal":[
{
"cityName": "Lisbon",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1323"
}
,
{
"cityName": "Porto",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1324"
}
]
,
"Singapore":[
{
"cityName": "Singapore",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=53"
}
]
,
"Spain":[
{
"cityName": "Barcelona",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=64"
}
,
{
"cityName": "Madrid",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=63"
}
]
,
"Sweden":[
{
"cityName": "Stockholm",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=1082"
}
]
,
"Switzerland":[
{
"cityName": "Geneva",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=58"
}
,
{
"cityName": "Lucerne",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=59"
}
,
{
"cityName": "Zurich",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=102"
}
]
,
"Turkey":[
{
"cityName": "Istanbul",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=72"
}
]
,
"UK":[
{
"cityName": "London",
"cityAreaServiceUrl": "http://www.globalblue.com/searchservice/area/?citySectionId=68"
}
]
};

//generateRequiredField();

if ($('#store_city').val() != '') {
generateArea();

}

else {
	$('#store_areas').html('');
$('#store_areas').append('<option value="">All areas</option>');
}

function generateRequiredField() {
<xsl:variable name="brand_q">
<xsl:if test="/GSP/Q != ''">
<xsl:value-of select="$space_normalized_query" />
</xsl:if>
</xsl:variable>

productValue ='';
countryValue ='';
cityValue ='';
areaValue ='';
brandValueURL = '<xsl:value-of select="$brand_q" />';

    productValue = $('#store_products option:selected').attr('value');

    countryValue = $('#store_country option:selected').attr('value');

    cityValue = $('#store_city option:selected').attr('value');

    areaValue = $('#store_areas option:selected').attr('value');

if(typeof areaValue === 'undefined'){
console.log('undefined');
areaValue = '';
}

brandValue = $('#search_input_store input[name="q"]').val();

if (brandValue !== '') {
       brandValue = 'brand:' + brandValue;
    }

    
    productValue = 'product:' + productValue;

    if (countryValue !== '') {
        countryValue = '.country:' + countryValue;
    }

    if (cityValue !== '') {
        cityValue = '.city:' + cityValue;
    }

    if (areaValue !== '') {
        areaValue = '.area:' + areaValue;
    }
    
if (brandValueURL.trim().length === 0) {
requiredFieldVal = productValue + countryValue + cityValue + areaValue;

    requiredField = $('input[name="requiredfields"]').attr('value', requiredFieldVal);
    requiredField = $('input[name="requiredfields"]').attr('value');
}

else {
requiredFieldVal = brandValue+ '.'+ productValue + countryValue + cityValue + areaValue;

    requiredField = $('input[name="requiredfields"]').attr('value', requiredFieldVal);
    requiredField = $('input[name="requiredfields"]').attr('value');
}
    
}//function

function generateArea() {
$('#store_areas').html('');

    var option_selected = $('#store_city option:selected').val();
	
	// scroll all countries
	 cityAreaServiceUrl = '';
	var selectedCountry = '';
	for (var countryId in data) {
		
		// scroll cities for the current country
		selectedCountry = countryId;
		var items = data[countryId];
		for (var itemId in items) {
			
			// check selected city
			var item = items[itemId];
			var city = item.cityName;
			if (city == option_selected) {
				
				cityAreaServiceUrl = item.cityAreaServiceUrl;
				break;
			}
		}
		
		// check URL found
		if (cityAreaServiceUrl != '')
			break;
	}
	
	if (option_selected != '') {
	$.get(cityAreaServiceUrl, function(areas, status){
		
		$('#store_areas').append('<option value="">All areas</option>');
		for (var areaId in areas) {
			var area = areas[areaId];
			$('#store_areas').append($('<option></option>', {
					value: area
			    }).text(area));
		}
	});
	}//if
	
	if (option_selected != '') {
	
    /*$('#store_country').html('<option value="'+selectedCountry+'">'+selectedCountry+'</option>');*/

$('#store_country option[value="'+selectedCountry+'"]').attr('selected','selected');
	
	}//if
	
	else {
	$('#store_areas').html('');
	$('#store_areas').prepend('<option value="">All areas</option>');
	}

//$('.track_change').change(generateRequiredField).keyup(generateRequiredField);

}

function countrySelect() {
    //empty lists 3
    $('#store_areas').html("");

    var option_selected = $('#store_country option:selected').val();
var option_selected_text = $('#store_country option:selected').text();

    if (option_selected_text !== 'All countries') {
        //populate city
        $('#store_city').html('').prepend('<option value="">All cities</option>');

        $.each(data[option_selected], function (index, element) {
            $('#store_city').append($('<option></option>', {
                value: element.cityName
            }).text(element.cityName));
        });

        //populate area
$('#store_areas').prepend('<option value="">All areas</option>');

$.each(data[option_selected], function (index, element) {

    $.get(element.cityAreaServiceUrl, function (areas, status) {

        /*$('#store_areas').append($('<option></option>', {
                value: areas
            }).text(areas));
        });*/

        for (var areaId in areas) {
            var area = areas[areaId];
            $('#store_areas').append($('<option></option>', {
                value: area
            }).text(area));
        }
    });
    
});   

    } else {
$('#store_areas').html('').prepend('<option value="">All areas</option>');

        $('#store_city').html('').prepend('<option value="">All cities</option>');
        var citiesArray = new Array();
        for (var countryId in data) {
            items = data[countryId];
            for (var itemId in items) {
                citiesArray.push(items[itemId].cityName);
            }
        }

        citiesArray.sort();

        for (index = 0; index &lt; citiesArray.length; ++index) {
            $('#store_city').append('<option value="' + citiesArray[index] + '">' + citiesArray[index] + '</option>');
        }
    }

    //$('.track_change').change(generateRequiredField).keyup(generateRequiredField);

} //countrySelect

$('#store_country').change(function () {
    countrySelect();
    
});//change

$('#store_city').change(function () {
    generateArea();
    
});//change

});//windowLoad
</script>
</xsl:if>

<!-- S.MIRZA LOADING INDIVIDUAL MARKER MAP -->
<script>
var directionDisplay;

//Add Get Directions Button

function HomeControl(controlDiv, map) {
controlDiv.style.padding = '5px';
// Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.className += 'directions_btn'
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '1px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to get directions';
  controlDiv.appendChild(controlUI);

// Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  controlText.innerHTML = '<b>Get Directions</b>';
  controlUI.appendChild(controlText);

google.maps.event.addDomListener(controlUI, 'click', function() {
    calcRoute();
document.getElementById('gmap_icon_map_canvas').setAttribute("style","width:40%");
document.getElementById('directions-panel').setAttribute("style", "width:55%");
document.getElementById('directions-panel').setAttribute("style", "position:relative");
document.getElementById('directions-panel').setAttribute("style", "visibility:visible");
google.maps.event.trigger(individualMap, 'resize');
  });
}

function initialize() {
  var myLatlng = new google.maps.LatLng(<xsl:call-template name="lat" /><xsl:call-template name="long" />);
  
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng('52.8849565','-1.9770329'),
    icon: 'http://www.globalblue.com/skins/global-blue/images/map-marker-global_refund_store.png',
  }
  individualMap = new google.maps.Map(document.getElementById('gmap_icon_map_canvas'), mapOptions);

  individualMarker = new google.maps.Marker({
      position: myLatlng,
      map: individualMap,
      icon: 'http://www.globalblue.com/skins/global-blue/images/map-marker-global_refund_store.png',
      title: 'Hello World!',
      zoom: 17
  });

// Create the DIV to hold the get directions control
  var homeControlDiv = document.createElement('div');
  var homeControl = new HomeControl(homeControlDiv, individualMap);

  homeControlDiv.index = 10;
  individualMap.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(homeControlDiv);

directionsDisplay.setMap(individualMap);
directionsDisplay.setPanel(document.getElementById("directions-panel"));

}

var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();

function calcMarker() {

var split_gmap_icon_end = gmap_icon_end.split(',');

altShopName = decodeURIComponent(split_gmap_icon_end[2]);


var newLatLng = new google.maps.LatLng(parseFloat(split_gmap_icon_end[0]), parseFloat(split_gmap_icon_end[1]));

markerPos = newLatLng

individualMarker.setPosition(newLatLng);
individualMap.setCenter(newLatLng);

individualMarker.setTitle(altShopName);
}

function calcRoute() {
directionsDisplay.setMap(individualMap);

individualMarker.setMap(null);

var start = pos;
var end = markerPos;

  var request = {
      origin: pos,
      destination: end,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });


var closeGmap = document.getElementById('close_gmap_icon_map');
google.maps.event.addDomListener(closeGmap, 'click', function() {
if(directionsDisplay != null) { 
   directionsDisplay.setMap(null);
   //directionsDisplay = null;
} //remove direction overlay

<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<xsl:choose>
<xsl:when test="contains($requiredfields_val, 'contenttypename')">
document.getElementById('gmap_icon_map_canvas').setAttribute("style","width:640px");
google.maps.event.trigger(individualMap, 'resize');
</xsl:when>

<xsl:otherwise>
document.getElementById('gmap_icon_map_canvas').setAttribute("style","width:470px");
google.maps.event.trigger(individualMap, 'resize');
</xsl:otherwise>
</xsl:choose>

});

}

google.maps.event.addDomListener(window, 'load', initialize);
</script>

<!-- Please call pinit.js only once per page -->
<script type="text/javascript" async="async" src="//assets.pinterest.com/js/pinit.js"></script>

<!-- S.MIRZA STORE LOCATOR WRAP EVERY TWO DIVS WITH AFTER TWO -->
<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<xsl:if test="contains($requiredfields_val, 'contenttypename')">
<script>
$(window).load(function() {
resultHolder = $('.result_holder');

function place_after_two() {
    if ($('.main-results-without-dn').width() &gt;= 640) {
        for (var i = 0; i &lt; resultHolder.length; i += 2) {
            resultHolder.slice(i, i + 2)
                .wrapAll('<div class="after_two" />');
        } //for
    } //if

    else {
        if (resultHolder.parent().is('.after_two')) {
            resultHolder.unwrap();
        } //if
    }
} //function

    if ($('.main-results-without-dn').width() >= 640) {
        place_after_two();
    } //if

    $(window).resize(function () {
        place_after_two();
    });
});
</script>
</xsl:if>

<script type="text/javascript">
var map;
var marker;
var contentString = [];


function initialize() {

  var mapOptions = {
    draggable: true,
    zoom: 10,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT
    },
    panControl: true,
    panControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
    },
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    scaleControl: true,
    scaleControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
    },
    streetViewControl: true,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    },

  drawingControl: true,

 center: new google.maps.LatLng(<xsl:call-template name="lat" /> <xsl:call-template name="long" />)
}

  var map = new google.maps.Map(document.getElementById('map_canvas'),
                                mapOptions);

  setMarkers(map, beaches);

/* DRAWING TOOLS */

var drawingManager = new google.maps.drawing.DrawingManager({
  //drawingMode: google.maps.drawing.OverlayType.MARKER,
  drawingControl: true,
  drawingControlOptions: {
    position: google.maps.ControlPosition.TOP_CENTER,
    drawingModes: [
      google.maps.drawing.OverlayType.RECTANGLE
    ]
  },
  circleOptions: {
    fillColor: '#ffff00',
    fillOpacity: 1,
    strokeWeight: 5,
    clickable: false,
    zIndex: 1,
    editable: true
  },

  rectangleOptions: {
    editable: true,
    draggable: true
  }
});
drawingManager.setMap(map);

/* END OF DRAWING TOOLS */

google.maps.event.addDomListener(drawingManager, 'rectanglecomplete', function(rectangle) {
  var ne = rectangle.getBounds().getNorthEast();
  var sw = rectangle.getBounds().getSouthWest();
  var nelat = ne.lat() + 90;
  var nelong = ne.lng() + 180;
  var swlat = sw.lat() + 90;
  var swlong = sw.lng() + 180;

var as_q_lat = swlat+'..'+nelat;

var as_q_long = swlong+'..'+nelong;

var as_q_latlong = 'inmeta:latitude_custom:'+as_q_lat+' AND inmeta:longitude_custom:'+as_q_long;

<xsl:variable name="current_url">
<xsl:value-of select="$gsa_search_root_path_prefix"/>?<xsl:value-of select="$no_as_q_search_url"
  />
</xsl:variable>

var r=confirm("Update search results");
if (r==true)
  {
  var url = '<xsl:value-of select="$current_url" />&amp;as_q='+as_q_latlong;
  window.location = url;
  }
else
  {
  rectangle.setMap(null);
  }

});

google.maps.event.addListener(drawingManager, 'bounds_changed', function(rectangle) {
  var ne = rectangle.getBounds().getNorthEast();
  var sw = rectangle.getBounds().getSouthWest();
alert (ne);
});

}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */

var beaches = [
<xsl:call-template name="result_markers" />
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: 'images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(20, 32),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coord: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
  };
/* for (var i = 0; i &lt; locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[0], beach[1]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        icon: 'http://www.globalblue.com/skins/global-blue/images/map-marker-global_refund_store.png',
        map: map
    });
  } */

var bounds = new google.maps.LatLngBounds();

//var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

var icons = {
          stores: {
            icon: 'http://www.globalblue.com/skins/global-blue/images/map-marker-global_refund_store.png'
          },
          global_refund_store: {
icon: 'http://www.globalblue.com/skins/global-blue/images/map-marker-global_refund_store.png'
},
          hotel_spa: {
            icon: 'http://www.globalblue.com/skins/global-blue/images/map-marker-hotel_spa.png'
          },
paid_false: {
            icon: 'http://www.globalblue.com/skins/global-blue/images/map-marker-other.png'
          },
default: {
            icon: 'http://www.globalblue.com/skins/global-blue/images/map-marker-hotel_spa.png'
          }
};

  for (var i = 0; i &lt; locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var iconIdx = beach[3];
    var nonPaidIconIdn = beach[4];
	
if (!iconIdx) {
    iconIdx = "default";
}

else if (nonPaidIconIdn === 'false') {
    iconIdx = "paid_false";
}

else {
    iconIdx = beach[3];
}

var iwContent = decodeURI(beach[0]);
var iwContent = decodeURIComponent(iwContent);
	
    var marker = new google.maps.Marker({
      position: myLatLng,
      url: beach[3],
      content: iwContent,
      icon: icons[iconIdx].icon,
      map: map
    });

console.log(icons[beach[3]].icon);

google.maps.event.addListener(marker, 'click', function() {
infowindow.setContent(this.content);
infowindow.open(map, this);



   //url = this.url;
   //url = '#'+url;
  //currentURL = document.url;
   //window.location.href = url;
});

bounds.extend(myLatLng);

}

  map.fitBounds(bounds);
  map.panToBounds(bounds);

}//setMarkers

var infowindow = new google.maps.InfoWindow({
maxWidth: 250
});

google.maps.event.addDomListener(window, 'load', initialize);
</script>

<!-- S.MIRZA handle the click of get gmap icons -->
<script>

$( 'a.gmap_button' ).on( 'click', function() {
gmap_icon_end = $(this).attr('name');

individualMarker.setMap(individualMap);

if(directionsDisplay != null) { 
   directionsDisplay.setMap(null);
   //directionsDisplay = null;
} //remove direction overlay

<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />



<xsl:choose>
<xsl:when test="contains($requiredfields_val, 'contenttypename')">
document.getElementById('gmap_icon_map_canvas').setAttribute("style","width:640px");
google.maps.event.trigger(individualMap, 'resize');
</xsl:when>

<xsl:otherwise>
document.getElementById('gmap_icon_map_canvas').setAttribute("style","width:470px");
google.maps.event.trigger(individualMap, 'resize');
</xsl:otherwise>
</xsl:choose>

calcMarker();

<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<xsl:choose>
<xsl:when test="contains($requiredfields_val, 'contenttypename')">

if ( $(window).width() &gt; 650 ) {
var clickedDiv = $(this).closest('.after_two');

$('.store_locator_btn_clicked').removeClass('store_locator_btn_clicked');
$(this).addClass('store_locator_btn_clicked');

$( '.store_map_active' ).removeClass('store_map_active');
$('.store_locator_btn_clicked').closest('.result_holder').addClass('store_map_active');

storeLocatorBtn = $('.store_locator_btn_clicked').closest('.result_holder');

$('#gmap_icon_map_holder').insertAfter(clickedDiv);
clickedDiv.css('margin-bottom', '0');
$('#gmap_icon_map_holder').visible().css({
        'position': 'relative',
        'z-index': '0',
        'padding-top': '0'
    });
;

}//if

else {
var clickedDiv = $(this).closest('.result_holder');
$('#gmap_icon_map_holder').insertAfter(clickedDiv);
clickedDiv.css('margin-bottom', '0');
$('#gmap_icon_map_holder').visible().css({
        'position': 'relative',
        'z-index': '0'
    });

$('#directions-panel').invisible().css({
        'position': 'absolute',
        'z-index': '-200'
    });

;
}//else

$('#close_gmap_icon_map').on('click', function() {

clickedDiv.css('margin-bottom', '15px');

$( '.store_map_active' ).removeClass('store_map_active');
$('.store_locator_btn_clicked').removeClass('store_locator_btn_clicked');

$('#gmap_icon_map_holder').invisible().css({
        'position': 'absolute',
        'z-index': '-200'
    });

$('#directions-panel').invisible().css({
        'position': 'absolute',
        'z-index': '-200',
        'visibility': 'hidden'
    });
;
});//close_gmap_icon_map

</xsl:when>

<xsl:otherwise>
var clickedDiv = $(this).closest('.result_holder');
$('#gmap_icon_map_holder').insertAfter(clickedDiv);
clickedDiv.css('margin-bottom', '0');
$('#gmap_icon_map_holder').visible().css({
        'position': 'relative',
        'z-index': '0'
    });

$('#directions-panel').invisible().css({
        'position': 'absolute',
        'z-index': '-200'
    });

;

$('#close_gmap_icon_map').on('click', function() {
clickedDiv.css('margin-bottom', '15px');
$('#gmap_icon_map_holder').invisible().css({
        'position': 'absolute',
        'z-index': '-200px'
    });


$('#directions-panel').invisible().css({
        'position': 'absolute',
        'z-index': '-200',
        'visibility': 'hidden'
    });
;
});//close_gmap_icon_map
</xsl:otherwise>
</xsl:choose>

});
</script>

</xsl:template>

<!-- *** showing up serve-logs in footer *** -->
<xsl:template match="TraceNode">
  <table>
    Total time taken : <span style='font-style: italics;' id='total_time'><xsl:value-of select="(@out-time - @in-time) div 1000000"/></span>
    <xsl:apply-templates select="Record"/>
  </table>
</xsl:template>

<xsl:template match="Record">
   <tr>
     <td> <xsl:value-of select="Stmt/@log"/> </td>
     <td> <i><xsl:value-of select="@time-from-start"/></i> </td>
   </tr>
</xsl:template>

<!-- **********************************************************************
 Logo template (can be customized)
     ********************************************************************** -->
<xsl:template name="logo">
    <a ctype='logo' href="{$home_url}"><img src="{$logo_url}"
      width="{$logo_width}" height="{$logo_height}"
      alt="Go to Google Home" border="0" /></a>
</xsl:template>


<!-- **********************************************************************
 Search result page header (can be customized): logo and search box
     ********************************************************************** -->
<xsl:template name="result_page_header">
    <input type="hidden" name="security_token" id="token">
      <xsl:attribute name="value">
        <xsl:value-of select="/GSP/SECURITY_TOKEN"/>
      </xsl:attribute>
    </input>
    <table border="0" cellpadding="0" cellspacing="0">
      <xsl:if test="$show_logo != '0'">
        <tr>
          <td rowspan="3" valign="top">
            <xsl:call-template name="logo"/>
            <xsl:call-template name="nbsp3"/>
          </td>
        </tr>
      </xsl:if>
      <xsl:if test="$show_top_search_box != '0'">
        <tr>
          <td valign="middle">
            <xsl:call-template name="search_box">
              <xsl:with-param name="type" select="'std_top'"/>
            </xsl:call-template>
          </td>
        </tr>
      </xsl:if>
      <xsl:if test="/GSP/CT">
                <tr>
          <td valign="top">
            <br/>
            <xsl:call-template name="stopwords"/>
            <br/>
          </td>
        </tr>
      </xsl:if>
    </table>
</xsl:template>


<!-- **********************************************************************
 Search within results page header (can be customized): logo and search box 
     ********************************************************************** -->
<xsl:template name="swr_page_header">
    <table border="0" cellpadding="0" cellspacing="0">
      <xsl:if test="$show_logo != '0'">
        <tr>
          <td rowspan="3" valign="top">
            <xsl:call-template name="logo"/>
            <xsl:call-template name="nbsp3"/>
          </td>
        </tr>
      </xsl:if>
      <xsl:if test="$show_top_search_box != '0'">
        <tr>
          <td valign="middle">
            <xsl:call-template name="search_box">
              <xsl:with-param name="type" select="'swr'"/>
            </xsl:call-template>
          </td>
        </tr>
      </xsl:if>
    </table>
</xsl:template>


<!-- **********************************************************************
 Home search page header (can be customized): logo and search box
     ********************************************************************** -->
<xsl:template name="home_page_header">
<xsl:if test="$show_my_page_header = '0'">
    <input type="hidden" name="security_token" id="token">
      <xsl:attribute name="value">
        <xsl:value-of select="/GSP/SECURITY_TOKEN"/>
      </xsl:attribute>
    </input>
    <table border="0" cellpadding="0" cellspacing="0">
      <xsl:if test="$show_logo != '0'">
        <tr>
          <td rowspan="3" valign="top">
            <xsl:call-template name="logo"/>
            <xsl:call-template name="nbsp3"/>
          </td>
        </tr>
      </xsl:if>
      <xsl:if test="$show_top_search_box != '0'">
        <tr>
          <td valign="middle">
            <xsl:call-template name="search_box">
              <xsl:with-param name="type" select="'home'"/>
            </xsl:call-template>
          </td>
        </tr>
      </xsl:if>
    </table>
</xsl:if>
</xsl:template>


<!-- **********************************************************************
 Separation bar variables (used in advanced search header and result page)
     ********************************************************************** -->
<xsl:variable name="sep_bar_border_color">
  <xsl:choose>
    <xsl:when test="$choose_sep_bar = 'ltblue'">#3366cc</xsl:when>
    <xsl:when test="$choose_sep_bar = 'blue'">#3366cc</xsl:when>
    <xsl:otherwise>#333333</xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<xsl:variable name="sep_bar_bg_color">
  <xsl:choose>
    <xsl:when test="$is_embedded_mode = '1'">#efefef</xsl:when>
    <xsl:when test="$choose_sep_bar = 'ltblue'">#e5ecf9</xsl:when>
    <xsl:when test="$choose_sep_bar = 'blue'">#3366cc</xsl:when>
    <xsl:otherwise>#333333</xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<xsl:variable name="sep_bar_text_color">
  <xsl:choose>
    <xsl:when test="$choose_sep_bar = 'ltblue'">#000000</xsl:when>
    <xsl:when test="$choose_sep_bar = 'blue'">#ffffff</xsl:when>
    <xsl:otherwise><xsl:value-of select="$global_text_color"/></xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<!-- **********************************************************************
 Advanced search page header HTML (can be customized)
     ********************************************************************** -->
<xsl:template name="advanced_search_header">
      <table border="0" cellpadding="0" cellspacing="0">

        <tr>

          <td valign="top">
            <xsl:if test="$show_logo != '0'">
                  <xsl:call-template name="logo"/>
            </xsl:if>
          </td>
        </tr>
      </table>
</xsl:template>


<!-- **********************************************************************
 Cached page header (can be customized)
     ********************************************************************** -->
<xsl:template name="cached_page_header">
  <xsl:param name="cached_page_url"/>
  <xsl:variable name="stripped_url" select="substring-after($cached_page_url,
                                                            '://')"/>
<table border="1" width="100%">
  <tr>
    <td>
      <table border="1" width="100%" cellpadding="10" cellspacing="0"
        bgcolor="{$global_bg_color}" color="{$global_bg_color}">
        <tr>
          <td>
            <font face="{$global_font}" color="{$global_text_color}" size="-1">
             <xsl:value-of select="$cached_page_header_text"/>
             <xsl:call-template name="nbsp"/>
             <xsl:choose>
              <xsl:when test="starts-with($cached_page_url,
                                          $db_url_protocol)">
               <a ctype="cache" href="{concat('/db/',$stripped_url)}">
               <font color="{$global_link_color}">
               <xsl:value-of select="$cached_page_url"/></font></a>.<br/>
              </xsl:when>
              <xsl:when test="starts-with($cached_page_url,
                                          $nfs_url_protocol)">
               <a ctype="cache" href="{concat('/nfs/',$stripped_url)}">
               <font color="{$global_link_color}">
               <xsl:value-of select="$cached_page_url"/></font></a>.<br/>
              </xsl:when>
              <xsl:when test="starts-with($cached_page_url,
                                          $smb_url_protocol)">
               <a ctype="cache" href="{concat('/smb/',$stripped_url)}">
               <font color="{$global_link_color}">
               <xsl:value-of select="$cached_page_url"/></font></a>.<br/>
              </xsl:when>
              <xsl:when test="starts-with($cached_page_url,
                                          $unc_url_protocol)">
               <xsl:variable name="display_url">
                 <xsl:call-template name="convert_unc">
                   <xsl:with-param name="string" select="$stripped_url"/>
                 </xsl:call-template>
               </xsl:variable>
               <a ctype="cache" href="{concat('file://',$stripped_url)}">
               <font color="{$global_link_color}">
               <xsl:value-of select="$display_url"/></font></a>.<br/>
              </xsl:when>
              <xsl:otherwise>
               <a ctype="cache" href="{$cached_page_url}"><font color="{$global_link_color}">
               <xsl:value-of select="$cached_page_url"/></font></a>.<br/>
              </xsl:otherwise>
             </xsl:choose>
            </font>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<hr/>
</xsl:template>

<!-- **********************************************************************
 Suggest service javascript (do not customize)
     ********************************************************************** -->
<xsl:template name="gsa_suggest">
<xsl:variable name="ss_g_one_name_to_display">Suggestion</xsl:variable>
<xsl:variable name="ss_g_more_names_to_display">Suggestions</xsl:variable>
<xsl:variable name="ss_non_query_empty_title">No Title</xsl:variable>
<script type="text/javascript">
/**
 * HTML element names for the search form, the spellchecking suggestion, and the
 * cluster suggestions. The search form must have the following input elements:
 * "q" (for search box), "site", "client".
 * @type {string}
 */
var ss_form_element = 'suggestion_form'; // search form

/**
 * Name of search suggestion drop down.
 * @type {string}
 */
var ss_popup_element = 'search_suggest'; // search suggestion drop-down

/**
 * Types of suggestions to include.  Just one options now, but reserving the
 * code for more types
 *   g - suggest server
 * Array sequence determines how different suggestion types are shown.
 * Empty array would effectively turn off suggestions.
 * @type {object}
 */
var ss_seq = [ 'g' ];

/**
 * Suggestion type name to display when there is only one suggestion.
 * @type {string}
 */
var ss_g_one_name_to_display =
    "<xsl:value-of select="$ss_g_one_name_to_display"/>";

/**
 * Suggestion type name to display when there are more than one suggestions.
 * @type {string}
 */
var ss_g_more_names_to_display =
    "<xsl:value-of select="$ss_g_more_names_to_display"/>";

/**
 * The max suggestions to display for different suggestion types.
 * No-positive values are equivalent to unlimited.
 * For key matches, -1 means using GSA default (not tagging numgm parameter),
 * 0 means unlimited.
 * Be aware that GSA has a published max limit of 10 for key matches.
 * @type {number}
 */
var ss_g_max_to_display = 10;

/**
 * The max suggestions to display for all suggestion types.
 * No-positive values are equivalent to unlimited.
 * @type {number}
 */
var ss_max_to_display = 12;

/**
 * Idling interval for fast typers.
 * @type {number}
 */
var ss_wait_millisec = 300;

/**
 * Delay time to avoid contention when drawing the suggestion box by various
 * parallel processes.
 * @type {number}
 */
var ss_delay_millisec = 30;

/**
 * Host name or IP address of GSA.
 * Null value can be used if the JS code loads from the GSA.
 * For local test, use null if there is a &lt;base> tag pointing to the GSA,
 * otherwise use the full GSA host name
 * @type {string}
 */
var ss_gsa_host = null;

/**
 * Constant that represents legacy output format.
 * @type {string}
 */
var SS_OUTPUT_FORMAT_LEGACY = 'legacy';

/**
 * Constant that represents OpenSearch output format.
 * @type {string}
 */
var SS_OUTPUT_FORMAT_OPEN_SEARCH = 'os';

/**
 * Constant that represents rich output format.
 * @type {string}
 */
var SS_OUTPUT_FORMAT_RICH = 'rich';

/**
 * What suggest request API to use.
 *   legacy - use current protocol in 6.0
 *            Request: /suggest?token=&lt;query>&amp;max_matches=&lt;num>&amp;use_similar=0
 *            Response: [ "&lt;term 1>", "&lt;term 2>", ..., "&lt;term n>" ]
 *                   or
 *                      [] (if no result)
 *   os -     use OpenSearch protocol
 *            Request: /suggest?q=&lt;query>&amp;max=&lt;num>&amp;site=&lt;collection>&amp;client=&lt;frontend>&amp;access=p&amp;format=os
 *            Response: [
 *                        "&lt;query>",
 *                        [ "&lt;term 1>", "&lt;term 2>", ... "&lt;term n>" ],
 *                        [ "&lt;content 1>", "&lt;content 2>", ..., "&lt;content n>" ],
 *                        [ "&lt;url 1>", "&lt;url 2>", ..., "&lt;url n>" ]
 *                      ] (where the last two elements content and url are optional)
 *                   or
 *                      [ &lt;query>, [] ] (if no result)
 *   rich -   use rich protocol from search-as-you-type
 *            Request: /suggest?q=&lt;query>&amp;max=&lt;num>&amp;site=&lt;collection>&amp;client=&lt;frontend>&amp;access=p&amp;format=rich
 *            Response: {
 *                        "query": "&lt;query>",
 *                        "results": [
 *                          { "name": "&lt;term 1>", "type": "suggest", "content": "&lt;content 1>", "style": "&lt;style 1>", "moreDetailsUrl": "&lt;url 1>" },
 *                          { "name": "&lt;term 2>", "type": "suggest", "content": "&lt;content 2>", "style": "&lt;style 2>", "moreDetailsUrl": "&lt;url 2>" },
 *                          ...,
 *                          { "name": "&lt;term n>", "type": "suggest", "content": "&lt;content n>", "style": "&lt;style n>", "moreDetailsUrl": "&lt;url n>" }
 *                        ]
 *                      } (where type, content, style, moreDetailsUrl are optional)
 *                   or
 *                      { "query": &lt;query>, "results": [] } (if no result)
 * If unspecified or null, using legacy protocol.
 * @type {string}
 */
var ss_protocol = SS_OUTPUT_FORMAT_RICH;

/**
 * Whether to allow non-query suggestion items.
 * Setting it to false can bring results from "os" and "rich" responses into
 * backward compatible with "legacy".
 * @type {boolean}
 */
var ss_allow_non_query = true;

/**
 * Default title text when the non-query suggestion item does not have a useful
 * title.
 * The default display text should be internalionalized.
 * @type {string}
 */
var ss_non_query_empty_title =
    "<xsl:value-of select="$ss_non_query_empty_title"/>";

/**
 * Whether debugging is allowed.  If so, toggle with F2 key.
 * @type {boolean}
 */
var ss_allow_debug = false;
</script>
<script type="text/javascript"
    src="{$gsa_resource_root_path_prefix}/ss.js">
</script>
</xsl:template>


<!-- **********************************************************************
 "Search Within Results" search input page (can be customized)
     ********************************************************************** -->
<xsl:template name="swr_search">
<html>
  <xsl:call-template name="langHeadStart"/>
    <title><xsl:value-of select="$swr_page_title"/></title>
  <xsl:call-template name="style"/>
  <xsl:call-template name="langHeadEnd"/>

  <body dir="ltr">
  <xsl:call-template name="personalization"/>
  <xsl:call-template name="analytics"/>

  <xsl:call-template name="my_page_header"/>
  <xsl:call-template name="swr_page_header"/>
  <hr/>
  <xsl:call-template name="copyright"/>
  <xsl:call-template name="my_page_footer"/>
  </body>
</html>
</xsl:template>


<!-- **********************************************************************
 "Front door" search input page (can be customized)
     ********************************************************************** -->
<xsl:template name="front_door">
<html>
  <xsl:call-template name="langHeadStart"/>
    <title><xsl:value-of select="$front_page_title"/></title>
  <xsl:call-template name="style"/>
  <xsl:if test="$show_suggest != '0'">
    <script language='javascript'
        src='{$gsa_resource_root_path_prefix}/common.js'></script>
    <script language='javascript'
        src='{$gsa_resource_root_path_prefix}/xmlhttp.js'></script>
    <script language='javascript'
        src='{$gsa_resource_root_path_prefix}/uri.js'></script>
    <xsl:call-template name="gsa_suggest" />
  </xsl:if>
  <xsl:call-template name="langHeadEnd"/>

  <xsl:choose>
    <xsl:when test="$show_suggest != '0'">
    <script language='javascript'
        src='{$gsa_resource_root_path_prefix}/common.js'></script>
    <script language='javascript'
        src='{$gsa_resource_root_path_prefix}/xmlhttp.js'></script>
    <script language='javascript'
        src='{$gsa_resource_root_path_prefix}/uri.js'></script>
      <xsl:call-template name="gsa_suggest" />

      <body onLoad="ss_sf();" dir="ltr">
      <xsl:call-template name="personalization"/>
      <xsl:call-template name="analytics"/>

      <xsl:call-template name="my_page_header"/>
      <xsl:call-template name="home_page_header"/>
      <hr/>
      <xsl:call-template name="copyright"/>
      <xsl:call-template name="my_page_footer"/>
      </body>
    </xsl:when>
    <xsl:otherwise>
      <body dir="ltr">
      <xsl:call-template name="personalization"/>
      <xsl:call-template name="analytics"/>

      <xsl:call-template name="my_page_header"/>
      <xsl:call-template name="home_page_header"/>
      <hr/>
      <xsl:call-template name="copyright"/>
      <xsl:call-template name="my_page_footer"/>
      </body>
    </xsl:otherwise>
  </xsl:choose>

</html>
</xsl:template>


<!-- **********************************************************************
 Empty result set (can be customized)
     ********************************************************************** -->
<xsl:template name="no_RES">
  <xsl:param name="query"/>

  <!-- *** Output Google Desktop results (if enabled and any available) *** -->
  <xsl:if test="$egds_show_desktop_results != '0'">
    <xsl:call-template name="desktop_results"/>
  </xsl:if>
  <!-- *** Handle UAR results, if any ***-->
  <xsl:if test="$show_onebox != '0'  and $show_sidebar != '1'">
    <xsl:if test="/GSP/ENTOBRESULTS/OBRES/provider = $uar_provider">
      <xsl:call-template name="onebox"/>
      <script>
      <xsl:comment>
        if (window['populateUarMessages']) {
          populateUarMessages();
        }
      //</xsl:comment>
      </script>
    </xsl:if>
  </xsl:if>

<style type="text/css">
#dyn_nav { display:none; }
</style>

  <span class="p">
  <br/>
  Your search - <b><xsl:value-of select="$query"/></b> - did not match any documents.
  <br/>
  No pages were found containing <b>"<xsl:value-of select="$query"/>"</b>.
  <br/>
  <br/>
  Suggestions:
  <ul>
    <li>Make sure all words are spelled correctly.</li>
    <li>Try different keywords.</li>
    <xsl:if test="/GSP/PARAM[(@name='access') and(@value='a')]">
      <li>Make sure your security credentials are correct.</li>
    </xsl:if>
    <li>Try more general keywords.</li>
  </ul>
  </span>

</xsl:template>


<!-- ######################################################################
 We do not recommend changes to the following code.  Google Technical
 Support Personnel currently do not support customization of XSLT under
 these Technical Support Services Guidelines.  Such services may be
 provided on a consulting basis, at Google's then-current consulting
 services rates under a separate agreement, if Google personnel are
 available.  Please ask your Google Account Manager for more details if
 you are interested in purchasing consulting services.
     ###################################################################### -->


<!-- **********************************************************************
 Global Style (do not customize)
        default font type/size/color, background color, link color
         using HTML CSS (Cascading Style Sheets)
     ********************************************************************** -->
<xsl:template name="style">
<style>
<xsl:comment>
<xsl:if test="$is_disable_style_in_embedded_mode = '0'">
body,td,div,.p,a,.d,.s{font-family:<xsl:value-of select="$global_font"/>}
body,td,div,.p,a,.d{font-size: <xsl:value-of select="$global_font_size"/>}
body,div,td,.p,.s{color:<xsl:value-of select="$global_text_color"/>}
body,.d,.p{text-align:left !important; background-color:<xsl:value-of select="$global_bg_color"/>}
.s{font-size: <xsl:value-of select="$res_snippet_size"/>}
.g{margin:0; max-width:100%;}
.s td{width:34em}
.l{font-size: <xsl:value-of select="$res_title_size"/>}
a .l{color: <xsl:value-of select="$res_title_color"/>}
a:link,.w,.w a:link{color:<xsl:value-of select="$global_link_color"/>}
.f,.f:link,.f a:link{color:<xsl:value-of select="$faint_color"/>}
/*a:visited,.f a:visited{color:<xsl:value-of select="$global_vlink_color"/>}*/
a:active,.f a:active{color:<xsl:value-of select="$global_alink_color"/>}
.t{color:<xsl:value-of select="$sep_bar_text_color"/>}
.t{background-color:<xsl:value-of select="$sep_bar_bg_color"/>}
.z{display:none}
.i,.i:link{color:#56a2c2}
.a,.a:link{color:<xsl:value-of select="$res_url_color"/>}
div.n {margin-top: 20px; clear:both;}
.n a{font-size: 10pt; color:3f96bb}
.n .i{font-size: 10pt; font-weight:bold}
.q a:visited,.q a:link,.q a:active,.q {color:#d23100;}
.b,.b a{font-size: 12pt; color:#d23100; font-weight:bold}
.d{margin-right:1em; margin-left:1em;}
div.oneboxResults {margin-top: 1em;}
</xsl:if>
.z{display:none}
<xsl:if test="$is_embedded_mode = '1'">
.g {
  margin-top: 15px;
  margin-bottom: 3px;
}
table td.sep {
  background: none !important;
}
</xsl:if>
<xsl:if test="$show_bottom_search_box != '0'">
.bottom-search-box {
  border-bottom: 1px solid <xsl:value-of select="$sep_bar_border_color"/>;
  border-top: 1px solid <xsl:value-of select="$sep_bar_border_color"/>;
}
</xsl:if>
<xsl:if test="$show_alerts2 = '1'">
div.personalization {font-size:84%;padding: 5px;}
</xsl:if>
<xsl:if test="$show_res_clusters = '1'">
  <xsl:choose>
    <xsl:when test="$res_cluster_position = 'top'">
div#clustering {position:relative; overflow:hidden; font-size: 84%; line-height: 140%; height:auto; margin-top: 1em; padding: 3px; text-align:left; background-color:#ede7dd; border-bottom: solid 1px #009fda; cursor:pointer;}
div#clustering h3 {font-size: 100%; font-weight: bold; margin: 0; padding: 0; color: #262b33 !important; }
div#clustering table {margin-left: 2em; font-size: 100%;}
div#clustering table a {white-space: nowrap;}
div#clustering table td {padding-right: 1em;}
div#clustering #cluster_status {color: #262b33 !important; margin-left: 2em; display:none;}
</xsl:when>
    <xsl:when test="$res_cluster_position = 'right'">
div#clustering {font-size: 84%; line-height: 140%; float: right; width: 15em; margin: 2em 0 0 1em; padding-left: 1em; border-left: 1px solid #cccccc;}
div#clustering h3 {font-size: 100%; font-weight: bold; margin: 0 0 0.6em 0; padding: 0;}
div#clustering ul {list-style: none; margin: 0; padding: 0;}
div#clustering li {margin-left: 2em; text-indent: -2em;}
div#clustering #cluster_status {color: #262b33 !important;}
</xsl:when>
  </xsl:choose>
<xsl:if test="$is_disable_style_in_embedded_mode = '1'">
div#clustering,
div#clustering h3,
div#clustering table {
  font-size: inherit;
}
</xsl:if>
</xsl:if>
</xsl:comment>
<xsl:if test="$res_cluster_position = 'right'">
  div.main-results-without-dn {
    margin-right: 15.1em;
  }
</xsl:if>
</style>
<xsl:if test="$show_suggest != '0'">
<style type="text/css">
<xsl:comment>
/**
 * Cascading Style Sheet for GSA Suggest.
 */

/* Classes for suggestion box */
.ss-embed-mode {
  margin-top: 27px !important;
  right: -20px;
  width: 365px;
}

.ss-gac-m {
background: white;
border: 1px solid #ccc;
cursor: default;
font-size: 13px;
line-height: 17px;
margin: 0;
position: absolute;
z-index: 99;
top: 30px;
box-shadow: 0 2px 4px rgba(0,0,0,0.2);
-webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2);
width: 100%; max-width:275px; visibility: hidden;
}

.ss-gac-b {
  background: #36c;
  color: white;
}

.ss-gac-c {
  overflow: hidden;
  padding-left: 3px;
  text-align: left;
  white-space: nowrap;
}

.ss-gac-d {
  color: green;
  font-size: 10px;
  overflow: hidden;
  padding: 0 3px;
  text-align: right;
  white-space: nowrap;
}

.ss-gac-b td {
  color: white;
}

.ss-gac-e td {
  font-size: 10px;
  line-height: 15px;
  padding: 0 3px 2px;
  text-align: right;
}

.ss-gac-e span {
  color: #00c;
  cursor:pointer;
  text-decoration: underline;
}

/* Debug console */

div#ss_debug_console {
  background: #ffefef;
  border: 1px solid #cf7f7f;
  bottom: 2%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 83%;
  height: 60%;
  left: 5%;
  opacity: 0.95;
  overflow: auto;
  padding: 0.5em;
  position: absolute;
  width: 90%;
  z-index: 5000;
}

div#ss_debug_console.expanded {
  height: 60%;
}

div#ss_debug_console.contracted {
  height: 8%;
}

div#ss_debug_console h1 {
  color: #af0000;
  display: inline;
  font-size: 100%;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

div#ss_debug_console button {
  margin: 0em 0.5em;
}

div#ss_debug_console table {
  border-collapse: collapse;
  font-size: 90%;
  line-height: 120%;
  margin-top: 1em;
}

div#ss_debug_console table th {
  padding: 0.2em 1em;
  text-align: left;
}

div#ss_debug_console table td {
  border-top: 1px solid #cf7f7f;
  padding: 0.2em 1em;
}

div#ss_debug_console table td.no {
  text-align: right;
}
</xsl:comment>
</style>
</xsl:if>
<xsl:if test="$render_dynamic_navigation = '1'">
<style type="text/css">
<xsl:comment>
  /**
   * CSS for dynamic navigation.
   */
  div#main_res {
    background: #FFF none repeat scroll 0 0;
    border-left: 1px solid #D3E1F9;
    margin-left: 209px;
    padding-left: 5px;
    padding-right: 4px;
  }
  div#main_res p {
    margin-top: 0;
  }
  div#dyn_nav {
    float:left;
    width: 145px;
    margin-top:15px;
    margin-right:15px;
    text-align:left;
    padding-right:10px;
    border-right: dotted 1px #ccc;
  }

  div#dyn_nav_col {
          padding:0 0 15px;
  }
  div.dn-hdr {
    background-color: #3366FF;
    color: #FFF;
    font-size: 14px;
    height: 23px;
    line-height: 23px;
    margin: 0;
    padding: 0;
  }
  /* Expert Search - add custom style for go back to main results link
     displayed in expert search expanded mode with dynamic navigation. */
  div.dn-exp {
    font-size: 12px;
    margin: 10px 0;
    padding-left: 6px;
  }
  .dn-img {
    background: transparent url("<xsl:value-of select="$embedded_mode_resource_root_path_prefix"/>/remove.gif") no-repeat scroll 0 0;
    border: 0 none;
    height: 9px;
    position: relative;
    width: 11px;
  }
  a.dn-r-img {
    float: right;
    font-weight: bold;
    color: #2a3688 !important;
  }
  #dyn_nav ul, li {
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    vertical-align: middle;
  }
  #dyn_nav li {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  ul.dn-attr {
    font-size: <xsl:value-of select="$res_snippet_size"/>;
    margin: 8px 0 4px 0;
    border-top: 1px dotted #CCCCCC;
padding: 9px 0 5px 1px;
  }
  ul.dn-attr-hidden {
    background: #FFF none repeat scroll 0 0;
    border-top: 1px solid #DFDFFF;
    margin: 0;
    padding: 4px 0 0 0;
  }
  .label-input-label {
    color: GrayText;
  }
  li.dn-attr-hdr {
    font-weight: bold;
    line-height: 1.1;
    outline-style: none;
    padding-bottom: 2px;
    padding-top: 2px;
  }
  .dn-attr-hdr-txt {
    display: inline-block;
    overflow: hidden;
    width: 85%;
    color: #666666;
font-size: 13px;
font-weight: normal;
padding-bottom: 2px;
font-family: Georgia,Arial,Helvetica,sans-serif;
font-style: italic;
  }
  li.dn-attr-hdr div {
    width: 100%;
  }
  input.dn-zippy-input {
    border-style: none;
    font-size: 95%;
    margin-bottom: 2px;
    margin-left: 3px;
    margin-top: 1px;
    width: 97%;
  }
  div.dn-zippy-hdr {
    cursor: pointer;
    outline-style: none;
    margin-left: 2px;
  }
  li.dn-attr-hdr div.dn-zippy-hdr-img {
    background: url("<xsl:value-of select="$embedded_mode_resource_root_path_prefix"/>/images/ic_search.png") no-repeat scroll 0 0 transparent;
    float: right;
    height: 12px;
    margin-right: 4px;
    width: 10px;
  }
  ul.dn-attr a, a.dn-bar-link {
    color: #333;
    text-decoration: none;
  }
  .dn-hidden {
    display: none;
  }
  .dn-inline-block, .dn-bar-rt, .dn-bar-rt table, .dn-img, span.dn-more-img {
    display: inline-block;
  }
  .dn-block {
    display: block;
  }
  span.dyn_nav_header {
    font-weight: bold;
    color:#666;
    text-transform:uppercase;
    font-size:12px;
  }
  .ac-renderer {
    background: white;
    border-bottom: 1px solid #558BE3;
    border-left: 1px solid #A2BFF0;
    border-right: 1px solid #558BE3;
    border-top: 1px solid #A2BFF0;
    min-width: 200px;
    max-width: 400px;
    overflow-x: hidden;
    position: absolute;
  }
  .ac-renderer div {
    cursor: pointer;
    font-size: <xsl:value-of select="$res_snippet_size"/>;
    margin: 3px;
    padding: 1px 2px;
    position: relative;
  }
  .ac-renderer div b {
    color: #3366FF;
  }
  .ac-renderer div.active {
    background-color: #D5E2FF;
    color: #000;
  }
  span.dn-attr-c {
    color: #777;
  }
  a.dn-attr-v {
    display: block;
    overflow-x: hidden;
    width: 99%;
  }
  a.dn-attr-v:visited, a.dn-bar-link:visited {
    color: #333;
  }
  a.dn-attr-v:hover {
    text-decoration: underline;
    color:#57a2c2;
  }
  a.dn-link, .dn-img {
    outline-style: none;
  }
  .dn-overflow {
    overflow-x: hidden;
  }
  .dn-bar-v {
    color: #000;
  }
  .dn-bar-rt {
    border: 0 none;
    float: right;
    margin: -2px 5px 0 20px;
  }
  .dn-bar-nav {
    font-size: <xsl:value-of select="$res_snippet_size"/>;
  }
  span.dn-more-img {
    height: 15px;
    margin-right: 1px;
    overflow: hidden;
    position: relative;
    vertical-align: text-bottom;
    width: 15px;
  }
  span.dn-limg {
    background: transparent url("<xsl:value-of select="$embedded_mode_resource_root_path_prefix"/>/less.gif") no-repeat scroll 0 0;
  }
  span.dn-mimg {
    background: transparent url("<xsl:value-of select="$embedded_mode_resource_root_path_prefix"/>/more.gif") no-repeat scroll 0 0;
  }
  div.dn-bar {
    background-color: #E5ECF9;
    clear: both;
    font-size: <xsl:value-of select="$res_snippet_size"/>;
    padding: 6px;
    width: 100%;
    display:none;
  }
  div.dn-bar dfn {
    font-size: 1.2em;
    padding: 4px;
  }
  div.dn-bar a.cancel-url:hover {
    text-decoration: line-through;
  }
  div.main-results {
    max-width:680px;
  }
  div.oneboxResults table {
    width: 100%;
  }
  <xsl:if test="$is_disable_style_in_embedded_mode = '1'">
  div#main_res {
    background: none;
  }
  .dn-bar-nav,
  div.dn-bar,
  ul.dn-attr {
    background: none;
    font-size: inherit;
  }
  div#dyn_nav {
    background: none;
  }
  div.dn-bar {
    background-color: #efefef;
  }
  ul.dn-attr a, a.dn-bar-link,
  a.dn-attr-v:visited, a.dn-bar-link:visited {
    color: inherit;
  }
  li.dn-attr-hdr,
  div.dn-hdr {
    background-color: #efefef;
    color: #000;
  }
  </xsl:if>
</xsl:comment>
</style>
</xsl:if>
<xsl:if test="$show_sidebar = '1'">
<style type="text/css">
<xsl:comment>
  /** Common CSS for sidebar elements. */
  .sb-r {
    padding: 5px 0 0 5px;
    width: 45%;
  }
  .sb-r-alt {
    padding-top: 5px;
    width: 100%;
  }
  .sb-r-lbl,
  .sb-r-lbl-apps {
    color: #676767;
    font-size: small;
    font-weight: normal;
    margin: 0 0 10px 10px;
    text-align: left;
  }
  .sb-r-border {
    border-left: 1px solid #C9D7F1;
  }
  .sb-r-ld-msg-c {
    margin-bottom: 30px;
  }
  .sb-r-ld-msg {
    background-color: #3366CC;
    color: #FFF;
    font-size: 13px;
    padding: 2px;
  }
  .sb-r-res {
    font-size: 13px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
</xsl:comment>
</style>
</xsl:if>
<xsl:if test="$show_document_previews = '1'">
<style type="text/css">
<xsl:comment>
  /** CSS for document previews. */
  div.result-item {
    position: relative;
  }
  .non-previewable {
    background-color: transparent !important;
    border: 1px solid white !important;
  }
  .non-previewable .s {
    background-color: transparent !important;
  }
  div.result-item .dps-viewer {
    margin: 0;
  }
  body.previews-enabled div.result-item-hover {
    background-color: #ebf2fc;
  }
  body.previews-enabled div.result-item-hover .s {
    background-color: #ebf2fc !important;
  }
  span.toggle-preview {
    display: inline-block;
    margin-left: 5px;
    cursor: pointer;
    width: 10px;
    height: 10px;
    background: transparent url(preview_off.png) no-repeat;
  }
  div.result-item-hover span.toggle-preview {
    color: #0000cc;
    background-image: url(preview_on.png) !important;
  }
  body.previews-enabled span.toggle-preview {
    color: #0000cc !important;
    background-image: url(preview_on.png);
  }
</xsl:comment>
</style>
</xsl:if>
<xsl:if test="$show_translation = '1' and $only_apps != '1'">
<style type="text/css">
<xsl:comment>
.skiptranslate,.goog-te-sectional-gadget-link div,.goog-te-sectional-gadget-all div {
  display: inline;
}
.goog-te-sectional-gadget-link .goog-te-gadget-link {
  background-color: #E5ECF9;
  border: 1px solid #DCDCFF;
  border-radius: 3px 3px;
  color: #03C;
  padding: 0px 5px;
  -moz-border-radius: 3px 3px;
}
span.goog-te-sectional-gadget-link-text {
  font-size: <xsl:value-of select="$res_title_size"/>;
  font-weight: normal;
}
.trns-span, .trns-cache-link {
  display: none;
}
.trns-all-div {
  display: none;
  padding-top: 15px;
  padding-bottom: 10px;
}
.goog-te-sectional-gadget-all .goog-te-gadget-link {
  color: #03C;
  padding-right: 22px;
  padding-left: 7px;
}
.goog-te-sectional-gadget-all-logo {
  padding-left: 7px;
}
</xsl:comment>

</style>
</xsl:if>
</xsl:template>

<!-- **********************************************************************
 URL variables (do not customize)
     ********************************************************************** -->
<!-- *** if this is a test search (help variable)-->
<xsl:variable name="is_test_search"
  select="/GSP/PARAM[@name='testSearch']/@value"/>

<!-- *** if this is a search within results search *** -->
<xsl:variable name="swrnum">
  <xsl:choose>
    <xsl:when test="/GSP/PARAM[(@name='swrnum') and (@value!='')]">
      <xsl:value-of select="/GSP/PARAM[@name='swrnum']/@value"/>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="0"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<!-- *** help_url: search tip URL (html file) *** -->
<xsl:variable name="help_url">/user_help.html</xsl:variable>

<!-- *** base_url: collection info *** -->
<xsl:variable name="base_url">
  <xsl:for-each
    select="/GSP/PARAM[@name = 'client' or

                     @name = 'site' or
                     @name = 'num' or
                     @name = 'output' or
                     @name = 'proxystylesheet' or
                     @name = 'access' or
                     @name = 'lr' or
                     @name = 'ie']">
    <xsl:value-of select="@name"/>=<xsl:value-of select="@original_value"/>
    <xsl:if test="position() != last()">&amp;</xsl:if>
  </xsl:for-each>
</xsl:variable>

<!-- *** home_url: search? + collection info + &proxycustom=<HOME/> *** -->
<xsl:variable name="home_url">
  <xsl:value-of select="$gsa_search_root_path_prefix"/>?<xsl:value-of select="$base_url"
  />&amp;proxycustom=&lt;HOME/&gt;</xsl:variable>


<!-- *** synonym_url: does not include q, as_q, and start elements *** -->
<xsl:variable name="synonym_url"><xsl:for-each
  select="/GSP/PARAM[(@name != 'q') and
                     (@name != 'as_q') and
                     (@name != 'swrnum') and
                     (@name != 'dnavs') and
                     (@name != $embedded_mode_root_path_param) and
                     (@name != $embedded_mode_resource_root_path_param) and
                     (@name != $embedded_mode_disable_style) and
                     (@name != 'ie') and
                     (@name != 'start') and
                     (@name != 'epoch' or $is_test_search != '') and
                     not(starts-with(@name, 'metabased_'))]">
    <xsl:value-of select="@name"/><xsl:text>=</xsl:text>
    <xsl:value-of select="@original_value"/>
    <xsl:if test="position() != last()">
      <xsl:text disable-output-escaping="yes">&amp;</xsl:text>
    </xsl:if>
  </xsl:for-each>
</xsl:variable>

<!-- *** search_url *** -->
<xsl:variable name="search_url">
  <!-- Expert Search - ignore expertsearchasync query param. -->
  <xsl:for-each
      select="/GSP/PARAM[(@name != 'start') and
                         (@name != $embedded_mode_root_path_param) and
                         (@name != $embedded_mode_resource_root_path_param) and
                         (@name != $embedded_mode_disable_style) and
                         (@name != 'swrnum') and
                         (@name != 'expertsearchasync') and
                         (@name != 'epoch' or $is_test_search != '') and
                         not(starts-with(@name, 'metabased_'))]">
    <xsl:choose>
      <xsl:when test="@name = 'only_apps' and $show_apps_segmented_ui = '1'">
        <xsl:value-of select="'exclude_apps=1'" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="@name"/><xsl:text>=</xsl:text>
        <xsl:value-of select="@original_value"/>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:if test="position() != last()">
      <xsl:text disable-output-escaping="yes">&amp;</xsl:text>
    </xsl:if>
  </xsl:for-each>
</xsl:variable>

<!-- *** S.MIRZA search_url *** -->
<xsl:variable name="no_as_q_search_url">
  <!-- Expert Search - ignore expertsearchasync query param. -->
  <xsl:for-each
      select="/GSP/PARAM[(@name != 'start') and
                         (@name != $embedded_mode_root_path_param) and
                         (@name != $embedded_mode_resource_root_path_param) and
                         (@name != $embedded_mode_disable_style) and
                         (@name != 'swrnum') and
                         (@name != 'expertsearchasync') and
                         (@name != 'as_q') and
                         (@name != 'daterange_ddm') and
                         (@name != 'epoch' or $is_test_search != '') and
                         not(starts-with(@name, 'metabased_'))]">
    <xsl:choose>
      <xsl:when test="@name = 'only_apps' and $show_apps_segmented_ui = '1'">
        <xsl:value-of select="'exclude_apps=1'" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="@name"/><xsl:text>=</xsl:text>
        <xsl:value-of select="@original_value"/>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:if test="position() != last()">
      <xsl:text disable-output-escaping="yes">&amp;</xsl:text>
    </xsl:if>
  </xsl:for-each>
</xsl:variable>

<!-- *** S.MIRZA search_url *** -->
<xsl:variable name="no_requiredfields_search_url">
  <!-- Expert Search - ignore expertsearchasync query param. -->
  <xsl:for-each
      select="/GSP/PARAM[(@name != 'start') and
                         (@name != $embedded_mode_root_path_param) and
                         (@name != $embedded_mode_resource_root_path_param) and
                         (@name != $embedded_mode_disable_style) and
                         (@name != 'swrnum') and
                         (@name != 'expertsearchasync') and
                         (@name != 'requiredfields') and
                         (@name != 'epoch' or $is_test_search != '') and
                         not(starts-with(@name, 'metabased_'))]">
    <xsl:choose>
      <xsl:when test="@name = 'only_apps' and $show_apps_segmented_ui = '1'">
        <xsl:value-of select="'exclude_apps=1'" />
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="@name"/><xsl:text>=</xsl:text>
        <xsl:value-of select="@original_value"/>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:if test="position() != last()">
      <xsl:text disable-output-escaping="yes">&amp;</xsl:text>
    </xsl:if>
  </xsl:for-each>
</xsl:variable>

<!-- *** search_url minus any dynamic navigation filters *** -->
<xsl:variable name="search_url_no_dnavs">
  <xsl:for-each
      select="/GSP/PARAM[(@name != 'start') and
                         (@name != $embedded_mode_root_path_param) and
                         (@name != $embedded_mode_resource_root_path_param) and
                         (@name != $embedded_mode_disable_style) and
                         (@name != 'swrnum') and
                         (@name != 'dnavs') and
                         (@name != 'epoch' or $is_test_search != '') and
                         not(starts-with(@name, 'metabased_'))]">
    <xsl:choose>
      <xsl:when test="@name = 'only_apps' and $show_apps_segmented_ui = '1'">
        <xsl:value-of select="'exclude_apps=1'" />
      </xsl:when>
      <xsl:when test="@name = 'q' and /GSP/PARAM[@name='dnavs']">
        <xsl:value-of select="@name"/><xsl:text>=</xsl:text>
        <xsl:value-of select="substring-before(@original_value,
          concat('+', /GSP/PARAM[@name='dnavs']/@original_value))"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="@name"/><xsl:text>=</xsl:text>
        <xsl:value-of select="@original_value"/>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:if test="position() != last()">
      <xsl:text disable-output-escaping="yes">&amp;</xsl:text>
    </xsl:if>
  </xsl:for-each>
</xsl:variable>

<!-- *** url without q and dnavs param *** -->
<xsl:variable name="no_q_dnavs_params">
  <xsl:for-each
      select="/GSP/PARAM[(@name != 'start') and
                         (@name != $embedded_mode_root_path_param) and
                         (@name != $embedded_mode_resource_root_path_param) and
                         (@name != $embedded_mode_disable_style) and
                         (@name != 'swrnum') and
                         (@name != 'q') and
                         (@name != 'dnavs') and
                         (@name != 'epoch' or $is_test_search != '') and
                         not(starts-with(@name, 'metabased_'))]">
    <xsl:value-of select="@name"/><xsl:text>=</xsl:text>
    <xsl:value-of select="@original_value"/>
    <xsl:if test="position() != last()">
      <xsl:text disable-output-escaping="yes">&amp;</xsl:text>
    </xsl:if>
  </xsl:for-each>
</xsl:variable>

 <!-- *** search_url_escaped: safe for inclusion in javascript *** -->
<xsl:variable name="search_url_escaped">
  <xsl:call-template name="replace_string">
    <xsl:with-param name="find" select='"&apos;"'/>
    <xsl:with-param name="replace" select='"%27"'/>
    <xsl:with-param name="string" select="$search_url_no_dnavs"/>
  </xsl:call-template>
</xsl:variable>

<!-- *** filter_url: everything except resetting "filter=" *** -->
<xsl:variable name="filter_url"><xsl:value-of
    select="$gsa_search_root_path_prefix"/>?<xsl:for-each
    select="/GSP/PARAM[(@name != 'filter') and
                       (@name != $embedded_mode_root_path_param) and
                       (@name != $embedded_mode_resource_root_path_param) and
                       (@name != $embedded_mode_disable_style) and
                       (@name != 'epoch' or $is_test_search != '') and
                       not(starts-with(@name, 'metabased_'))]">
    <xsl:value-of select="@name"/><xsl:text>=</xsl:text>
    <xsl:value-of select="@original_value"/>
    <xsl:if test="position() != last()">
      <xsl:text disable-output-escaping="yes">&amp;</xsl:text>
    </xsl:if>
  </xsl:for-each>
  <xsl:text disable-output-escaping='yes'>&amp;filter=</xsl:text>
</xsl:variable>

<!-- *** adv_search_url: search? + $search_url + as_q=$q *** -->
<xsl:variable name="adv_search_url"><xsl:value-of
    select="$gsa_search_root_path_prefix"/>?<xsl:value-of
    select="$search_url_no_dnavs"/>&amp;proxycustom=&lt;ADVANCED/&gt;</xsl:variable>

<!-- *** exclude_apps: stores the value of exclude_apps query string argument,
      if present. A value of '1' indicates that segmented UI should be
      displayed. Value of '0' indicates that normal blended results UI should be
      displayed. -->
<xsl:variable name="exclude_apps">
  <xsl:choose>
    <xsl:when test="/GSP/PARAM[@name='exclude_apps']">
      <xsl:value-of select="/GSP/PARAM[@name='exclude_apps']/@original_value" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="'1'" />
    </xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<!-- *** only_apps: A value of '1' indicates returning only Google Apps
     results. -->
<xsl:variable name="only_apps">
  <xsl:value-of select="/GSP/PARAM[@name='only_apps']/@original_value"/>
</xsl:variable>

<!-- *** db_url_protocol: googledb:// *** -->
<xsl:variable name="db_url_protocol">googledb://</xsl:variable>

<!-- *** googleconnector_protocol: googleconnector:// *** -->
<xsl:variable name="googleconnector_protocol">googleconnector://</xsl:variable>

<!-- *** dbconnector_protocol: dbconnector:// *** -->
<xsl:variable name="dbconnector_protocol">dbconnector://</xsl:variable>

<!-- *** nfs_url_protocol: nfs:// *** -->
<xsl:variable name="nfs_url_protocol">nfs://</xsl:variable>

<!-- *** smb_url_protocol: smb:// *** -->
<xsl:variable name="smb_url_protocol">smb://</xsl:variable>

<!-- *** unc_url_protocol: unc:// *** -->
<xsl:variable name="unc_url_protocol">unc://</xsl:variable>

<!-- *** swr_search_url: search? + $search_url + as_q=$q *** -->
<!-- for secure search no estimates are available(except if Customer enabled them
so we use a sentinel value of -1 for swrnum -->
<xsl:variable name="swr_search_url"><xsl:value-of
    select="$gsa_search_root_path_prefix"/>?<xsl:value-of
    select="$search_url_no_dnavs"/>&amp;swrnum=<xsl:choose>
    <xsl:when test="((($access = 'a') or ($access = 's')) and /GSP/RES/M = '')">
      <xsl:value-of select="-1"/>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="/GSP/RES/M"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<!-- *** analytics_script_url: http://www.google-analytics.com/ga.js *** -->
<xsl:variable
 name="analytics_script_url">http://www.google-analytics.com/ga.js</xsl:variable>

<!-- **********************************************************************
 Search Parameters (do not customize)
     ********************************************************************** -->

<!-- *** num_results: actual num_results per page *** -->
<xsl:variable name="num_results">
  <xsl:choose>
    <xsl:when test="/GSP/PARAM[(@name='num') and (@value!='')]">
      <xsl:value-of select="/GSP/PARAM[@name='num']/@value"/>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="10"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<!-- *** form_params: parameters carried by the search input form *** -->
<xsl:template name="form_params">
  <xsl:for-each
    select="PARAM[@name != 'q' and
                  @name != 'ie' and
                  not(contains(@name, 'as_')) and
                  @name != 'btnG' and
                  @name != 'btnI' and
                  @name != 'site' and
                  @name != 'filter' and
                  @name != 'swrnum' and
                  @name != 'start' and
                  @name != 'access' and
                  @name != $embedded_mode_root_path_param and
                  @name != $embedded_mode_resource_root_path_param and
                  @name != $embedded_mode_disable_style and
                  @name != 'ip' and
                  @name != 'entqr' and
                  @name != 'entqrm' and
                  @name != 'ulang' and
                  @name != 'dnavs' and
                  @name != 'tlen' and
                  @name != 'exclude_apps' and
                  @name != 'only_apps_deb' and
                  @name != 'requiredfields' and
                  @name != 'partialfields' and
                  (@name != 'epoch' or $is_test_search != '') and
                  not(starts-with(@name ,'metabased_'))]">
        <input type="hidden" name="{@name}" value="{@value}" />

      <xsl:if test="@name = 'oe'">
        <input type="hidden" name="ie" value="{@value}" />
      </xsl:if>
    <xsl:text>
    </xsl:text>
  </xsl:for-each>
  <xsl:if test="not(/GSP/PARAM[@name='only_apps'])">
    <!-- Always provide a value for the exclude_apps hidden field
         if only_apps param is not present. -->
    <input type="hidden" name="exclude_apps" value="{$exclude_apps}" />
  </xsl:if>

  <xsl:if test="$search_collections_xslt = '' and PARAM[@name='site']">
    <input type="hidden" name="site" value="{PARAM[@name='site']/@value}"/>
  </xsl:if>
  <xsl:if test="$res_title_length != $res_title_length_default">
    <input type="hidden" name="tlen" value="{$res_title_length}"/>
  </xsl:if>
</xsl:template>

<!-- *** original query without any dynamic navigation filters *** -->
<xsl:variable name="qval">
  <xsl:choose>

<!-- ***************************************************************************
S.MIRZA REMOVE AS_Q FROM SEARCH FIELD
**************************************************************************** -->
<xsl:when test="(/GSP/PARAM[@name='as_q']) and contains(/GSP/Q, 'inmeta')">
<xsl:variable name="q_inmeta"
    select="/GSP/Q"/>

<xsl:for-each select="tokenize($q_inmeta,'inmeta')[1]">
                
<xsl:value-of select="normalize-space(.)"/>
                
</xsl:for-each>
</xsl:when>

    <xsl:when test="/GSP/PARAM[@name='dnavs']">
      <xsl:value-of select="concat(substring-before(/GSP/Q,
        /GSP/PARAM[@name='dnavs']/@value), ' ', substring-after(/GSP/Q,
        /GSP/PARAM[@name='dnavs']/@value))"/>
    </xsl:when>

<xsl:when test="contains(/GSP/Q, 'daterange')">
<xsl:variable name="q_daterange"
    select="/GSP/Q"/>

<xsl:for-each select="tokenize($q_daterange,'daterange')[1]">
                
<xsl:value-of select="normalize-space(.)"/>
                
</xsl:for-each>
</xsl:when>
<xsl:when test="contains(/GSP/Q, 'inmeta')">
<xsl:variable name="q_inmeta"
    select="/GSP/Q"/>

<xsl:for-each select="tokenize($q_inmeta,'inmeta')[1]">
                
<xsl:value-of select="normalize-space(.)"/>
                
</xsl:for-each>
</xsl:when>

    <xsl:otherwise>
      <xsl:value-of select="/GSP/Q"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<xsl:variable name="original_q">
  <xsl:choose>
    <xsl:when test="count(/GSP/PARAM[@name='dnavs']) > 0">
      <xsl:value-of
        select="substring-before(/GSP/PARAM[@name='q']/@original_value,
        concat('+', /GSP/PARAM[@name='dnavs']/@original_value))"/>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="/GSP/PARAM[@name='q']/@original_value"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<!-- *** space_normalized_query: q = /GSP/Q *** -->
<xsl:variable name="space_normalized_query">
  <xsl:value-of select="normalize-space($qval)"
    disable-output-escaping="yes"/>
</xsl:variable>

<!-- *** stripped_search_query: q, as_q, ... for cache highlight *** -->
<xsl:variable name="stripped_search_query"><xsl:for-each
  select="/GSP/PARAM[(@name = 'q') or
                     (@name = 'as_q') or
                     (@name = 'as_oq') or
                     (@name = 'as_epq')]"><xsl:value-of select="@original_value"
  /><xsl:if test="position() != last()"
    ><xsl:text disable-output-escaping="yes">+</xsl:text
     ></xsl:if></xsl:for-each>
</xsl:variable>

<xsl:variable name="access">
  <xsl:choose>
    <xsl:when test="/GSP/PARAM[(@name='access') and ((@value='s') or (@value='a'))]">
      <xsl:value-of select="/GSP/PARAM[@name='access']/@original_value"/>
    </xsl:when>
    <xsl:otherwise>p</xsl:otherwise>
  </xsl:choose>
</xsl:variable>

<!-- **********************************************************************
 Script to get current page.
     ********************************************************************** -->
<xsl:template name="search_home_script">
 <script type="text/javascript">
  function getHomeUrl() {
    return location.href = "/ealerts?shu=" + escape(document.location.href);
  }
 </script>
</xsl:template>

<!-- **********************************************************************
 Shown sign-in/sign-out links at the top of the /search page
     ********************************************************************** -->

<xsl:template name="sign_in">
    <xsl:call-template name="search_home_script"/>
    <div class="personalization" width="100%" align="right">
     <xsl:text disable-output-escaping='yes'>&lt;a href='javascript:getHomeUrl();'&gt;My Alerts&lt;/a&gt;</xsl:text>
    </div>
</xsl:template>

<xsl:template name="signed_in">
  <xsl:call-template name="search_home_script"/>
  <div class="personalization" width="100%" align="right">
    <b><xsl:value-of select="/GSP/LOGIN" /></b> |
     <xsl:text disable-output-escaping='yes'>&lt;a href='javascript:getHomeUrl();'&gt;My Alerts&lt;/a&gt;</xsl:text> |
     <xsl:text disable-output-escaping='yes'>&lt;a href='/uam?action=Logout'&gt;Sign Out&lt;/a&gt;</xsl:text>
  </div>
</xsl:template>

<xsl:template name="personalization">
 <xsl:if test="$show_alerts2 = '1'">
  <xsl:choose>
   <xsl:when test="/GSP/PERSONALIZATION">
    <xsl:choose>
      <xsl:when test="/GSP/LOGIN"><xsl:call-template name="signed_in"/></xsl:when>
      <xsl:otherwise><xsl:call-template name="sign_in" /></xsl:otherwise>
    </xsl:choose>
   </xsl:when>
  </xsl:choose>
 </xsl:if>
</xsl:template>

<!-- **********************************************************************
 Figure out what kind of page this is (do not customize)
     ********************************************************************** -->
<xsl:template match="GSP">
  <xsl:choose>
    <!-- Expert Search - return the expert search results for widget view
         if the current query is for the same. -->
    <xsl:when test="$show_expert_search_widget_view_results = '1'">
      <xsl:call-template name="render_expert_search_results">
        <xsl:with-param name="src_prefix"
            select="concat($gsa_search_root_path_prefix, '?')" />
        <xsl:with-param name="current_search_query_args"
            select="$search_url" />
        <xsl:with-param name="msg_expert_search_no_experts_found"
            select="$msg_expert_search_no_experts_found" />
        <xsl:with-param name="msg_expert_search_switch_to_expanded_mode"
            select="$msg_expert_search_switch_to_expanded_mode" />
        <xsl:with-param name="msg_results_page_number_prefix"
            select="$msg_results_page_number_prefix" />
        <xsl:with-param name="msg_go_to_previous_page"
            select="$msg_go_to_previous_page" />
        <xsl:with-param name="msg_go_to_next_page"
            select="$msg_go_to_next_page" />
        <xsl:with-param name="msg_previous_page_action"
            select="$msg_previous_page_action" />
        <xsl:with-param name="msg_next_page_action"
            select="$msg_next_page_action" />
      </xsl:call-template>
    </xsl:when>
    <xsl:when test="$only_apps = '1' and $show_apps_segmented_ui = '1'">
      <xsl:call-template name="apps_only_search_results"/>
    </xsl:when>
    <xsl:when test="Q">
      <xsl:choose>
        <xsl:when test="($swrnum != 0) or
          (($swrnum = '-1') and (($access = 'a') or ($access = 's')))">
          <xsl:call-template name="swr_search"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:call-template name="search_results"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:when>
    <xsl:when test="CACHE">
      <xsl:choose>
        <xsl:when test="$show_res_cache!='0'">
          <xsl:call-template name="cached_page"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:call-template name="no_RES"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:when>
    <xsl:when test="CUSTOM/HOME">
      <xsl:call-template name="front_door"/>
    </xsl:when>
    <xsl:when test="CUSTOM/ADVANCED">
      <xsl:call-template name="advanced_search"/>
    </xsl:when>
    <xsl:when test="ERROR">
      <xsl:call-template name="error_page">
        <xsl:with-param name="errorMessage" select="$server_error_msg_text"/>
        <xsl:with-param name="errorDescription" select="$server_error_des_text"/>
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template name="error_page">
        <xsl:with-param name="errorMessage" select="$xml_error_msg_text"/>
        <xsl:with-param name="errorDescription" select="$xml_error_des_text"/>
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

<!-- **********************************************************************
 Cached page (do not customize)
     ********************************************************************** -->
<xsl:template name="cached_page">
<xsl:variable name="cached_page_url" select="CACHE/CACHE_URL"/>
<xsl:variable name="cached_page_html" select="CACHE/CACHE_HTML"/>

<!-- *** decide whether to load html page or pdf file *** -->
<xsl:if test="'.pdf' != substring($cached_page_url,
              1 + string-length($cached_page_url) - string-length('.pdf')) and
              not(starts-with($cached_page_url, $db_url_protocol)) and
              not(starts-with($cached_page_url, $nfs_url_protocol)) and
              not(starts-with($cached_page_url, $smb_url_protocol)) and
              not(starts-with($cached_page_url, $unc_url_protocol))">
    <base href="{$cached_page_url}"/>
</xsl:if>

<!-- *** display cache page header *** -->
<xsl:call-template name="cached_page_header">
  <xsl:with-param name="cached_page_url" select="$cached_page_url"/>
</xsl:call-template>

<!-- *** display cached contents *** -->
<xsl:value-of select="$cached_page_html" disable-output-escaping="yes"/>
</xsl:template>

<xsl:template name="escape_quot">
  <xsl:param name="string"/>
  <xsl:call-template name="replace_string">
    <xsl:with-param name="find" select="'&quot;'"/>
    <xsl:with-param name="replace" select="'&amp;quot;'"/>
    <xsl:with-param name="string" select="$string"/>
  </xsl:call-template>
</xsl:template>

<!-- **********************************************************************
 Advanced search page (do not customize)
     ********************************************************************** -->
<xsl:template name="advanced_search">

<xsl:variable name="html_escaped_as_q">
    <xsl:call-template name="escape_quot">
      <xsl:with-param name="string">
        <xsl:choose>
          <xsl:when test="/GSP/PARAM[@name='dnavs']">
            <xsl:value-of select="substring-before(/GSP/PARAM[@name='q']/@value,
              /GSP/PARAM[@name='dnavs']/@value)"/>
          </xsl:when>
          <xsl:otherwise><xsl:value-of select="/GSP/PARAM[@name='q']/@value"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:with-param>
    </xsl:call-template>
    <xsl:if test="/GSP/PARAM[@name='as_q']/@value">
      <xsl:if test="/GSP/PARAM[@name='q']/@value"> 
        <xsl:value-of select="' '"/>
      </xsl:if>
      <xsl:call-template name="escape_quot">
        <xsl:with-param name="string" select="/GSP/PARAM[@name='as_q']/@value"/>
      </xsl:call-template>
    </xsl:if>
</xsl:variable>

<xsl:variable name="html_escaped_as_epq">
    <xsl:call-template name="escape_quot">
      <xsl:with-param name="string" select="/GSP/PARAM[@name='as_epq']/@value"/>
    </xsl:call-template>
</xsl:variable>

<xsl:variable name="html_escaped_as_oq">
    <xsl:call-template name="escape_quot">
      <xsl:with-param name="string" select="/GSP/PARAM[@name='as_oq']/@value"/>
    </xsl:call-template>
</xsl:variable>

<xsl:variable name="html_escaped_as_eq">
    <xsl:call-template name="escape_quot">
      <xsl:with-param name="string" select="/GSP/PARAM[@name='as_eq']/@value"/>
    </xsl:call-template>
</xsl:variable>

<html>
<xsl:call-template name="langHeadStart"/>
<title><xsl:value-of select="$adv_page_title"/></title>
<xsl:call-template name="style"/>

<!-- script type="text/javascript" -->
<script>
<xsl:comment>
function setFocus() {
document.f.as_q.focus(); }
function esc(x){
x = escape(x).replace(/\+/g, "%2b");
if (x.substring(0,2)=="\%u") x="";
return x;
}
function collecturl(target, custom) {
var p = new Array();var i = 0;var url="";var z = document.f;
if (z.as_q.value.length) {p[i++] = 'as_q=' + esc(z.as_q.value);}
if (z.as_epq.value.length) {p[i++] = 'as_epq=' + esc(z.as_epq.value);}
if (z.as_oq.value.length) {p[i++] = 'as_oq=' + esc(z.as_oq.value);}
if (z.as_eq.value.length) {p[i++] = 'as_eq=' + esc(z.as_eq.value);}
if (z.as_sitesearch.value.length)
  {p[i++]='as_sitesearch='+esc(z.as_sitesearch.value);}
if (z.as_lq.value.length) {p[i++] = 'as_lq=' + esc(z.as_lq.value);}
if (z.as_occt.options[z.as_occt.selectedIndex].value.length)
  {p[i++]='as_occt='+esc(z.as_occt.options[z.as_occt.selectedIndex].value);}
if (z.as_dt.options[z.as_dt.selectedIndex].value.length)
  {p[i++]='as_dt='+esc(z.as_dt.options[z.as_dt.selectedIndex].value);}
if (z.lr.options[z.lr.selectedIndex].value != '') {p[i++] = 'lr=' +
  z.lr.options[z.lr.selectedIndex].value;}
if (z.num.options[z.num.selectedIndex].value != '10')
  {p[i++] = 'num=' + z.num.options[z.num.selectedIndex].value;}
if (z.sort.options[z.sort.selectedIndex].value != '')
  {p[i++] = 'sort=' + z.sort.options[z.sort.selectedIndex].value;}
if (typeof(z.client) != 'undefined')
  {p[i++] = 'client=' + esc(z.client.value);}
if (typeof(z.site) != 'undefined')
  {p[i++] = 'site=' + esc(z.site.value);}
if (typeof(z.output) != 'undefined')
  {p[i++] = 'output=' + esc(z.output.value);}
if (typeof(z.proxystylesheet) != 'undefined')
  {p[i++] = 'proxystylesheet=' + esc(z.proxystylesheet.value);}
if (typeof(z.ie) != 'undefined')
  {p[i++] = 'ie=' + esc(z.ie.value);}
if (typeof(z.oe) != 'undefined')
  {p[i++] = 'oe=' + esc(z.oe.value);}

if (typeof(z.access) != 'undefined')
  {p[i++] = 'access=' + esc(z.access.value);}
if (custom != '')
  {p[i++] = 'proxycustom=' + '&lt;ADVANCED/&gt;';}
if (p.length &gt; 0) {
url = p[0];
for (var j = 1; j &lt; p.length; j++) { url += "&amp;" + p[j]; }}
 location.href = target + '?' + url;
}
// </xsl:comment>
</script>

  <xsl:call-template name="langHeadEnd"/>

  <body onload="setFocus()" dir="ltr">
    <xsl:call-template name="personalization"/>
    <xsl:call-template name="analytics"/>

    <!-- *** Customer's own advanced search page header *** -->
    <xsl:if test="$choose_adv_search_page_header = 'mine' or
                    $choose_adv_search_page_header = 'both'">
      <xsl:call-template name="my_page_header"/>
    </xsl:if>

    <!--====Advanced Search Header======-->
    <xsl:if test="$choose_adv_search_page_header = 'provided' or
                    $choose_adv_search_page_header = 'both'">
      <xsl:call-template name="advanced_search_header"/>
    </xsl:if>

    <xsl:call-template name="top_sep_bar">
      <xsl:with-param name="text" select="$sep_bar_adv_text"/>
      <xsl:with-param name="show_info" select="0"/>
      <xsl:with-param name="time" select="0"/>
    </xsl:call-template>

    <!--====Carry over Search Parameters======-->
    <form method="get" action="search" name="f">
      <xsl:if test="PARAM[@name='client']">
        <input type="hidden" name="client"
          value="{PARAM[@name='client']/@value}" />
      </xsl:if>
    <!--==== site is carried over in the drop down if the menu is used =====-->
      <xsl:if test="$search_collections_xslt = '' and PARAM[@name='site']">
        <input type="hidden" name="site" value="{PARAM[@name='site']/@value}"/>
      </xsl:if>
      <xsl:if test="PARAM[@name='output']">
        <input type="hidden" name="output"
          value="{PARAM[@name='output']/@value}" />
      </xsl:if>
      <xsl:if test="PARAM[@name='proxystylesheet']">
        <input type="hidden" name="proxystylesheet"
          value="{PARAM[@name='proxystylesheet']/@value}" />
      </xsl:if>
      <xsl:if test="PARAM[@name='ie']">
        <input type="hidden" name="ie"
          value="{PARAM[@name='ie']/@value}" />
      </xsl:if>
      <xsl:if test="PARAM[@name='oe']">
        <input type="hidden" name="oe"
          value="{PARAM[@name='oe']/@value}" />
      </xsl:if>
      <xsl:if test="PARAM[@name='hl']">
        <input type="hidden" name="hl"
          value="{PARAM[@name='hl']/@value}" />
      </xsl:if>
      <xsl:if test="PARAM[@name='getfields']">
        <input type="hidden" name="getfields"
          value="{PARAM[@name='getfields']/@value}" />
      </xsl:if>
      <xsl:if test="PARAM[@name='requiredfields']">
        <input type="hidden" name="requiredfields"
          value="{PARAM[@name='requiredfields']/@value}" />
      </xsl:if>
      <xsl:if test="PARAM[@name='partialfields']">
        <input type="hidden" name="partialfields"
          value="{PARAM[@name='partialfields']/@value}" />
      </xsl:if>
      <xsl:if test="PARAM[@name='exclude_apps']">
        <input type="hidden" name="exclude_apps"
          value="{PARAM[@name='exclude_apps']/@value}" />
      </xsl:if>
      <xsl:if test="PARAM[@name='only_apps']">
        <input type="hidden" name="only_apps"
          value="{PARAM[@name='only_apps']/@value}" />
      </xsl:if>
      <xsl:if test="PARAM[@name='ulang']">
        <input type="hidden" name="ulang"
          value="{PARAM[@name='ulang']/@value}" />
      </xsl:if>

      <!--====Advanced Search Options======-->

<div id="adv_search_holder">
<div class="adv_search_strip">
	<div class="adv_search_heading"><b>Find results</b></div>

    <div class="adv_search_text">with <b>all</b> of the words</div>

    <div class="adv_search_input">
        <xsl:text disable-output-escaping="yes">
        &lt;input type=&quot;text&quot;
        name=&quot;as_q&quot;
        size=&quot;25&quot; value=&quot;</xsl:text>
        <xsl:value-of disable-output-escaping="yes"
        select="$html_escaped_as_q"/>
        <xsl:text disable-output-escaping="yes">&quot;&gt;</xsl:text>
    
        <script type="text/javascript">
        <xsl:comment>
        document.f.as_q.focus();
        // </xsl:comment>
        </script>
    </div>

    <div class="adv_search_num jqueryToMove">
        <select name="num">
        <xsl:choose>
        <xsl:when test="PARAM[(@name='num') and (@value!='10')]">
        <option value="10">10 results</option>
        </xsl:when>
        <xsl:otherwise>
        <option value="10" selected="selected">10 results</option>
        </xsl:otherwise>
        </xsl:choose>
        <xsl:choose>
        <xsl:when test="PARAM[(@name='num') and (@value='20')]">
        <option value="20" selected="selected">20 results</option>
        </xsl:when>
        <xsl:otherwise>
        <option value="20">20 results</option>
        </xsl:otherwise>
        </xsl:choose>
        <xsl:choose>
        <xsl:when test="PARAM[(@name='num') and (@value='30')]">
        <option value="30" selected="selected">30 results</option>
        </xsl:when>
        <xsl:otherwise>
        <option value="30">30 results</option>
        </xsl:otherwise>
        </xsl:choose>
        <xsl:choose>
        <xsl:when test="PARAM[(@name='num') and (@value='50')]">
        <option value="50" selected="selected">50 results</option>
        </xsl:when>
        <xsl:otherwise>
        <option value="50">50 results</option>
        </xsl:otherwise>
        </xsl:choose>
        <xsl:choose>
        <xsl:when test="PARAM[(@name='num') and (@value='100')]">
        <option value="100" selected="selected">100 results</option>
        </xsl:when>
        <xsl:otherwise>
        <option value="100">100 results</option>
        </xsl:otherwise>
        </xsl:choose>
        </select>
    </div>
    
    <xsl:call-template name="collection_menu"/>
    
    <div class="adv_search_btn jqueryToMove">
    	<input type="submit" name="btnG" value="{$search_button_text}" />
    </div>
<div class="clear"></div>
</div><!--adv_search_strip-->

<div class="adv_search_strip">
    <div class="adv_search_text adv_search_margin">with the <b>exact phrase</b></div>

    <div class="adv_search_input"><xsl:text disable-output-escaping="yes">
        &lt;input type=&quot;text&quot;
        name=&quot;as_epq&quot;
        size=&quot;25&quot; value=&quot;</xsl:text>
        <xsl:value-of disable-output-escaping="yes"
        select="$html_escaped_as_epq"/>
        <xsl:text disable-output-escaping="yes">&quot;&gt;</xsl:text>
   </div>
<div class="clear"></div>
</div><!--adv_search_strip-->

<div class="adv_search_strip">
   <div class="adv_search_text adv_search_margin">with <b>at least one</b> of the words</div>

   <div class="adv_search_input"><xsl:text disable-output-escaping="yes">
       &lt;input type=&quot;text&quot;
       name=&quot;as_oq&quot;
       size=&quot;25&quot; value=&quot;</xsl:text>
       <xsl:value-of disable-output-escaping="yes"
       select="$html_escaped_as_oq"/>
       <xsl:text disable-output-escaping="yes">&quot;&gt;</xsl:text>
   </div>
<div class="clear"></div>
</div><!--adv_search_strip-->

<div class="adv_search_strip">
   <div class="adv_search_text adv_search_margin"><b>without</b> the words</div>

   <div class="adv_search_input"><xsl:text disable-output-escaping="yes">
       &lt;input type=&quot;text&quot;
       name=&quot;as_eq&quot;
       size=&quot;25&quot; value=&quot;</xsl:text>
       <xsl:value-of disable-output-escaping="yes"
       select="$html_escaped_as_eq"/>
       <xsl:text disable-output-escaping="yes">&quot;&gt;</xsl:text>
   </div>
<div class="clear"></div>
</div><!--adv_search_strip-->

<div class="adv_search_strip">
  <div class="adv_search_heading"><b>Language</b></div>
  
  <div class="adv_search_text">Return pages written in</div>

  <div class="adv_search_dropdown">
      <xsl:choose>
      <xsl:when test="PARAM[(@name='oe') and (@value!='')]">
      <xsl:text disable-output-escaping="yes">&lt;select name=&quot;lr&quot;&gt;</xsl:text>
      </xsl:when>
      <xsl:otherwise>
      <xsl:text disable-output-escaping="yes">&lt;select name=&quot;lr&quot; onchange=&quot;javascript:collecturl('search', 'adv');&quot;&gt;</xsl:text>
      </xsl:otherwise>
      </xsl:choose>
    
      <option value="">any language</option>
    
      <!--====IMPORTANT: This is not a Message. This is a placeholder.======-->
                            
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_ar')]">
      <option value="lang_ar"
      selected="selected">Arabic</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="lang_ar">Arabic</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_zh-CN')]">
      <option value="lang_zh-CN"
      selected="selected">Chinese (Simplified)</option>
      </xsl:when>
     
      <xsl:otherwise>
      <option value="lang_zh-CN">Chinese (Simplified)</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_zh-TW')]">
      <option value="lang_zh-TW"
      selected="selected">Chinese (Traditional)</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="lang_zh-TW">Chinese (Traditional)</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_cs')]">
      <option value="lang_cs"
      selected="selected">Czech</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_cs">Czech</option>
       </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_da')]">
      <option value="lang_da"
      selected="selected">Danish</option>
      </xsl:when>
     
      <xsl:otherwise>
      <option value="lang_da">Danish</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_nl')]">
      <option value="lang_nl"
      selected="selected">Dutch</option>
      </xsl:when>
     
      <xsl:otherwise>
      <option value="lang_nl">Dutch</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_en')]">
      <option value="lang_en"
      selected="selected">English</option>
      </xsl:when>
      <xsl:otherwise>
      <option value="lang_en">English</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_et')]">
      <option value="lang_et"
      selected="selected">Estonian</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="lang_et">Estonian</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_fi')]">
      <option value="lang_fi"
      selected="selected">Finnish</option>
      </xsl:when>
     
      <xsl:otherwise>
      <option value="lang_fi">Finnish</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_fr')]">
      <option value="lang_fr"
      selected="selected">French</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="lang_fr">French</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_de')]">
       <option value="lang_de"
      selected="selected">German</option>
      </xsl:when>
    
     <xsl:otherwise>
      <option value="lang_de">German</option>
      </xsl:otherwise>
     </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_el')]">
      <option value="lang_el"
      selected="selected">Greek</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_el">Greek</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_iw')]">
      <option value="lang_iw"
      selected="selected">Hebrew</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_iw">Hebrew</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_hu')]">
      <option value="lang_hu"
      selected="selected">Hungarian</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="lang_hu">Hungarian</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_is')]">
      <option value="lang_is"
      selected="selected">Icelandic</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_is">Icelandic</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_it')]">
      <option value="lang_it"
      selected="selected">Italian</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="lang_it">Italian</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_ja')]">
      <option value="lang_ja"
      selected="selected">Japanese</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="lang_ja">Japanese</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_ko')]">
      <option value="lang_ko"
      selected="selected">Korean</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_ko">Korean</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_lv')]">
      <option value="lang_lv"
      selected="selected">Latvian</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_lv">Latvian</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_lt')]">
      <option value="lang_lt"
      selected="selected">Lithuanian</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_lt">Lithuanian</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_no')]">
      <option value="lang_no"
      selected="selected">Norwegian</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_no">Norwegian</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_pl')]">
      <option value="lang_pl"
      selected="selected">Polish</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_pl">Polish</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_pt')]">
      <option value="lang_pt"
      selected="selected">Portuguese</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_pt">Portuguese</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_ro')]">
      <option value="lang_ro"
      selected="selected">Romanian</option>
      </xsl:when>
                
      <xsl:otherwise>
      <option value="lang_ro">Romanian</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_ru')]">
      <option value="lang_ru"
      selected="selected">Russian</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_ru">Russian</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_es')]">
      <option value="lang_es"
      selected="selected">Spanish</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_es">Spanish</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_sv')]">
      <option value="lang_sv"
      selected="selected">Swedish</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="lang_sv">Swedish</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='lr') and (@value='lang_tr')]">
      <option value="lang_tr"
      selected="selected">Turkish</option>
      </xsl:when>
    
      <xsl:otherwise>
      <option value="lang_tr">Turkish</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:text disable-output-escaping="yes">&lt;/select&gt;</xsl:text>
  </div>
<div class="clear"></div>
</div><!--adv_search_strip-->

<div class="adv_search_strip">
  <div class="adv_search_heading"><b>File Format</b></div>

  <div class="adv_search_text">
      <select name="as_ft">
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_ft') and (@value='i')]">
      <option value="i" selected="selected">Only</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="i">Only</option>
      </xsl:otherwise>
      </xsl:choose>
    
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_ft') and (@value='e')]">
      <option value="e" selected="selected">Don't</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="e">Don't</option>
      </xsl:otherwise>
      </xsl:choose>
      </select>
      
      return results of the file format
  </div>

  <div class="adv_search_dropdown">
      <select name="as_filetype">
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_filetype') and (@value!='')]">
      <option value="">any format</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="" selected="selected">any format</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_filetype') and (@value='pdf')]">
      <option value="pdf" selected="selected">Adobe Acrobat PDF (.pdf)</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="pdf">Adobe Acrobat PDF (.pdf)</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_filetype') and (@value='ps')]">
      <option value="ps" selected="selected">Adobe Postscript (.ps)</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="ps">Adobe Postscript (.ps)</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_filetype') and (@value='doc')]">
      <option value="doc" selected="selected">Microsoft Word (.doc)</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="doc">Microsoft Word (.doc)</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_filetype') and (@value='xls')]">
      <option value="xls" selected="selected">Microsoft Excel (.xls)</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="xls">Microsoft Excel (.xls)</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_filetype') and (@value='ppt')]">
      <option value="ppt" selected="selected">Microsoft Powerpoint (.ppt)</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="ppt">Microsoft Powerpoint (.ppt)</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_filetype') and (@value='rtf')]">
      <option value="rtf" selected="selected">Rich Text Format (.rtf)</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="rtf">Rich Text Format (.rtf)</option>
      </xsl:otherwise>
      </xsl:choose>
      </select>
  
  </div>
<div class="clear"></div>
</div><!--adv_search_strip-->

<div class="adv_search_strip">
  <div class="adv_search_heading"><b>Occurrences</b></div>

  <div class="adv_search_text">Return results where my terms occur</div>

  <div class="adv_search_dropdown">
      <select name="as_occt">
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_occt') and (@value!='any')]">
      <option value="any"> anywhere in the page </option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="any" selected="selected">anywhere in the page</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_occt') and (@value='title')]">
      <option value="title" selected="selected">in the title of the page</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="title">in the title of the page</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_occt') and (@value='url')]">
      <option value="url" selected="selected">in the URL of the page</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="url">in the URL of the page</option>
      </xsl:otherwise>
      </xsl:choose>
      </select>
  </div>
<div class="clear"></div>
</div><!--adv_search_strip-->

<div class="adv_search_strip">
  <div class="adv_search_heading"><b>Domain</b></div>

  <div class="adv_search_text">
  <select name="as_dt">
  <xsl:choose>
  <xsl:when test="PARAM[(@name='as_dt') and (@value='i')]">
  <option value="i" selected="selected">Only</option>
  </xsl:when>
  
  <xsl:otherwise>
      <option value="i">Only</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='as_dt') and (@value='e')]">
      <option value="e" selected="selected">Don't</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="e">Don't</option>
      </xsl:otherwise>
      </xsl:choose>
      </select>
      return results from the site or domain
  </div>

  <div>
      <xsl:choose>
      <xsl:when test="PARAM[@name='as_sitesearch']">
      <input type="text" size="25" value="{PARAM[@name='as_sitesearch']/@value}" name="as_sitesearch" />
      </xsl:when>
      
      <xsl:otherwise>
      <input style="font-style:italic; color:#ccc;" type="text" size="25" value="" name="as_sitesearch" />
      </xsl:otherwise>
      </xsl:choose>
  </div>

<!-- S.MIRZA PLACEHOLDER TEXT -->
<script>
if ( $('input[name="as_sitesearch"]').val().length ==0 ) {
    $('input[name="as_sitesearch"]').val('e.g. google.com, .org');
}
</script>

</div><!--adv_search_options-->

<div class="adv_search_strip">
  <!-- Sort by Date feature -->
  <div class="adv_search_heading"><b>Sort</b></div>

  <div class="adv_search_text">
      <select name="sort">
      <xsl:choose>
      <xsl:when test="PARAM[(@name='sort') and (@value='')]">
      <option value="" selected="selected">Sort by relevance</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="">Sort by relevance</option>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="PARAM[(@name='sort') and (@value='date:D:S:d1')]">
      <option value="date:D:S:d1" selected="selected">Sort by date</option>
      </xsl:when>
      
      <xsl:otherwise>
      <option value="date:D:S:d1">Sort by date</option>
      </xsl:otherwise>
      </xsl:choose>
      </select>
  </div>
<div class="clear"></div>
</div><!--adv_search_strip-->

<div class="adv_search_strip">  
  <!-- Secure Search feature -->
  <xsl:if test="$show_secure_radio != '0'">
  
  <div class="adv_search_heading"><b>Security</b></div>

  <div>
      <xsl:choose>
      <xsl:when test="$access='p'">
      <label><input type="radio" class="access_radio" name="access" value="p" checked="checked" />Search public content only</label>
      </xsl:when>
      
      <xsl:otherwise>
      <label><input type="radio" class="access_radio" name="access" value="p"/>Search public content only</label>
      </xsl:otherwise>
      </xsl:choose>
      
      <xsl:choose>
      <xsl:when test="$access='a'">
      <label class="no_padding"><input type="radio" class="access_radio" name="access" value="a" checked="checked" />Search public and secure content (login required)</label>
      </xsl:when>
      
      <xsl:otherwise>
      <label class="no_padding"><input type="radio" class="access_radio" name="access" value="a"/>Search public and secure content (login required)</label>
      </xsl:otherwise>
      </xsl:choose>
  </div>
  </xsl:if>
<div class="clear"></div>
</div><!--adv_search_strip-->

<div class="adv_search_strip">
      <!--====Page-Specific Search======-->
  <div><b>Page-Specific Search</b></div>

  <div>
  <form method="get" action="search" name="h">

  <div class="adv_search_heading"><b>Links</b></div>

  <div class="adv_search_text">Find pages that link to the page</div>

      <div class="adv_search_input">
      <xsl:choose>
      <xsl:when test="PARAM[@name='as_lq']">
      <input type="text" size="30" value="{PARAM[@name='as_lq']/@value}" name="as_lq" />
      </xsl:when>
      
      <xsl:otherwise>
      <input type="text" size="30" value="" name="as_lq" />
      </xsl:otherwise>
      </xsl:choose>
      <input type="submit" name="btnG" value="{$search_button_text}" />
      </div>
  
  </form>
  </div>
<div class="clear"></div>
</div><!--adv_search_strip-->

</div><!--advanced_search_holder-->

<xsl:call-template name="copyright"/>

</form>

    <!-- *** Customer's own advanced search page footer *** -->
    <xsl:call-template name="my_page_footer"/>

  </body>
</html>
</xsl:template>

<!-- **********************************************************************
 Resend query with filter=p to disable path_filtering
 if there is only one result cluster (do not customize)
     ********************************************************************** -->
<xsl:template name="redirect_if_few_results">
  <xsl:variable name="count" select="count(/GSP/RES/R)"/>
  <xsl:variable name="start" select="/GSP/RES/@SN"/>
  <xsl:variable name="filterall"
    select="count(/GSP/PARAM[@name='filter']) = 0"/>
  <xsl:variable name="filter" select="/GSP/PARAM[@name='filter']/@value"/>

</xsl:template>

<!-- **********************************************************************
 Google Apps search results (do not customize)
     ********************************************************************** -->
<xsl:template name="apps_only_search_results">
<html>
  <script>
    <xsl:comment>
      /**
       * Initializes the Google Apps results section by notifying the parent
       * document containing the iframe container. The results are passed to
       * the parent iframe container so that it can display the same in the
       * 'div' section reserved for Google Apps results section.
       */
      function initGoogleApps() {
        <xsl:choose>
          <xsl:when test="RES/R">
            var isNextRes = '<xsl:value-of select="/GSP/RES/NB/NU" />';
            var isPrevRes = '<xsl:value-of select="/GSP/RES/NB/PU" />';
            var topNavHtml =
                document.getElementById('top-navigation-html').innerHTML;
            var btmNavHtml =
                document.getElementById('bottom-navigation-html').innerHTML;
            var btmSearchBoxHtml =
                document.getElementById('bottom-search-box-html').innerHTML;
            var resultsDiv = document.getElementById('apps-results-container');
            var resultsContent = resultsDiv.innerHTML;
            resultsDiv.innerHTML = '';
            window.parent.displayGoogleAppsResults(
                true, resultsContent, isNextRes, isPrevRes, topNavHtml,
                btmNavHtml, btmSearchBoxHtml);
          </xsl:when>
          <xsl:otherwise>
            window.parent.displayGoogleAppsResults(false);
          </xsl:otherwise>
        </xsl:choose>
      }
    </xsl:comment>
  </script>
  <xsl:variable name="only_apps_onload">
    <xsl:if test="not(/GSP/PARAM[(@name='only_apps_deb') and (@value='1')])">
      <xsl:text disable-output-escaping="yes">initGoogleApps();</xsl:text>
    </xsl:if>
  </xsl:variable>
  <body onload="{$only_apps_onload}">
  <div id="apps-results-container">
    <div>
      <div class="sb-r-lbl-apps">Google Apps</div>
      <div>
        <xsl:apply-templates select="RES/R">
          <xsl:with-param name="query" select="Q"/>
        </xsl:apply-templates>

        <xsl:if test="RES/R">
          <div style="display: none;" id="top-navigation-html">
          <xsl:if test="$show_top_navigation != '0'">
              <xsl:call-template name="gen_top_navigation" />
            </xsl:if>
          </div>

          <div style="display: none;" id="bottom-navigation-html">
            <xsl:call-template name="gen_bottom_navigation" />
          </div>

          <div style="display: none;" id="bottom-search-box-html">
            <xsl:if test="$show_bottom_search_box != '0' and RES">
              <xsl:call-template name="bottom_search_box"/>
            </xsl:if>
          </div>
        </xsl:if>
      </div>
    </div>
  </div>
  </body>
</html>
</xsl:template>

<!-- **********************************************************************
 Search results (do not customize)
     ********************************************************************** -->
<xsl:template name="search_results">
<xsl:if test="$is_embedded_mode != '1'">
<xsl:text disable-output-escaping="yes">&lt;html&gt;</xsl:text>
</xsl:if>

  <!-- *** HTML header and style *** -->
  <xsl:call-template name="langHeadStart"/>
    <xsl:call-template name="redirect_if_few_results"/>
    <title><xsl:value-of select="$result_page_title"/>:
      <xsl:value-of select="$space_normalized_query"/>
    </title>

<!-- ***************************************************************************
S.MIRZA STYLING AND SCRIPT FOR GOOGLE MAPS
**************************************************************************** -->
<style type="text/css">

a.get_directions_button {
     cursor:pointer;
}

#geo_map {
position: relative;
max-width:640px;
height:auto;
}

       #directions_holder {
  	position:absolute;
  	max-width:970px;
  	height:300px;
        visibility:hidden;
        padding:10px;
        background-color:#fff;
        top:0;
       }

  	#map_canvas {
    	margin: 0;
    	padding: 0;
    	height: 300px;
        width:640px;
        position:relative;
  	}

      #driving_map_canvas {
    	margin: 0;
    	padding: 0;
    	height: 300px;
    	min-width: 230px;
    	width: 35%;
        float:left;
  	}

      #directions-panel {
        height: 300px;
        float: left;
        width: 55%;
        overflow: auto;
        margin-left:10px;
      }

#close_driving_map {
position: absolute;
z-index: 500;
font-size: 24px;
background-color: #fff;
padding: 6px 5px 5px;
top: 0;
right: 0;
cursor: pointer;
width: 25px;
text-align: center;
}

       #gmap_icon_map_holder {
  	position:absolute;
        min-width:350px;
        max-width:640px;
  	height:300px;
        visibility:hidden;
        padding:10px 0;
        background-color:#fff;
        overflow:hidden;
        z-index: -200;
       }

#gmap_icon_map_canvas {
    	margin: 0;
    	padding: 0;
    	height: 300px;
        width:640px;
        float:left;
}

.main-results #gmap_icon_map_canvas {
        width:470px;
}

#close_gmap_icon_map {
position: absolute;
z-index: 500;
font-size: 24px;
background-color: #fff;
padding: 6px 5px 5px;
top: 0;
right: 0;
cursor: pointer;
width: 25px;
text-align: center;
}

#panel {
        position: absolute;
        top: 5px;
        left: 50%;
        margin-left: -180px;
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        border: 1px solid #999;
      }

table.adp-directions td.adp-substep {
   background-color: #fbfbfb;
   color: #2c2c2c;
   border: 1px solid #cdcdcd;
}
	</style>

<!-- S.MIRZA removed cluster map from here -->

<!-- S.MIRZA END OF STYLING AND SCRIPT FOR GOOGLE MAPS -->

    <xsl:call-template name="style"/>
    <xsl:choose>
      <xsl:when test="$render_dynamic_navigation = '1' and $show_translation = '1'">
        <script type="text/javascript"
            src="{$gsa_resource_root_path_prefix}/all_js_compiled.js"></script>
      </xsl:when>
      <xsl:when test="$render_dynamic_navigation = '1'">
        <script type="text/javascript"
            src="{$gsa_resource_root_path_prefix}/dyn_nav_compiled.js"></script>
      </xsl:when>
    </xsl:choose>

    <xsl:if test="$render_dynamic_navigation = '1'">
      <script type="text/javascript">
        <xsl:variable name="dnavs_param">
          <xsl:if test="/GSP/PARAM[@name='dnavs']"><xsl:value-of
              select="/GSP/PARAM[@name='dnavs']/@original_value"/></xsl:if>
        </xsl:variable>
        var dynNavMgr = new gsa.search.DynNavManager(
          "<xsl:value-of select="$dnavs_param"/>",
          "<xsl:value-of select="/GSP/PARAM[@name='q']/@original_value"/>",
          "<xsl:value-of select='$original_q'/>",
          "<xsl:value-of select='$no_q_dnavs_params'/>",
          <xsl:value-of select='/GSP/RES/PARM/PC'/>
        );
      </script>
    </xsl:if>
    <script type="text/javascript">
      <xsl:comment>
        <xsl:if test="$show_sidebar = '1'">
          var LEFT_SIDE_RES_CONTAINER = 'left-side-container';
          var LEFT_BORDER_STYLE = 'sb-r-border';

          /** Container element to hold the sidebar. */
          var SIDEBAR_CONTAINER = 'sidebar-container';
          /** Element for holding all sidebar elements. */
          var SIDEBAR = 'sidebar';
          /** Total elements that should be displayed in the sidebar. */
          var totalSidebarEleToDisplay = 0;
          /** Count of sidebar element(s) that has no results after search. */
          var noResultsFromEleCount = 0;

          /**
           * Initializes the sidebar by loading the appropriate sidebar
           * elements.
           */
          function initSidebar() {
            document.getElementById(SIDEBAR).className = '';
            if (!isLeftResultPresent()) {
              var sidebarContainer = document.getElementById(SIDEBAR_CONTAINER);
              document.getElementById(
                  LEFT_SIDE_RES_CONTAINER).style.display = 'none';
              sidebarContainer.className = 'sb-r-alt';
            }
            <xsl:if test="$show_people_search = '1'">
              totalSidebarEleToDisplay++;
            </xsl:if>
            <xsl:if test="$show_apps_segmented_ui = '1'">
              totalSidebarEleToDisplay++;
            </xsl:if>
            <xsl:if test="$show_gss_results = '1'">
              totalSidebarEleToDisplay++;
            </xsl:if>
            <xsl:if test="$show_twitter_results = '1'">
              totalSidebarEleToDisplay++;
            </xsl:if>
            // Expert Search - count expert search component as sidebar element.
            <xsl:if test="$is_expert_search_configured = '1'">
              totalSidebarEleToDisplay++;
            </xsl:if>
            // Now bootstrap the actual loading.
            <xsl:if test="$show_people_search = '1'">
              loadPeopleSearchResults();
            </xsl:if>
            <xsl:if test="$show_apps_segmented_ui = '1'">
              loadGoogleAppsResults();
            </xsl:if>
            <xsl:if test="$show_gss_results = '1'">
              loadGssResults();
            </xsl:if>
            <xsl:if test="$show_twitter_results = '1'">
              loadTwitterResults();
            </xsl:if>
            // Expert Search - initialize the expert search JS component.
            <xsl:call-template name="include_expert_search_js_init">
              <xsl:with-param name="dom_container"
                  select="'exp-results-container'" />
              <xsl:with-param name="script_import" select="'0'" />
            </xsl:call-template>
          }

          /**
           * Notifies that the caller sidebar element is not having results to
           * display.
           */
          function notifyNoResults() {
            noResultsFromEleCount++;
            if (noResultsFromEleCount == totalSidebarEleToDisplay) {
              if (!isLeftResultPresent()) {
                var sidebarContainer =
                    document.getElementById(SIDEBAR_CONTAINER);
                sidebarContainer.style.display = 'none';
                document.getElementById('no-results').style.display = '';
                return true;
              }
            }
            return false;
          }

          /**
           * Notifies that the caller sidebar element is having results to
           * display.
           */
          function notifyResultsPresent() {
            var sidebar = document.getElementById(SIDEBAR);
            if (isLeftResultPresent() &amp;&amp;
                sidebar.className != LEFT_BORDER_STYLE) {
              document.getElementById(SIDEBAR).className = LEFT_BORDER_STYLE;
            }
          }

          /**
           * Checks if the organic results on the left side are present or not.
           */
          function isLeftResultPresent() {
            var leftResContainer = document.getElementById(
                LEFT_SIDE_RES_CONTAINER).getElementsByTagName('div')[0];
            return leftResContainer.childNodes.length != 0 ? true : false;
          }
        </xsl:if>
        <xsl:if test="$show_apps_segmented_ui = '1'">
          var APPS_LOADING_MSG = 'loading-app-results';
          var APPS_RESULTS_CONTAINER = 'apps-results-container';
          var APPS_RESULTS_IFRAME = 'apps-results-iframe';
          var APPS_RESULTS_MSG_CONTAINER = 'apps-results-msg';
          var APPS_RESULTS_SECTION = 'apps-results-section';
          var BOTTOM_SEARCH_BOX = 'bottom-search-box';
          var NEXT_RESULTS_IN_NON_APPS =
              '<xsl:value-of select="/GSP/RES/NB/NU" />';
          var ONLY_APPS_QUERY_PARAM = 'only_apps=1';
          var PREV_RESULTS_IN_NON_APPS =
              '<xsl:value-of select="/GSP/RES/NB/PU" />';

          /**
           * Displays Google Apps results returned from the iframe inside the
           * reserved div. This function is called during the onload event
           * processing of iframe.
           */
          function displayGoogleAppsResults(
              display, opt_resultsContent, opt_isNextRes, opt_isPrevRes,
              opt_topNavHtml, opt_btmNavHtml, opt_btmSearchBoxHtml) {
            document.getElementById(APPS_LOADING_MSG).style.display = 'none';
            if (!display) {
              notifyNoResults();
              return;
            }
            notifyResultsPresent();

            // Replace the existing top/bottom navigation bar if Google Apps
            // is having more results and left side container is having
            // no more results.
            if (!NEXT_RESULTS_IN_NON_APPS &amp;&amp; opt_isNextRes ||
                !PREV_RESULTS_IN_NON_APPS &amp;&amp; opt_isPrevRes) {
              document.getElementById('top-navigation').innerHTML =
                  opt_topNavHtml;
              document.getElementById('bottom-navigation').innerHTML =
                  opt_btmNavHtml;
            }

            var resultsDiv = document.getElementById(APPS_RESULTS_SECTION);
            resultsDiv.innerHTML = opt_resultsContent;
            resultsDiv.style.display = '';
            if (!isLeftResultPresent()) {
              document.getElementById(BOTTOM_SEARCH_BOX).innerHTML =
                  opt_btmSearchBoxHtml;
            }
          }

          /**
           * Loads the Google Apps results if 'exclude_apps' query parameter has
           * been set to '1'. Loading of Google Apps results is done by fetching
           * the results through the hidden iframe 'apps-results-iframe' and
           * setting the returned HTML response in the reserved div
           * 'apps-results-section'.
           */
          function loadGoogleAppsResults() {
            var excludeApps = document.getElementsByName('exclude_apps')[0];
            if (excludeApps.value == '1') {
              var resultsDiv = document.getElementById(APPS_RESULTS_SECTION);
              resultsDiv.style.display = 'none';
              document.getElementById(APPS_LOADING_MSG).style.display = '';
              var appsResContainer =
                  document.getElementById(APPS_RESULTS_CONTAINER);
              appsResContainer.style.visibility = 'visible';

              // Compose the URL to be loaded in the Google Apps iframe.
              var url = window.location.href;
              if (url.indexOf('exclude_apps=') > -1) {
                url = url.replace(/exclude_apps=./i, ONLY_APPS_QUERY_PARAM);
              } else {
                url += '&amp;' + ONLY_APPS_QUERY_PARAM;
              }

              document.getElementById(APPS_RESULTS_IFRAME).src = url;
            }
          }
        </xsl:if>
        <xsl:if test="$show_gss_results = '1'">
          var GSS_LOADING_MSG = 'loading-gss-results';
          var GSS_RESULTS_MSG_CONTAINER = 'gss-results-msg';
          var GSS_RESULTS_SECTION = 'gss-results-section';
          
          /**
           * Loads the Google Site Search results if it's enabled.
           */
          function loadGssResults() {
            document.getElementById(GSS_LOADING_MSG).style.display = '';
            if (!GSS_JS_API_LOADED) {
              setTimeout('loadGssResults()', 500);
              return;
            }
            var gssControl = new google.search.CustomSearchControl(
                '<xsl:value-of select="$gss_search_engine_id" />');
            gssControl.setResultSetSize(google.search.Search.SMALL_RESULTSET);
            gssControl.setSearchCompleteCallback(this, gssSearchComplete);
            // Set drawing options to use our hidden input box.
            var drawOptions = new google.search.DrawOptions();
            drawOptions.setInput(document.getElementById('gss-hidden-input'));
            gssControl.draw('gss-results-section', drawOptions);
            gssControl.execute('<xsl:value-of select="Q" />');
          }
          
          /**
           * Enables/disables GSS results view based on whether results were
           * returned from GSS or not. This is a callback function that is
           * invoked post receiving response from GSS.
           */
          function gssSearchComplete(searchControl, searcher) {
            document.getElementById(GSS_LOADING_MSG).style.display = 'none';
            if (!searcher.results.length) {
              notifyNoResults();
              return;
            }
            notifyResultsPresent();
            document.getElementById(GSS_RESULTS_SECTION).style.display = '';
            document.getElementById(
                GSS_RESULTS_MSG_CONTAINER).style.display = '';
          }
        </xsl:if>
        <xsl:if test="$show_people_search = '1'">
          var PS_RESULTS_MSG_CONTAINER = 'ps-results-msg';
          var PS_RESULTS_SECTION = 'ps-results-section';
          var PS_LOADING_MSG = 'loading-ps-results';
          var PS_CONTENT_ID = 'people-search-ele';

          /**
           * Loads the people search results if it's enabled.
           */
          function loadPeopleSearchResults() {
            var psEle = document.getElementById(PS_CONTENT_ID);
            if (!psEle) {
              notifyNoResults();
              return;
            }
            notifyResultsPresent();
            psEle.parentNode.removeChild(psEle);
            document.getElementById(
                PS_RESULTS_MSG_CONTAINER).style.display = '';
            var psRes = document.getElementById(PS_RESULTS_SECTION);
            psRes.appendChild(psEle);
            psEle.style.display = '';
            psRes.style.display = '';
          }
        </xsl:if>
        <xsl:if test="$show_twitter_results = '1'">
          var TWT_RESULTS_MSG_CONTAINER = 'twitter-results-msg';
          var TWT_RESULTS_SECTION = 'twitter-results-section';
          var TWT_LOADING_MSG = 'loading-twitter-results';

          /**
           * Loads the Twitter results if it's enabled.
           */
          function loadTwitterResults() {
            document.getElementById(TWT_LOADING_MSG).style.display = '';
            var twitterSearch = new TW_TwitterSearcher(
                TWT_RESULTS_SECTION,
                '<xsl:value-of select="$search_url_escaped" />',
                '<xsl:value-of select="$twitter_search_operators" />',
                3,
                twitterSearchComplete);
            twitterSearch.execute();
          }

          /**
           * Enables/disables Twitter results view based on whether results were
           * returned from Twitter or not. This is a callback function that is
           * invoked post receiving response from Twitter.
           */
          function twitterSearchComplete(twtResObj) {
            document.getElementById(TWT_LOADING_MSG).style.display = 'none';
            if (!twtResObj.results.length) {
              notifyNoResults();
              return false;
            }
            notifyResultsPresent();
            document.getElementById(
                TWT_RESULTS_MSG_CONTAINER).style.display = '';
            return true;
          }
        </xsl:if>

        function resetForms() {
          for (var i = 0; i &lt; document.forms.length; i++ ) {
              document.forms[i].reset();
          }
        }

        /**
         * Converts file links from encoded UTF-8 to Unicode, so that Internet
         * Explorer can follow the links correctly
         */
        function fixFileLinks() {
          for (var l = 0; l &lt; document.links.length; ++l) {
            var link = document.links[l];
            if (link.href.indexOf("file://") != 0) {
              continue;
            }

            var s = unescape(link.href);
            var result = "";
            for (var i = 0; i &lt; s.length; ++i) {
              var c = s.charCodeAt(i);
              if (c &gt;&gt; 4 == 12 || c &gt;&gt; 4 == 13) {
                c = ((c &amp; 0x1F) &lt;&lt; 6)
                    + (s.charCodeAt(++i) &amp; 0x3F);
              } else if (c >> 4 == 14) {
                c = ((c &amp; 0x0F) &lt;&lt; 12)
                    + ((s.charCodeAt(++i) &amp; 0x3F) &lt;&lt; 6)
                    + (s.charCodeAt(++i) &amp; 0x3F);
              } else if (c >> 4 == 15) {
                c = ((c &amp; 0x07) &lt;&lt; 18)
                    + ((s.charCodeAt(++i) &amp; 0x3F) &lt;&lt; 12)
                    + ((s.charCodeAt(++i) &amp; 0x3F) &lt;&lt; 6)
                    + (s.charCodeAt(++i) &amp; 0x3F);
              }
              result += String.fromCharCode(c);
            }
            link.href = result;
          }
        }

        // Search query
        var page_query = &quot;<xsl:value-of select="$stripped_search_query"/>&quot;
        // Starting page offset, usually 0 for 1st page, 10 for 2nd, 20 for 3rd.
        var page_start = &quot;<xsl:value-of select="/GSP/PARAM[@name='start']/@value"/>&quot;
        // Front end that served the page.
        var page_site = &quot;<xsl:value-of select="/GSP/PARAM[@name='site']/@value"/>&quot;
        //</xsl:comment>
    </script>
  <xsl:call-template name="populate_uar_i18n_array"/>
  <xsl:call-template name="langHeadEnd"/>
  <xsl:call-template name="generate_html_body_for_search_results"/>
  <xsl:if test="$is_embedded_mode != '1'">
  <xsl:text disable-output-escaping="yes">&lt;/html&gt;</xsl:text>
  </xsl:if>
</xsl:template>

<xsl:template name="search_results_body">
  <xsl:call-template name="personalization"/>
  <xsl:call-template name="analytics"/>

  <!-- Send across form parameters that's used in the GSA search form, if we are
       running in embedded mode. This will be transformed to a hidden form in
       the embedding container page and used with the suggest feature. -->
  <xsl:if test="$show_suggest = '1' and $is_embedded_mode = '1'">
    <div id="gsaembedmodeformparams" style="display: none;">
      <input type="hidden" name="q" value="" />
     <xsl:call-template name="form_params" />
    </div>
  </xsl:if>

  <!-- *** Customer's own result page header *** -->
  <xsl:if test="$choose_result_page_header = 'mine' or
                $choose_result_page_header = 'both'">
    <xsl:call-template name="my_page_header"/>
  </xsl:if>

  <!-- *** Result page header *** -->
  <xsl:if test="$choose_result_page_header = 'provided' or
                $choose_result_page_header = 'both'">
    <xsl:call-template name="result_page_header" />
  </xsl:if>

  <!-- *** Top separation bar *** -->
   <!--S.MIRZA HID THIS <xsl:if test="Q != ''">
      <xsl:call-template name="top_sep_bar">
        <xsl:with-param name="text" select="$sep_bar_std_text"/>
          <xsl:with-param name="show_info" select="$show_search_info"/>
        <xsl:with-param name="time" select="TM"/>
      </xsl:call-template>
    </xsl:if> -->

    <!-- *** Handle results (if any) *** -->
    <xsl:choose>
      <!-- Always allow calling results template when sidebar is enabled. -->
      <xsl:when test="$show_sidebar = '1'">
        <xsl:call-template name="results">
          <xsl:with-param name="query" select="Q"/>
          <xsl:with-param name="time" select="TM"/>
        </xsl:call-template>

        <!-- Generates the no results message container. Display this container
             when there are no results on both left side organic results
             container and sidebar. -->
        <div id="no-results" style="display: none;">
          <xsl:call-template name="no_RES">
            <xsl:with-param name="query" select="Q"/>
          </xsl:call-template>
        </div>
      </xsl:when>
      <xsl:when test="RES or GM or Spelling or Synonyms or CT or
                      (ENTOBRESULTS and
                       not(count(ENTOBRESULTS/OBRES) = 1
                           and ENTOBRESULTS/OBRES/provider = $uar_provider
                           and ENTOBRESULTS/OBRES/count = 0))">
        <xsl:call-template name="results">
          <xsl:with-param name="query" select="Q"/>
          <xsl:with-param name="time" select="TM"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:when test="Q=''">
      </xsl:when>
      <xsl:otherwise>
        <!--<xsl:call-template name="no_RES">
          <xsl:with-param name="query" select="Q"/>
        </xsl:call-template>-->
      </xsl:otherwise>
    </xsl:choose>

    <!-- *** UAR v2, Expert Search - Add the i18n messages required by the
             UI components. *** -->
    <xsl:if test="(
      $show_onebox != '0' and /GSP/ENTOBRESULTS/OBRES/provider = $uar_provider)
      or $is_expert_search_configured = '1'">
      <xsl:call-template
          name="include_localized_messages_for_uar_expert_search"/>
    </xsl:if>

    <!-- *** UAR v2 - Load the UAR UI component. We make sure that this
             template is called at the end after the results are rendered
             so that UAR onebox data is available for the UI component. *** -->
    <xsl:if test="$show_onebox != '0'">
      <xsl:if test="/GSP/ENTOBRESULTS/OBRES/provider = $uar_provider">
        <xsl:call-template name="include_uar_ui_component"/>
      </xsl:if>
    </xsl:if>

    <!-- *** Expert Search - include expert search UI JS component. -->
    <xsl:call-template name="include_expert_search_js">
      <xsl:with-param name="src_prefix"
          select="$gsa_resource_root_path_prefix" />
    </xsl:call-template>

    <!-- *** Google footer *** -->
    <xsl:call-template name="copyright"/>

    <!-- *** Customer's own result page footer *** -->
    <xsl:call-template name="my_page_footer"/>

    <xsl:if test="$show_asr != '0'">
      <script type="text/javascript"
          src="{$gsa_resource_root_path_prefix}/clicklog_compiled.js"></script>
    </xsl:if>

    <xsl:if test="$render_dynamic_navigation = '1'">
      <script type="text/javascript">
        dynNavMgr.init();
      </script>
    </xsl:if>

    <!-- *** HTML footer *** -->
</xsl:template>


<!-- **********************************************************************
  Collection menu beside the search box
     ********************************************************************** -->
<xsl:template name="collection_menu">
  <xsl:if test="$search_collections_xslt != ''">
    <td valign="middle">
        
<select name="site">
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='All')]">
   <option value="All" selected="selected">All</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="All">All</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='GAPPs_Docs')]">
   <option value="GAPPs_Docs" selected="selected">GAPPs_Docs</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="GAPPs_Docs">GAPPs_Docs</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='Projects')]">
   <option value="Projects" selected="selected">Projects</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="Projects">Projects</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='TWIYouTube')]">
   <option value="TWIYouTube" selected="selected">TWIYouTube</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="TWIYouTube">TWIYouTube</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='aa')]">
   <option value="aa" selected="selected">aa</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="aa">aa</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='aa_alldocs')]">
   <option value="aa_alldocs" selected="selected">aa_alldocs</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="aa_alldocs">aa_alldocs</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='aa_rawdata')]">
   <option value="aa_rawdata" selected="selected">aa_rawdata</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="aa_rawdata">aa_rawdata</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='aa_techdocs')]">
   <option value="aa_techdocs" selected="selected">aa_techdocs</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="aa_techdocs">aa_techdocs</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='aa_trainingmanuals')]">
   <option value="aa_trainingmanuals" selected="selected">aa_trainingmanuals</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="aa_trainingmanuals">aa_trainingmanuals</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='ah')]">
   <option value="ah" selected="selected">ah</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="ah">ah</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='ah_test_site')]">
   <option value="ah_test_site" selected="selected">ah_test_site</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="ah_test_site">ah_test_site</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='alhayat_KSA')]">
   <option value="alhayat_KSA" selected="selected">alhayat_KSA</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="alhayat_KSA">alhayat_KSA</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='alhayat_all')]">
   <option value="alhayat_all" selected="selected">alhayat_all</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="alhayat_all">alhayat_all</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='alhayat_images')]">
   <option value="alhayat_images" selected="selected">alhayat_images</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="alhayat_images">alhayat_images</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='alhayat_laha')]">
   <option value="alhayat_laha" selected="selected">alhayat_laha</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="alhayat_laha">alhayat_laha</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='alhayat_txtarticles')]">
   <option value="alhayat_txtarticles" selected="selected">alhayat_txtarticles</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="alhayat_txtarticles">alhayat_txtarticles</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='date_format_test')]">
   <option value="date_format_test" selected="selected">date_format_test</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="date_format_test">date_format_test</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='date_hyphen')]">
   <option value="date_hyphen" selected="selected">date_hyphen</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="date_hyphen">date_hyphen</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='date_original')]">
   <option value="date_original" selected="selected">date_original</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="date_original">date_original</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='date_slash')]">
   <option value="date_slash" selected="selected">date_slash</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="date_slash">date_slash</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='default_collection')]">
   <option value="default_collection" selected="selected">default_collection</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="default_collection">default_collection</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='fileshare')]">
   <option value="fileshare" selected="selected">fileshare</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="fileshare">fileshare</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='getty')]">
   <option value="getty" selected="selected">getty</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="getty">getty</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='gsadocs')]">
   <option value="gsadocs" selected="selected">gsadocs</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="gsadocs">gsadocs</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='guitars')]">
   <option value="guitars" selected="selected">guitars</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="guitars">guitars</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='hays')]">
   <option value="hays" selected="selected">hays</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="hays">hays</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='international_life')]">
   <option value="international_life" selected="selected">international_life</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="international_life">international_life</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='jl_all')]">
   <option value="jl_all" selected="selected">jl_all</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="jl_all">jl_all</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='jl_images')]">
   <option value="jl_images" selected="selected">jl_images</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="jl_images">jl_images</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='report')]">
   <option value="report" selected="selected">report</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="report">report</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='saudi_life')]">
   <option value="saudi_life" selected="selected">saudi_life</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="saudi_life">saudi_life</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='sharepoint')]">
   <option value="sharepoint" selected="selected">sharepoint</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="sharepoint">sharepoint</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='stoneburn')]">
   <option value="stoneburn" selected="selected">stoneburn</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="stoneburn">stoneburn</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='sun')]">
   <option value="sun" selected="selected">sun</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="sun">sun</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='test')]">
   <option value="test" selected="selected">test</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="test">test</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twiContent')]">
   <option value="twiContent" selected="selected">twiContent</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twiContent">twiContent</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_all')]">
   <option value="twi_all" selected="selected">twi_all</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_all">twi_all</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_bestpracticeguides')]">
   <option value="twi_bestpracticeguides" selected="selected">twi_bestpracticeguides</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_bestpracticeguides">twi_bestpracticeguides</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_bulletin')]">
   <option value="twi_bulletin" selected="selected">twi_bulletin</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_bulletin">twi_bulletin</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_casestudies')]">
   <option value="twi_casestudies" selected="selected">twi_casestudies</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_casestudies">twi_casestudies</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_connect')]">
   <option value="twi_connect" selected="selected">twi_connect</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_connect">twi_connect</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_faq')]">
   <option value="twi_faq" selected="selected">twi_faq</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_faq">twi_faq</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_jobknowledge')]">
   <option value="twi_jobknowledge" selected="selected">twi_jobknowledge</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_jobknowledge">twi_jobknowledge</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_knowledgesummaries')]">
   <option value="twi_knowledgesummaries" selected="selected">twi_knowledgesummaries</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_knowledgesummaries">twi_knowledgesummaries</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_memberreports')]">
   <option value="twi_memberreports" selected="selected">twi_memberreports</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_memberreports">twi_memberreports</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_pdf')]">
   <option value="twi_pdf" selected="selected">twi_pdf</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_pdf">twi_pdf</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_publishedpapers')]">
   <option value="twi_publishedpapers" selected="selected">twi_publishedpapers</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_publishedpapers">twi_publishedpapers</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='twi_videos')]">
   <option value="twi_videos" selected="selected">twi_videos</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="twi_videos">twi_videos</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='wasat_magazine')]">
   <option value="wasat_magazine" selected="selected">wasat_magazine</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="wasat_magazine">wasat_magazine</option>
  </xsl:otherwise>
 </xsl:choose>
 <xsl:choose>
  <xsl:when test="PARAM[(@name='site') and (@value='website')]">
   <option value="website" selected="selected">website</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="website">website</option>
  </xsl:otherwise>
 </xsl:choose>
</select>

    </td>
  </xsl:if>
</xsl:template>

<!-- **********************************************************************
  Search box input form (Types: std_top, std_bottom, home, swr)
     ********************************************************************** -->
<xsl:template name="bottom_search_box_custom">
  <xsl:param name="type"/>

  <xsl:if test="$is_embedded_mode != '1'">
  <xsl:choose>
  <xsl:when test="$show_suggest = '1' and (($type = 'home') or ($type = 'std_top'))">
  <xsl:text disable-output-escaping="yes">&lt;form id="suggestion_form" name="gs" method="GET" action="search" onsubmit="return (this.q.value == '') ? false : true;"&gt;</xsl:text>
  </xsl:when>
  <xsl:otherwise>
  <xsl:text disable-output-escaping="yes">&lt;form name="gs" style="display:inline-block; margin-bottom:0;" method="GET" action="search" onsubmit="return (this.q.value == '') ? false : true;"&gt;</xsl:text>
  </xsl:otherwise>
  </xsl:choose>
  </xsl:if>

<div id="search_input_holder">
<div class="search_button"><input type="submit" id="search_button" name="btnG" value="Search" />
<div class="clear" />
</div>
<div id="search_input"><input type="text" name="q" size="{$search_box_size}" maxlength="256" value="{$space_normalized_query}" autocomplete="off" x-webkit-speech="x-webkit-speech"/></div>
<div class="clear" />
</div><!--search_input_holder-->

<xsl:if test="$show_date_range_filter ='1' ">
<xsl:call-template name="date_range_filter" />
</xsl:if>

        <div class="advanced_search_holder">
          <xsl:if test="($egds_show_search_tabs != '0') and (($type = 'home') or ($type = 'std_top'))">
          	<div class="2">
                  <xsl:call-template name="desktop_tab"/>
            </div><!--2-->
          </xsl:if>
          <xsl:if test="($type = 'swr')">
          
          <div class="3">
                    <xsl:variable name="est_result" select="/GSP/RES/M" />
                    <xsl:if test="($est_result != '') and ($est_result > 0)">
                    There were about <b><xsl:value-of select="RES/M"/></b> results for <b><xsl:value-of select="$space_normalized_query"/></b>.
                      <br/>
                    </xsl:if>
                    Use the search box below to search within these results.
                  </div><!--3-->
          
          </xsl:if>
          
        <div class="4">
          <font size="-1">
            <xsl:choose>
              <xsl:when test="($type = 'swr')">
                <input type="text" name="as_q" size="{$search_box_size}" maxlength="256" value=""/>
                <input type="hidden" name="q" value="{$qval}"/>
              </xsl:when>
              <xsl:when test="$show_suggest = '1' and (($type = 'home') or ($type = 'std_top'))">
                                
<div class="ss-gac-m" style="width: 365px; visibility: hidden;" id="search_suggest"></div>

              </xsl:when>

            </xsl:choose>
          </font>
          <xsl:call-template name="collection_menu"/>
          	<div class="5">
                        <font size="-2">
                        <xsl:if test="($show_swr_link != '0') and ($type = 'std_bottom')">
                                <xsl:call-template name="nbsp"/>
                                <xsl:call-template name="nbsp"/>
                                <a ctype="advanced_swr" href="{$swr_search_url}">
                                        <xsl:value-of select="$swr_search_anchor_text"/>
                                </a>
                                <br/>
                        </xsl:if>
                        <xsl:if test="$show_result_page_adv_link != '0'">
                                <xsl:call-template name="nbsp"/>
                                <xsl:call-template name="nbsp"/>
                                <a ctype="advanced" href="{$adv_search_url}">
                                        <xsl:value-of select="$adv_search_anchor_text"/>
                                </a>
                        </xsl:if>
                        <xsl:if test="$show_result_page_help_link != '0'">
                                <xsl:call-template name="nbsp"/>
                                <xsl:call-template name="nbsp"/>
                                <a ctype="help" href="{$help_url}">
                                        <xsl:value-of select="$search_help_anchor_text"/>
                                </a>
                        </xsl:if>
                        </font>
                  </div><!--5-->
        <xsl:if test="$show_secure_radio != '0'">
        <div class="secure_radios">
          <font size="-1">Search:
            <xsl:choose>
              <xsl:when test="$access='p'">
                <label><input type="radio" class="access_radio" name="access" value="p" checked="checked" />public content</label>
              </xsl:when>
              <xsl:otherwise>
                <label><input type="radio" class="access_radio" name="access" value="p"/>public content</label>
              </xsl:otherwise>
            </xsl:choose>
            <xsl:choose>
              <xsl:when test="$access='a'">
                <label class="no_padding"><input type="radio" class="access_radio" name="access" value="a" checked="checked" />public and secure content</label>
              </xsl:when>
              <xsl:otherwise>
                <label class="no_padding"><input type="radio" class="access_radio" name="access" value="a"/>public and secure content</label>
              </xsl:otherwise>
            </xsl:choose>
          </font>
          </div><!--6-->
        </xsl:if>
      </div><!--4-->

</div><!--first-->

    <xsl:text>
    </xsl:text>
    <xsl:call-template name="form_params"/>
  <xsl:if test="$is_embedded_mode != '1'">
  <xsl:text disable-output-escaping="yes">&lt;/form&gt;</xsl:text>
  </xsl:if>
</xsl:template>

<!-- **********************************************************************
  Date Filter menu added by Shahid Mirza
     ********************************************************************** -->

<xsl:template name="date_range_filter">

<div id="date_range">
<select id="from_month" class="from">
    <option>- From Month -</option>
    <option value="">January</option>
    <option value="">February</option>
    <option value="">March</option>
    <option value="">April</option>
    <option value="">May</option>
    <option value="">June</option>
    <option value="">July</option>
    <option value="">August</option>
    <option value="">Septemvber</option>
    <option value="">October</option>
    <option value="">November</option>
    <option value="">December</option>
</select>

<select id="from_year"><option>- From Year -</option></select>

<select id="to_month">
    <option>- To Month -</option>
    <option value="">January</option>
    <option value="">February</option>
    <option value="">March</option>
    <option value="">April</option>
    <option value="">May</option>
    <option value="">June</option>
    <option value="">July</option>
    <option value="">August</option>
    <option value="">Septemvber</option>
    <option value="">October</option>
    <option value="">November</option>
    <option value="">December</option>
</select>

<select id="to_year"><option>- To Year -</option></select>
<div class="clear" />
</div><!--date_range-->

<xsl:variable name="as_q_daterange"
    select="/GSP/PARAM[@name='as_q']/@value"/>

<xsl:variable name="from_year">
<xsl:value-of select="substring($as_q_daterange, 11, 4)" />
</xsl:variable>

<xsl:variable name="from_month">
<xsl:value-of select="substring($as_q_daterange, 16, 1)" />
</xsl:variable>

<xsl:variable name="to_year">
<xsl:value-of select="substring($as_q_daterange, 21, 4)" />
</xsl:variable>

<xsl:variable name="to_month">
<xsl:value-of select="substring($as_q_daterange, 26, 1)" />
</xsl:variable>

<xsl:if test="PARAM[(@name='as_q') and contains($as_q_daterange, 'daterange')]">
<script>
$(window).load(function() {
var fromYearSplit = '<xsl:value-of select="$from_year" />',
    fromMonthSplit ='<xsl:value-of select="$from_month" />',
    toYearSplit = '<xsl:value-of select="$to_year" />',
    toMonthSplit = '<xsl:value-of select="$to_month" />';

setTimeout(function() {
$('#from_month').val( fromMonthSplit );
$('#from_year').val( fromYearSplit );
$('#to_month').val( toMonthSplit );
$('#to_year').val( toYearSplit );
}, 400);

}); //windowLoad
</script>
</xsl:if>

</xsl:template>

<xsl:template name="search_box">
  <xsl:param name="type"/>

  <xsl:if test="$is_embedded_mode != '1'">
  <xsl:choose>
  <xsl:when test="$show_suggest = '1'">
  <xsl:text disable-output-escaping="yes">&lt;form id="suggestion_form" name="gs" method="GET" action="search" onsubmit="return (this.q.value == '') ? false : true;"&gt;</xsl:text>
  </xsl:when>

  <xsl:when test="$show_suggest = '1' and (($type = 'home') or ($type = 'std_top'))">
  <xsl:text disable-output-escaping="yes">&lt;form id="suggestion_form" name="gs" method="GET" action="search" onsubmit="return (this.q.value == '') ? false : true;"&gt;</xsl:text>
  </xsl:when>

  <xsl:otherwise>
  <xsl:text disable-output-escaping="yes">&lt;form name="gs" style="display:inline-block; margin-bottom:0;" method="GET" action="search" onsubmit="return (this.q.value == '') ? false : true;"&gt;</xsl:text>
  </xsl:otherwise>
  </xsl:choose>
  </xsl:if>

<xsl:variable name="requiredfields_val">
<xsl:value-of select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />
</xsl:variable>

<xsl:variable name="store_q_val">
<xsl:value-of select="lower-case(/GSP/Q)" />
</xsl:variable>

<xsl:choose>
<xsl:when test="$show_suggest = '1' and contains($requiredfields_val, 'contenttypename')">
<div id="search_input_holder">
<div id="search_input_store">
<input class="track_change hide_val" type="text" name="q" size="{$search_box_size}" maxlength="256" value="" autocomplete="off" onkeyup="ss_handleKey(event)" placeholder="Enter a brand" />

<input class="show_val" type="hidden" value="inmeta:contentTypeName" />

<script>
function userBrandVal() {
    brandVal = $('.hide_val').val();
    console.log(brandVal);

    if (brandVal === '') {
        $('.hide_val').removeAttr('name');
        $('.show_val').attr('name', 'q');
    }
    
    else {
         $('.show_val').removeAttr('name');
         $('.hide_val').attr('name', 'q');
    }

}
userBrandVal();
$('.hide_val').keyup(userBrandVal);
</script>

</div>
<table cellpadding="0" cellspacing="0" class="ss-gac-m" id="search_suggest"></table>

<div class="search_button_store"><input type="submit" id="search_button_store" name="btnG" value="GO" /></div>

<div class="store_dropdown_holder">
<select id="store_products" class="store_dropdown track_change">
<option value="">All products / store types</option>
<option value="">-------------------------------</option>
<option value="">Products</option>
<option value="">-------------------------------</option>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:accessories')]">
<option selected="selected" value="Accessories">Accessories</option>
</xsl:when>

<xsl:otherwise>
<option value="Accessories">Accessories</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:bridal')]">
<option selected="selected" value="Bridal">Bridal</option>
</xsl:when>

<xsl:otherwise>
<option value="Bridal">Bridal</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:childrenswear')]">
<option selected="selected" value="Childrenswear">Childrenswear</option>
</xsl:when>

<xsl:otherwise>
<option value="Childrenswear">Childrenswear</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:electronics &amp; gadgets')]">
<option selected="selected" value="Electronics &amp; Gadgets">Electronics &amp; Gadgets</option>
</xsl:when>

<xsl:otherwise>
<option value="Electronics &amp; Gadgets">Electronics &amp; Gadgets</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:arts &amp; entertainment')]">
<option selected="selected" value="Arts &amp; Entertainment">Arts &amp; Entertainment</option>
</xsl:when>

<xsl:otherwise>
<option value="Arts &amp; Entertainment">Arts &amp; Entertainment</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:food &amp; drink')]">
<option selected="selected" value="Food &amp; Drink">Food &amp; Drink</option>
</xsl:when>

<xsl:otherwise>
<option value="Food &amp; Drink">Food &amp; Drink</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:footwear')]">
<option selected="selected" value="Footwear">Footwear</option>
</xsl:when>

<xsl:otherwise>
<option value="Footwear">Footwear</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:health &amp; beauty')]">
<option selected="selected" value="Health &amp; Beauty">Health &amp; Beauty</option>
</xsl:when>

<xsl:otherwise>
<option value="Health &amp; Beauty">Health &amp; Beauty</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:homewares &amp; furniture')]">
<option selected="selected" value="Homewares &amp; Furniture">Homewares &amp; Furniture</option>
</xsl:when>

<xsl:otherwise>
<option value="Homewares &amp; Furniture">Homewares &amp; Furniture</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:lingerie')]">
<option selected="selected" value="Lingerie">Lingerie</option>
</xsl:when>

<xsl:otherwise>
<option value="Lingerie">Lingerie</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:menswear')]">
<option selected="selected" value="Menswear">Menswear</option>
</xsl:when>

<xsl:otherwise>
<option value="Menswear">Menswear</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:sports &amp; leisure')]">
<option selected="selected" value="Sports &amp; Leisure">Sports &amp; Leisure</option>
</xsl:when>

<xsl:otherwise>
<option value="Sports &amp; Leisure">Sports &amp; Leisure</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:watches &amp; jewellery')]">
<option selected="selected" value="Watches &amp; Jewellery">Watches &amp; Jewellery</option>
</xsl:when>

<xsl:otherwise>
<option value="Watches &amp; Jewellery">Watches &amp; Jewellery</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:womenswear')]">
<option selected="selected" value="Womenswear">Womenswear</option>
</xsl:when>

<xsl:otherwise>
<option value="Womenswear">Womenswear</option>
</xsl:otherwise>
</xsl:choose>

<option value=""></option>
<option value="">-------------------------------</option>
<option value="">Store Type</option>
<option value="">-------------------------------</option>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:boutiques')]">
<option selected="selected" value="Boutiques">Boutiques</option>
</xsl:when>

<xsl:otherwise>
<option value="Boutiques">Boutiques</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:department stores')]">
<option selected="selected" value="Department Stores">Department Stores</option>
</xsl:when>

<xsl:otherwise>
<option value="Department Stores">Department Stores</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:outlet shopping')]">
<option selected="selected" value="Outlet Shopping">Outlet Shopping</option>
</xsl:when>

<xsl:otherwise>
<option value="Outlet Shopping">Outlet Shopping</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:shopping malls')]">
<option selected="selected" value="Shopping Malls">Shopping Malls</option>
</xsl:when>

<xsl:otherwise>
<option value="Shopping Malls">Shopping Malls</option>
</xsl:otherwise>
</xsl:choose>

<option value="">-------------------------------</option>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'product:hotels')]">
<option selected="selected" value="Hotels">Hotels</option>
</xsl:when>

<xsl:otherwise>
<option value="Hotels">Hotels</option>
</xsl:otherwise>
</xsl:choose>

<option value="">-------------------------------</option>
</select>

<select id="store_country" class="store_dropdown track_change">
<option value="">All countries</option>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:austria')]">
<option selected="selected" value="Austria">Austria</option>
</xsl:when>

<xsl:otherwise>
<option value="Austria">Austria</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:belgium')]">
<option selected="selected" value="Belgium">Belgium</option>
</xsl:when>

<xsl:otherwise>
<option value="Belgium">Belgium</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:cyprus')]">
<option selected="selected" value="Cyprus">Cyprus</option>
</xsl:when>

<xsl:otherwise>
<option value="Cyprus">Cyprus</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:czech republic')]">
<option selected="selected" value="Czech Republic">Czech Republic</option>
</xsl:when>

<xsl:otherwise>
<option value="Czech Republic">Czech Republic</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:denmark')]">
<option selected="selected" value="Denmark">Denmark</option>
</xsl:when>

<xsl:otherwise>
<option value="Denmark">Denmark</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:finland')]">
<option selected="selected" value="Finland">Finland</option>
</xsl:when>

<xsl:otherwise>
<option value="Finland">Finland</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:france')]">
<option selected="selected" value="France">France</option>
</xsl:when>

<xsl:otherwise>
<option value="France">France</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:germany')]">
<option selected="selected" value="Germany">Germany</option>
</xsl:when>

<xsl:otherwise>
<option value="Germany">Germany</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:greece')]">
<option selected="selected" value="Greece">Greece</option>
</xsl:when>

<xsl:otherwise>
<option value="Greece">Greece</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:holland')]">
<option selected="selected" value="Holland">Holland</option>
</xsl:when>

<xsl:otherwise>
<option value="Holland">Holland</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:iceland')]">
<option selected="selected" value="Iceland">Iceland</option>
</xsl:when>

<xsl:otherwise>
<option value="Iceland">Iceland</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:italy')]">
<option selected="selected" value="Italy">Italy</option>
</xsl:when>

<xsl:otherwise>
<option value="Italy">Italy</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:japan')]">
<option selected="selected" value="Japan">Japan</option>
</xsl:when>

<xsl:otherwise>
<option value="Japan">Japan</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:lebanon')]">
<option selected="selected" value="Lebanon">Lebanon</option>
</xsl:when>

<xsl:otherwise>
<option value="Lebanon">Lebanon</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:norway')]">
<option selected="selected" value="Norway">Norway</option>
</xsl:when>

<xsl:otherwise>
<option value="Norway">Norway</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:poland')]">
<option selected="selected" value="Poland">Poland</option>
</xsl:when>

<xsl:otherwise>
<option value="Poland">Poland</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:portugal')]">
<option selected="selected" value="Portugal">Portugal</option>
</xsl:when>

<xsl:otherwise>
<option value="Portugal">Portugal</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:singapore')]">
<option selected="selected" value="Singapore">Singapore</option>
</xsl:when>

<xsl:otherwise>
<option value="Singapore">Singapore</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:spain')]">
<option selected="selected" value="Spain">Spain</option>
</xsl:when>

<xsl:otherwise>
<option value="Spain">Spain</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:sweden')]">
<option selected="selected" value="Sweden">Sweden</option>
</xsl:when>

<xsl:otherwise>
<option value="Sweden">Sweden</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:switzerland')]">
<option selected="selected" value="Switzerland">Switzerland</option>
</xsl:when>

<xsl:otherwise>
<option value="Switzerland">Switzerland</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:turkey')]">
<option selected="selected" value="Turkey">Turkey</option>
</xsl:when>

<xsl:otherwise>
<option value="Turkey">Turkey</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'country:uk')]">
<option selected="selected" value="UK">UK</option>
</xsl:when>

<xsl:otherwise>
<option value="UK">UK</option>
</xsl:otherwise>
</xsl:choose>
</select>
</div>

<div class="store_dropdown_holder">
<select id="store_city" class="store_dropdown track_change">
<option value="">All cities</option>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:amsterdam')]">
<option selected="selected" value="Amsterdam">Amsterdam</option>
</xsl:when>

<xsl:otherwise>
<option value="Amsterdam">Amsterdam</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:athens')]">
<option selected="selected" value="Athens">Athens</option>
</xsl:when>

<xsl:otherwise>
<option value="Athens">Athens</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:barcelona')]">
<option selected="selected" value="Barcelona">Barcelona</option>
</xsl:when>

<xsl:otherwise>
<option value="Barcelona">Barcelona</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:beirut')]">
<option selected="selected" value="Beirut">Beirut</option>
</xsl:when>

<xsl:otherwise>
<option value="Beirut">Beirut</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:berlin')]">
<option selected="selected" value="Berlin">Berlin</option>
</xsl:when>

<xsl:otherwise>
<option value="Berlin">Berlin</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:brussels')]">
<option selected="selected" value="Brussels">Brussels</option>
</xsl:when>

<xsl:otherwise>
<option value="Brussels">Brussels</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:cologne')]">
<option selected="selected" value="Cologne">Cologne</option>
</xsl:when>

<xsl:otherwise>
<option value="Cologne">Cologne</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:copenhagen')]">
<option selected="selected" value="Copenhagen">Copenhagen</option>
</xsl:when>

<xsl:otherwise>
<option value="Copenhagen">Copenhagen</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:Düsseldorf')]">
<option selected="selected" value="Düsseldorf">Düsseldorf</option>
</xsl:when>

<xsl:otherwise>
<option value="Düsseldorf">Düsseldorf</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:florence')]">
<option selected="selected" value="Florence">Florence</option>
</xsl:when>

<xsl:otherwise>
<option value="Florence">Florence</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:frankfurt')]">
<option selected="selected" value="Frankfurt">Frankfurt</option>
</xsl:when>

<xsl:otherwise>
<option value="Frankfurt">Frankfurt</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:french riviera')]">
<option selected="selected" value="French Riviera">French Riviera</option>
</xsl:when>

<xsl:otherwise>
<option value="French Riviera">French Riviera</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:geneva')]">
<option selected="selected" value="Geneva">Geneva</option>
</xsl:when>

<xsl:otherwise>
<option value="Geneva">Geneva</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:graz (and styria)')]">
<option selected="selected" value="Graz (and Styria)">Graz (and Styria)</option>
</xsl:when>

<xsl:otherwise>
<option value="Graz (and Styria)">Graz (and Styria)</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:hamburg')]">
<option selected="selected" value="Hamburg">Hamburg</option>
</xsl:when>

<xsl:otherwise>
<option value="Hamburg">Hamburg</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:hanover')]">
<option selected="selected" value="Hanover">Hanover</option>
</xsl:when>

<xsl:otherwise>
<option value="Hanover">Hanover</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:helsinki')]">
<option selected="selected" value="Helsinki">Helsinki</option>
</xsl:when>

<xsl:otherwise>
<option value="Helsinki">Helsinki</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:imatra')]">
<option selected="selected" value="Imatra">Imatra</option>
</xsl:when>

<xsl:otherwise>
<option value="Imatra">Imatra</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:innsbruck (and tyrol)')]">
<option selected="selected" value="Innsbruck (and Tyrol)">Innsbruck (and Tyrol)</option>
</xsl:when>

<xsl:otherwise>
<option value="Innsbruck (and Tyrol)">Innsbruck (and Tyrol)</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:istanbul')]">
<option selected="selected" value="Istanbul">Istanbul</option>
</xsl:when>

<xsl:otherwise>
<option value="Istanbul">Istanbul</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:lappeenranta')]">
<option selected="selected" value="Lappeenranta">Lappeenranta</option>
</xsl:when>

<xsl:otherwise>
<option value="Lappeenranta">Lappeenranta</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:lisbon')]">
<option selected="selected" value="Lisbon">Lisbon</option>
</xsl:when>

<xsl:otherwise>
<option value="Lisbon">Lisbon</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:london')]">
<option selected="selected" value="London">London</option>
</xsl:when>

<xsl:otherwise>
<option value="London">London</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:lucerne')]">
<option selected="selected" value="Lucerne">Lucerne</option>
</xsl:when>

<xsl:otherwise>
<option value="Lucerne">Lucerne</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:maastricht')]">
<option selected="selected" value="Maastricht">Maastricht</option>
</xsl:when>

<xsl:otherwise>
<option value="Maastricht">Maastricht</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:madrid')]">
<option selected="selected" value="Madrid">Madrid</option>
</xsl:when>

<xsl:otherwise>
<option value="Madrid">Madrid</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:milan')]">
<option selected="selected" value="Milan">Milan</option>
</xsl:when>

<xsl:otherwise>
<option value="Milan">Milan</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:munich')]">
<option selected="selected" value="Munich">Munich</option>
</xsl:when>

<xsl:otherwise>
<option value="Munich">Munich</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:nicosia')]">
<option selected="selected" value="Nicosia">Nicosia</option>
</xsl:when>

<xsl:otherwise>
<option value="Nicosia">Nicosia</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:oslo')]">
<option selected="selected" value="Oslo">Oslo</option>
</xsl:when>

<xsl:otherwise>
<option value="Oslo">Oslo</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:paris')]">
<option selected="selected" value="Paris">Paris</option>
</xsl:when>

<xsl:otherwise>
<option value="Paris">Paris</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:porto')]">
<option selected="selected" value="Porto">Porto</option>
</xsl:when>

<xsl:otherwise>
<option value="Porto">Porto</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:prague')]">
<option selected="selected" value="Prague">Prague</option>
</xsl:when>

<xsl:otherwise>
<option value="Prague">Prague</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:reykjavik')]">
<option selected="selected" value="Reykjavik">Reykjavik</option>
</xsl:when>

<xsl:otherwise>
<option value="Reykjavik">Reykjavik</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:rome')]">
<option selected="selected" value="Rome">Rome</option>
</xsl:when>

<xsl:otherwise>
<option value="Rome">Rome</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:rotterdam')]">
<option selected="selected" value="Rotterdam">Rotterdam</option>
</xsl:when>

<xsl:otherwise>
<option value="Rotterdam">Rotterdam</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:salzburg')]">
<option selected="selected" value="Salzburg">Salzburg</option>
</xsl:when>

<xsl:otherwise>
<option value="Salzburg">Salzburg</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:singapore')]">
<option selected="selected" value="Singapore">Singapore</option>
</xsl:when>

<xsl:otherwise>
<option value="Singapore">Singapore</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:stockholm')]">
<option selected="selected" value="Stockholm">Stockholm</option>
</xsl:when>

<xsl:otherwise>
<option value="Stockholm">Stockholm</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:stuttgart')]">
<option selected="selected" value="Stuttgart">Stuttgart</option>
</xsl:when>

<xsl:otherwise>
<option value="Stuttgart">Stuttgart</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:the hague (and delft)')]">
<option selected="selected" value="The Hague (and Delft)">The Hague (and Delft)</option>
</xsl:when>

<xsl:otherwise>
<option value="The Hague (and Delft)">The Hague (and Delft)</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:tokyo')]">
<option selected="selected" value="Tokyo">Tokyo</option>
</xsl:when>

<xsl:otherwise>
<option value="Tokyo">Tokyo</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:utrecht')]">
<option selected="selected" value="Utrecht">Utrecht</option>
</xsl:when>

<xsl:otherwise>
<option value="Utrecht">Utrecht</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:venice')]">
<option selected="selected" value="Venice">Venice</option>
</xsl:when>

<xsl:otherwise>
<option value="Venice">Venice</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:vienna')]">
<option selected="selected" value="Vienna">Vienna</option>
</xsl:when>

<xsl:otherwise>
<option value="Vienna">Vienna</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:warsaw')]">
<option selected="selected" value="Warsaw">Warsaw</option>
</xsl:when>

<xsl:otherwise>
<option value="Warsaw">Warsaw</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'city:zurich')]">
<option selected="selected" value="Zurich">Zurich</option>
</xsl:when>

<xsl:otherwise>
<option value="Zurich">Zurich</option>
</xsl:otherwise>
</xsl:choose>

</select>

<select id="store_areas" class="store_dropdown track_change">
<option value="">All areas</option>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:bicester')]">
<option selected="selected" value="Bicester">Bicester</option>
</xsl:when>

<xsl:otherwise>
<option value="Bicester">Bicester</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:bond street')]">
<option selected="selected" value="Bond Street">Bond Street</option>
</xsl:when>

<xsl:otherwise>
<option value="Bond Street">Bond Street</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:brent cross')]">
<option selected="selected" value="Brent Cross">Brent Cross</option>
</xsl:when>

<xsl:otherwise>
<option value="Brent Cross">Brent Cross</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:brompton road &amp;amp; knightsbridge')]">
<option selected="selected" value="Brompton Road &amp; Knightsbridge">Brompton Road &amp; Knightsbridge</option>
</xsl:when>

<xsl:otherwise>
<option value="Brompton Road &amp; Knightsbridge">Brompton Road &amp; Knightsbridge</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:covent garden')]">
<option selected="selected" value="Covent Garden">Covent Garden</option>
</xsl:when>

<xsl:otherwise>
<option value="Covent Garden">Covent Garden</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:hyde park')]">
<option selected="selected" value="Hyde Park">Hyde Park</option>
</xsl:when>

<xsl:otherwise>
<option value="Hyde Park">Hyde Park</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:kings road')]">
<option selected="selected" value="Kings Road">Kings Road</option>
</xsl:when>

<xsl:otherwise>
<option value="Kings Road">Kings Road</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:london')]">
<option selected="selected" value="London">London</option>
</xsl:when>

<xsl:otherwise>
<option value="London">London</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:marylebone')]">
<option selected="selected" value="Marylebone">Marylebone</option>
</xsl:when>

<xsl:otherwise>
<option value="Marylebone">Marylebone</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:mayfair')]">
<option selected="selected" value="Mayfair">Mayfair</option>
</xsl:when>

<xsl:otherwise>
<option value="Mayfair">Mayfair</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:oxford street')]">
<option selected="selected" value="Oxford Street">Oxford Street</option>
</xsl:when>

<xsl:otherwise>
<option value="Oxford Street">Oxford Street</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:piccadilly')]">
<option selected="selected" value="Piccadilly">Piccadilly</option>
</xsl:when>

<xsl:otherwise>
<option value="Piccadilly">Piccadilly</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:regent street')]">
<option selected="selected" value="Regent Street">Regent Street</option>
</xsl:when>

<xsl:otherwise>
<option value="Regent Street">Regent Street</option>

</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:sloane street')]">
<option selected="selected" value="Sloane Street">Sloane Street</option>
</xsl:when>

<xsl:otherwise>
<option value="Sloane Street">Sloane Street</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:the city')]">
<option selected="selected" value="The City">The City</option>
</xsl:when>

<xsl:otherwise>
<option value="The City">The City</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:westfield')]">
<option selected="selected" value="Westfield">Westfield</option>
</xsl:when>

<xsl:otherwise>
<option value="Westfield">Westfield</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:westfield stratford')]">
<option selected="selected" value="Westfield Stratford">Westfield Stratford</option>
</xsl:when>

<xsl:otherwise>
<option value="Westfield Stratford">Westfield Stratford</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:berlin')]">
<option selected="selected" value="Berlin">Berlin</option>
</xsl:when>

<xsl:otherwise>
<option value="Berlin">Berlin</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:friedrichstrasse')]">
<option selected="selected" value="Friedrichstrasse">Friedrichstrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Friedrichstrasse">Friedrichstrasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:kurfürstendamm')]">
<option selected="selected" value="Kurfürstendamm">Kurfürstendamm</option>
</xsl:when>

<xsl:otherwise>
<option value="Kurfürstendamm">Kurfürstendamm</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:tauentzienstrasse')]">
<option selected="selected" value="Tauentzienstrasse">Tauentzienstrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Tauentzienstrasse">Tauentzienstrasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:düsseldorf')]">
<option selected="selected" value="Düsseldorf">Düsseldorf</option>
</xsl:when>

<xsl:otherwise>
<option value="Düsseldorf">Düsseldorf</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:königsallee')]">
<option selected="selected" value="Königsallee">Königsallee</option>
</xsl:when>

<xsl:otherwise>
<option value="Königsallee">Königsallee</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:frankfurt')]">
<option selected="selected" value="Frankfurt">Frankfurt</option>
</xsl:when>

<xsl:otherwise>
<option value="Frankfurt">Frankfurt</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:goethestrasse')]">
<option selected="selected" value="Goethestrasse">Goethestrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Goethestrasse">Goethestrasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:zeil')]">
<option selected="selected" value="Zeil">Zeil</option>
</xsl:when>

<xsl:otherwise>
<option value="Zeil">Zeil</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:hamburg')]">
<option selected="selected" value="Hamburg">Hamburg</option>
</xsl:when>

<xsl:otherwise>
<option value="Hamburg">Hamburg</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:hohe bleichen &amp;amp; grosse bleichen')]">
<option selected="selected" value="Hohe Bleichen &amp;amp; Grosse Bleichen">Hohe Bleichen &amp;amp; Grosse Bleichen</option>
</xsl:when>

<xsl:otherwise>
<option value="Hohe Bleichen &amp;amp; Grosse Bleichen">Hohe Bleichen &amp;amp; Grosse Bleichen</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:jungfernstieg')]">
<option selected="selected" value="Jungfernstieg">Jungfernstieg</option>
</xsl:when>

<xsl:otherwise>
<option value="Jungfernstieg">Jungfernstieg</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:mönckebergstrasse')]">
<option selected="selected" value="Mönckebergstrasse">Mönckebergstrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Mönckebergstrasse">Mönckebergstrasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:neuer wall')]">
<option selected="selected" value="Neuer Wall">Neuer Wall</option>
</xsl:when>

<xsl:otherwise>
<option value="Neuer Wall">Neuer Wall</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:georgstrasse &amp;amp; karmarschstrasse')]">
<option selected="selected" value="Georgstrasse &amp; Karmarschstrasse">Georgstrasse &amp; Karmarschstrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Georgstrasse &amp; Karmarschstrasse">Georgstrasse &amp; Karmarschstrasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:hanover')]">
<option selected="selected" value="Hanover">Hanover</option>
</xsl:when>

<xsl:otherwise>
<option value="Hanover">Hanover</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:marienplatz &amp; kaufingerstrasse')]">
<option selected="selected" value="Marienplatz &amp; Kaufingerstrasse">Marienplatz &amp; Kaufingerstrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Marienplatz &amp; Kaufingerstrasse">Marienplatz &amp; Kaufingerstrasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:maximilianstrasse')]">
<option selected="selected" value="Maximilianstrasse">Maximilianstrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Maximilianstrasse">Maximilianstrasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:munich')]">
<option selected="selected" value="Munich">Munich</option>
</xsl:when>

<xsl:otherwise>
<option value="Munich">Munich</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:neuhauser strasse')]">
<option selected="selected" value="Neuhauser Strasse">Neuhauser Strasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Neuhauser Strasse">Neuhauser Strasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:olympiapark')]">
<option selected="selected" value="Olympiapark">Olympiapark</option>
</xsl:when>

<xsl:otherwise>
<option value="Olympiapark">Olympiapark</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:residenzstrasse')]">
<option selected="selected" value="Residenzstrasse">Residenzstrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Residenzstrasse">Residenzstrasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:theatinerstrasse')]">
<option selected="selected" value="Theatinerstrasse">Theatinerstrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Theatinerstrasse">Theatinerstrasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:rathaus')]">
<option selected="selected" value="Rathaus">Rathaus</option>
</xsl:when>

<xsl:otherwise>
<option value="Rathaus">Rathaus</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:stuttgart')]">
<option selected="selected" value="Stuttgart">Stuttgart</option>
</xsl:when>

<xsl:otherwise>
<option value="Stuttgart">Stuttgart</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:utrecht')]">
<option selected="selected" value="Utrecht">Utrecht</option>
</xsl:when>

<xsl:otherwise>
<option value="Utrecht">Utrecht</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:abdi ipekçi caddesi')]">
<option selected="selected" value="Abdi Ipekçi Caddesi">Abdi Ipekçi Caddesi</option>
</xsl:when>

<xsl:otherwise>
<option value="Abdi Ipekçi Caddesi">Abdi Ipekçi Caddesi</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:ataköy')]">
<option selected="selected" value="Ataköy">Ataköy</option>
</xsl:when>

<xsl:otherwise>
<option value="Ataköy">Ataköy</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:beşiktaş')]">
<option selected="selected" value="Beşiktaş">Beşiktaş</option>
</xsl:when>

<xsl:otherwise>
<option value="Beşiktaş">Beşiktaş</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:beyoğlu')]">
<option selected="selected" value="Beyoğlu">Beyoğlu</option>
</xsl:when>

<xsl:otherwise>
<option value="Beyoğlu">Beyoğlu</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:etiler')]">
<option selected="selected" value="Etiler">Etiler</option>
</xsl:when>

<xsl:otherwise>
<option value="Etiler">Etiler</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:istanbul')]">
<option selected="selected" value="Istanbul">Istanbul</option>
</xsl:when>

<xsl:otherwise>
<option value="Istanbul">Istanbul</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:istinye')]">
<option selected="selected" value="Istinye">Istinye</option>
</xsl:when>

<xsl:otherwise>
<option value="Istinye">Istinye</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:istinye park')]">
<option selected="selected" value="Istinye Park">Istinye Park</option>
</xsl:when>

<xsl:otherwise>
<option value="Istinye Park">Istinye Park</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:levent')]">
<option selected="selected" value="Levent">Levent</option>
</xsl:when>

<xsl:otherwise>
<option value="Levent">Levent</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:maçka &amp;amp; harbiye')]">
<option selected="selected" value="Maçka &amp; Harbiye">Maçka &amp; Harbiye</option>
</xsl:when>

<xsl:otherwise>
<option value="Maçka &amp; Harbiye">Maçka &amp; Harbiye</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:nişantaşı')]">
<option selected="selected" value="Nişantaşı">Nişantaşı</option>
</xsl:when>

<xsl:otherwise>
<option value="Nişantaşı">Nişantaşı</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:suadiye')]">
<option selected="selected" value="Suadiye">Suadiye</option>
</xsl:when>

<xsl:otherwise>
<option value="Suadiye">Suadiye</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:üsküdar')]">
<option selected="selected" value="Üsküdar">Üsküdar</option>
</xsl:when>

<xsl:otherwise>
<option value="Üsküdar">Üsküdar</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:amsterdam')]">
<option selected="selected" value="Amsterdam">Amsterdam</option>
</xsl:when>

<xsl:otherwise>
<option value="Amsterdam">Amsterdam</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:dam')]">
<option selected="selected" value="Dam">Dam</option>
</xsl:when>

<xsl:otherwise>
<option value="Dam">Dam</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:damrak')]">
<option selected="selected" value="Damrak">Damrak</option>
</xsl:when>

<xsl:otherwise>
<option value="Damrak">Damrak</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:pieter cornelisz hooftstraat')]">
<option selected="selected" value="Pieter Cornelisz Hooftstraat">Pieter Cornelisz Hooftstraat</option>
</xsl:when>

<xsl:otherwise>
<option value="Pieter Cornelisz Hooftstraat">Pieter Cornelisz Hooftstraat</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:rokin')]">
<option selected="selected" value="Rokin">Rokin</option>
</xsl:when>

<xsl:otherwise>
<option value="Rokin">Rokin</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:ar delft')]">
<option selected="selected" value="AR Delft">AR Delft</option>
</xsl:when>

<xsl:otherwise>
<option value="AR Delft">AR Delft</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:the hague')]">
<option selected="selected" value="The Hague">The Hague</option>
</xsl:when>

<xsl:otherwise>
<option value="The Hague">The Hague</option>
</xsl:otherwise>
</xsl:choose>


<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:maastricht')]">
<option selected="selected" value="Maastricht">Maastricht</option>
</xsl:when>

<xsl:otherwise>
<option value="Maastricht">Maastricht</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:roermond')]">
<option selected="selected" value="Roermond">Roermond</option>
</xsl:when>

<xsl:otherwise>
<option value="Roermond">Roermond</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:grandi stazioni')]">
<option selected="selected" value="Grandi Stazioni">Grandi Stazioni</option>
</xsl:when>

<xsl:otherwise>
<option value="Grandi Stazioni">Grandi Stazioni</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:la rustica')]">
<option selected="selected" value="La Rustica">La Rustica</option>
</xsl:when>

<xsl:otherwise>
<option value="La Rustica">La Rustica</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:ottaviano')]">
<option selected="selected" value="Ottaviano">Ottaviano</option>
</xsl:when>

<xsl:otherwise>
<option value="Ottaviano">Ottaviano</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:piazza di spagna')]">
<option selected="selected" value="Piazza di Spagna">Piazza di Spagna</option>
</xsl:when>

<xsl:otherwise>
<option value="Piazza di Spagna">Piazza di Spagna</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:rome')]">
<option selected="selected" value="Rome">Rome</option>
</xsl:when>

<xsl:otherwise>
<option value="Rome">Rome</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via alberto lionello &amp; via ugo ojetti')]">
<option selected="selected" value="Via Alberto Lionello &amp; Via Ugo Ojetti">Via Alberto Lionello &amp; Via Ugo Ojetti</option>
</xsl:when>

<xsl:otherwise>
<option value="Via Alberto Lionello &amp; Via Ugo Ojetti">Via Alberto Lionello &amp; Via Ugo Ojetti</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via appia nuova')]">
<option selected="selected" value="Via Appia Nuova">Via Appia Nuova</option>
</xsl:when>

<xsl:otherwise>
<option value="Via Appia Nuova">Via Appia Nuova</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via bocca di leone')]">
<option selected="selected" value="Via Bocca di Leone">Via Bocca di Leone</option>
</xsl:when>

<xsl:otherwise>
<option value="Via Bocca di Leone">Via Bocca di Leone</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via borgognona')]">
<option selected="selected" value="Via Borgognona">Via Borgognona</option>
</xsl:when>

<xsl:otherwise>
<option value="Via Borgognona">Via Borgognona</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via dei condotti')]">
<option selected="selected" value="Via dei Condotti">Via dei Condotti</option>
</xsl:when>

<xsl:otherwise>
<option value="Via dei Condotti">Via dei Condotti</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via del babuino')]">
<option selected="selected" value="Via del Babuino">Via del Babuino</option>
</xsl:when>

<xsl:otherwise>
<option value="Via del Babuino">Via del Babuino</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via del corso')]">
<option selected="selected" value="Via del Corso">Via del Corso</option>
</xsl:when>

<xsl:otherwise>
<option value="Via del Corso">Via del Corso</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via del tritone')]">
<option selected="selected" value="Via del Tritone">Via del Tritone</option>
</xsl:when>

<xsl:otherwise>
<option value="Via del Tritone">Via del Tritone</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via tuscolana')]">
<option selected="selected" value="Via Tuscolana">Via Tuscolana</option>
</xsl:when>

<xsl:otherwise>
<option value="Via Tuscolana">Via Tuscolana</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:viale oceano pacifico')]">
<option selected="selected" value="Viale Oceano Pacifico">Viale Oceano Pacifico</option>
</xsl:when>

<xsl:otherwise>
<option value="Viale Oceano Pacifico">Viale Oceano Pacifico</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:villa borghese')]">
<option selected="selected" value="Villa Borghese">Villa Borghese</option>
</xsl:when>

<xsl:otherwise>
<option value="Villa Borghese">Villa Borghese</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:buenos aires')]">
<option selected="selected" value="Buenos Aires">Buenos Aires</option>
</xsl:when>

<xsl:otherwise>
<option value="Buenos Aires">Buenos Aires</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:dante')]">
<option selected="selected" value="Dante">Dante</option>
</xsl:when>

<xsl:otherwise>
<option value="Dante">Dante</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:duomo')]">
<option selected="selected" value="Duomo">Duomo</option>
</xsl:when>

<xsl:otherwise>
<option value="Duomo">Duomo</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:giacomo matteotti')]">
<option selected="selected" value="Giacomo Matteotti">Giacomo Matteotti</option>
</xsl:when>

<xsl:otherwise>
<option value="Giacomo Matteotti">Giacomo Matteotti</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:magenta / vercelli')]">
<option selected="selected" value="Magenta / Vercelli">Magenta / Vercelli</option>
</xsl:when>

<xsl:otherwise>
<option value="Magenta / Vercelli">Magenta / Vercelli</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:milan')]">
<option selected="selected" value="Milan">Milan</option>
</xsl:when>

<xsl:otherwise>
<option value="Milan">Milan</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:mirabello')]">
<option selected="selected" value="Mirabello">Mirabello</option>
</xsl:when>

<xsl:otherwise>
<option value="Mirabello">Mirabello</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:montenapoleone')]">
<option selected="selected" value="Montenapoleone">Montenapoleone</option>
</xsl:when>

<xsl:otherwise>
<option value="Montenapoleone">Montenapoleone</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:porta genova / ticinese')]">
<option selected="selected" value="Porta Genova / Ticinese">Porta Genova / Ticinese</option>
</xsl:when>

<xsl:otherwise>
<option value="Porta Genova / Ticinese">Porta Genova / Ticinese</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:porta vittoria')]">
<option selected="selected" value="Porta Vittoria">Porta Vittoria</option>
</xsl:when>

<xsl:otherwise>
<option value="Porta Vittoria">Porta Vittoria</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:san babila &amp; venezia')]">
<option selected="selected" value="San Babila &amp; Venezia">San Babila &amp; Venezia</option>
</xsl:when>

<xsl:otherwise>
<option value="San Babila &amp; Venezia">San Babila &amp; Venezia</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:sant%27andrea')]">
<option selected="selected" value="Sant%27Andrea">Sant%27Andrea</option>
</xsl:when>

<xsl:otherwise>
<option value="Sant%27Andrea">Sant%27Andrea</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via alessandro manzoni')]">
<option selected="selected" value="Via Alessandro Manzoni">Via Alessandro Manzoni</option>
</xsl:when>

<xsl:otherwise>
<option value="Via Alessandro Manzoni">Via Alessandro Manzoni</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via della spiga')]">
<option selected="selected" value="Via della Spiga">Via della Spiga</option>
</xsl:when>

<xsl:otherwise>
<option value="Via della Spiga">Via della Spiga</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:vittorio emanuele ii')]">
<option selected="selected" value="Vittorio Emanuele II">Vittorio Emanuele II</option>
</xsl:when>

<xsl:otherwise>
<option value="Vittorio Emanuele II">Vittorio Emanuele II</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:florence')]">
<option selected="selected" value="Florence">Florence</option>
</xsl:when>

<xsl:otherwise>
<option value="Florence">Florence</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:via de%27 tornabuoni')]">
<option selected="selected" value="Via de%27 Tornabuoni">Via de%27 Tornabuoni</option>
</xsl:when>

<xsl:otherwise>
<option value="Via de%27 Tornabuoni">Via de%27 Tornabuoni</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:san marco')]">
<option selected="selected" value="San Marco">San Marco</option>
</xsl:when>

<xsl:otherwise>
<option value="San Marco">San Marco</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:venice')]">
<option selected="selected" value="Venice">Venice</option>
</xsl:when>

<xsl:otherwise>
<option value="Venice">Venice</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:innere stadt')]">
<option selected="selected" value="Innere Stadt">Innere Stadt</option>
</xsl:when>

<xsl:otherwise>
<option value="Innere Stadt">Innere Stadt</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:kärntner strasse')]">
<option selected="selected" value="Kärntner Strasse">Kärntner Strasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Kärntner Strasse">Kärntner Strasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:mariahilfer strasse')]">
<option selected="selected" value="Mariahilfer Strasse">Mariahilfer Strasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Mariahilfer Strasse">Mariahilfer Strasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:vienna')]">
<option selected="selected" value="Vienna">Vienna</option>
</xsl:when>

<xsl:otherwise>
<option value="Vienna">Vienna</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:salzburg')]">
<option selected="selected" value="Salzburg">Salzburg</option>
</xsl:when>

<xsl:otherwise>
<option value="Salzburg">Salzburg</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:university square')]">
<option selected="selected" value="University Square">University Square</option>
</xsl:when>

<xsl:otherwise>
<option value="University Square">University Square</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:graz')]">
<option selected="selected" value="Graz">Graz</option>
</xsl:when>

<xsl:otherwise>
<option value="Graz">Graz</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:hauptplatz')]">
<option selected="selected" value="Hauptplatz">Hauptplatz</option>
</xsl:when>

<xsl:otherwise>
<option value="Hauptplatz">Hauptplatz</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:styria')]">
<option selected="selected" value="Styria">Styria</option>
</xsl:when>

<xsl:otherwise>
<option value="Styria">Styria</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:chinatown')]">
<option selected="selected" value="Chinatown">Chinatown</option>
</xsl:when>

<xsl:otherwise>
<option value="Chinatown">Chinatown</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:harbour front walk')]">
<option selected="selected" value="Harbour Front Walk">Harbour Front Walk</option>
</xsl:when>

<xsl:otherwise>
<option value="Harbour Front Walk">Harbour Front Walk</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:marina bay')]">
<option selected="selected" value="Marina Bay">Marina Bay</option>
</xsl:when>

<xsl:otherwise>
<option value="Marina Bay">Marina Bay</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:marine parade &amp; tampines')]">
<option selected="selected" value="Marine Parade &amp; Tampines">Marine Parade &amp; Tampines</option>
</xsl:when>

<xsl:otherwise>
<option value="Marine Parade &amp; Tampines">Marine Parade &amp; Tampines</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:north ridge road &amp; victoria street')]">
<option selected="selected" value="North Bridge Road &amp; Victoria Street">North Bridge Road &amp; Victoria Street</option>
</xsl:when>

<xsl:otherwise>
<option value="North Bridge Road &amp; Victoria Street">North Bridge Road &amp; Victoria Street</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:orchard road')]">
<option selected="selected" value="Orchard Road">Orchard Road</option>
</xsl:when>

<xsl:otherwise>
<option value="Orchard Road">Orchard Road</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:orchard turn')]">
<option selected="selected" value="Orchard Turn">Orchard Turn</option>
</xsl:when>

<xsl:otherwise>
<option value="Orchard Turn">Orchard Turn</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:raffles boulevard &amp; suntec city')]">
<option selected="selected" value="Raffles Boulevard &amp; Suntec City">Raffles Boulevard &amp; Suntec City</option>
</xsl:when>

<xsl:otherwise>
<option value="Raffles Boulevard &amp; Suntec City">Raffles Boulevard &amp; Suntec City</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:scotts road')]">
<option selected="selected" value="Scotts Road">Scotts Road</option>
</xsl:when>

<xsl:otherwise>
<option value="Scotts Road">Scotts Road</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:sentosa')]">
<option selected="selected" value="Sentosa">Sentosa</option>
</xsl:when>

<xsl:otherwise>
<option value="Sentosa">Sentosa</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:singapore')]">
<option selected="selected" value="Singapore">Singapore</option>
</xsl:when>

<xsl:otherwise>
<option value="Singapore">Singapore</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:tanglin road')]">
<option selected="selected" value="Tanglin Road">Tanglin Road</option>
</xsl:when>

<xsl:otherwise>
<option value="Tanglin Road">Tanglin Road</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:na příkopě')]">
<option selected="selected" value="Na Příkopě">Na Příkopě</option>
</xsl:when>

<xsl:otherwise>
<option value="Na Příkopě">Na Příkopě</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:pařížská')]">
<option selected="selected" value="Pařížská">Pařížská</option>
</xsl:when>

<xsl:otherwise>
<option value="Pařížská">Pařížská</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:prague')]">
<option selected="selected" value="Prague">Prague</option>
</xsl:when>

<xsl:otherwise>
<option value="Prague">Prague</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:copenhagen')]">
<option selected="selected" value="Copenhagen">Copenhagen</option>
</xsl:when>

<xsl:otherwise>
<option value="Copenhagen">Copenhagen</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:østergade')]">
<option selected="selected" value="Østergade">Østergade</option>
</xsl:when>

<xsl:otherwise>
<option value="Østergade">Østergade</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:birger jarlsgatan')]">
<option selected="selected" value="Birger Jarlsgatan">Birger Jarlsgatan</option>
</xsl:when>

<xsl:otherwise>
<option value="Birger Jarlsgatan">Birger Jarlsgatan</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:hamngatan')]">
<option selected="selected" value="Hamngatan">Hamngatan</option>
</xsl:when>

<xsl:otherwise>
<option value="Hamngatan">Hamngatan</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:stockholm')]">
<option selected="selected" value="Stockholm">Stockholm</option>
</xsl:when>

<xsl:otherwise>
<option value="Stockholm">Stockholm</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:bonaparte / rennes')]">
<option selected="selected" value="Bonaparte / Rennes">Bonaparte / Rennes</option>
</xsl:when>

<xsl:otherwise>
<option value="Bonaparte / Rennes">Bonaparte / Rennes</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:champs-elysées')]">
<option selected="selected" value="Champs-Elysées">Champs-Elysées</option>
</xsl:when>

<xsl:otherwise>
<option value="Champs-Elysées">Champs-Elysées</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:eiffel')]">
<option selected="selected" value="Eiffel">Eiffel</option>
</xsl:when>

<xsl:otherwise>
<option value="Eiffel">Eiffel</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:faubourg saint honoré')]">
<option selected="selected" value="Faubourg Saint Honoré">Faubourg Saint Honoré</option>
</xsl:when>

<xsl:otherwise>
<option value="Faubourg Saint Honoré">Faubourg Saint Honoré</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:haussmann')]">
<option selected="selected" value="Haussmann">Haussmann</option>
</xsl:when>

<xsl:otherwise>
<option value="Haussmann">Haussmann</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:invalides')]">
<option selected="selected" value="Invalides">Invalides</option>
</xsl:when>

<xsl:otherwise>
<option value="Invalides">Invalides</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:italie')]">
<option selected="selected" value="Italie">Italie</option>
</xsl:when>

<xsl:otherwise>
<option value="Italie">Italie</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:le marias')]">
<option selected="selected" value="Le Marias">Le Marias</option>
</xsl:when>

<xsl:otherwise>
<option value="Le Marias">Le Marias</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:montparnasse')]">
<option selected="selected" value="Montparnasse">Montparnasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Montparnasse">Montparnasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:opéra')]">
<option selected="selected" value="Opéra">Opéra</option>
</xsl:when>

<xsl:otherwise>
<option value="Opéra">Opéra</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:parc monceau')]">
<option selected="selected" value="Parc Monceau">Parc Monceau</option>
</xsl:when>

<xsl:otherwise>
<option value="Parc Monceau">Parc Monceau</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:paris')]">
<option selected="selected" value="Paris">Paris</option>
</xsl:when>

<xsl:otherwise>
<option value="Paris">Paris</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:porte maillot')]">
<option selected="selected" value="Porte Maillot">Porte Maillot</option>
</xsl:when>

<xsl:otherwise>
<option value="Porte Maillot">Porte Maillot</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:rivoli / les halles')]">
<option selected="selected" value="Rivoli / Les Halles">Rivoli / Les Halles</option>
</xsl:when>

<xsl:otherwise>
<option value="Rivoli / Les Halles">Rivoli / Les Halles</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:rue de sévres')]">
<option selected="selected" value="Rue De Sévres">Rue De Sévres</option>
</xsl:when>

<xsl:otherwise>
<option value="Rue De Sévres">Rue De Sévres</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:saint germain')]">
<option selected="selected" value="Saint Germain">Saint Germain</option>
</xsl:when>

<xsl:otherwise>
<option value="Saint Germain">Saint Germain</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:saint-lazare')]">
<option selected="selected" value="Saint-Lazare">Saint-Lazare</option>
</xsl:when>

<xsl:otherwise>
<option value="Saint-Lazare">Saint-Lazare</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:trocadéro / passy vendôme / saint honoré')]">
<option selected="selected" value="Trocadéro / Passy Vendôme / Saint Honoré">Trocadéro / Passy Vendôme / Saint Honoré</option>
</xsl:when>

<xsl:otherwise>
<option value="Trocadéro / Passy Vendôme / Saint Honoré">Trocadéro / Passy Vendôme / Saint Honoré</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:victor hugo')]">
<option selected="selected" value="Victor Hugo">Victor Hugo</option>
</xsl:when>

<xsl:otherwise>
<option value="Victor Hugo">Victor Hugo</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:cannes')]">
<option selected="selected" value="Cannes">Cannes</option>
</xsl:when>

<xsl:otherwise>
<option value="Cannes">Cannes</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:nice')]">
<option selected="selected" value="Nice">Nice</option>
</xsl:when>

<xsl:otherwise>
<option value="Nice">Nice</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:st tropez')]">
<option selected="selected" value="St Tropez">St Tropez</option>
</xsl:when>

<xsl:otherwise>
<option value="St Tropez">St Tropez</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:calle de goya')]">
<option selected="selected" value="Calle de Goya">Calle de Goya</option>
</xsl:when>

<xsl:otherwise>
<option value="Calle de Goya">Calle de Goya</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:calle de jorge juan')]">
<option selected="selected" value="Calle de Jorge Juan">Calle de Jorge Juan</option>
</xsl:when>

<xsl:otherwise>
<option value="Calle de Jorge Juan">Calle de Jorge Juan</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:calle de josé ortega')]">
<option selected="selected" value="Calle de José Ortega">Calle de José Ortega</option>
</xsl:when>

<xsl:otherwise>
<option value="Calle de José Ortega">Calle de José Ortega</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:calle de serrano')]">
<option selected="selected" value="Calle de Serrano">Calle de Serrano</option>
</xsl:when>

<xsl:otherwise>
<option value="Calle de Serrano">Calle de Serrano</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:gran via')]">
<option selected="selected" value="Gran Via">Gran Via</option>
</xsl:when>

<xsl:otherwise>
<option value="Gran Via">Gran Via</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:justica')]">
<option selected="selected" value="Justica">Justica</option>
</xsl:when>

<xsl:otherwise>
<option value="Justica">Justica</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:la roca del vallés')]">
<option selected="selected" value="La Roca Del Vallés">La Roca Del Vallés</option>
</xsl:when>

<xsl:otherwise>
<option value="La Roca Del Vallés">La Roca Del Vallés</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:madrid')]">
<option selected="selected" value="Madrid">Madrid</option>
</xsl:when>

<xsl:otherwise>
<option value="Madrid">Madrid</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:raimundo fernández villaverde')]">
<option selected="selected" value="Raimundo Fernández Villaverde">Raimundo Fernández Villaverde</option>
</xsl:when>

<xsl:otherwise>
<option value="Raimundo Fernández Villaverde">Raimundo Fernández Villaverde</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:sol')]">
<option selected="selected" value="Sol">Sol</option>
</xsl:when>

<xsl:otherwise>
<option value="Sol">Sol</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:universidad')]">
<option selected="selected" value="Universidad">Universidad</option>
</xsl:when>

<xsl:otherwise>
<option value="Universidad">Universidad</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:barcelona')]">
<option selected="selected" value="Barcelona">Barcelona</option>
</xsl:when>

<xsl:otherwise>
<option value="Barcelona">Barcelona</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:la roca del vallés')]">
<option selected="selected" value="La Roca Del Vallés">La Roca Del Vallés</option>
</xsl:when>

<xsl:otherwise>
<option value="La Roca Del Vallés">La Roca Del Vallés</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:passeig de gràcia &amp; diagonal')]">
<option selected="selected" value="Passeig de Gràcia &amp; Diagonal">Passeig de Gràcia &amp; Diagonal</option>
</xsl:when>

<xsl:otherwise>
<option value="Passeig de Gràcia &amp; Diagonal">Passeig de Gràcia &amp; Diagonal</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:rambla de catalunya')]">
<option selected="selected" value="Rambla de Catalunya">Rambla de Catalunya</option>
</xsl:when>

<xsl:otherwise>
<option value="Rambla de Catalunya">Rambla de Catalunya</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:aleksanterinkatu &amp; fabianinkaru')]">
<option selected="selected" value="Aleksanterinkatu &amp; Fabianinkaru">Aleksanterinkatu &amp; Fabianinkaru</option>
</xsl:when>

<xsl:otherwise>
<option value="Aleksanterinkatu &amp; Fabianinkaru">Aleksanterinkatu &amp; Fabianinkaru</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:helsinki')]">
<option selected="selected" value="Helsinki">Helsinki</option>
</xsl:when>

<xsl:otherwise>
<option value="Helsinki">Helsinki</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:mikonkatu')]">
<option selected="selected" value="Mikonkatu">Mikonkatu</option>
</xsl:when>

<xsl:otherwise>
<option value="Mikonkatu">Mikonkatu</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:geneva')]">
<option selected="selected" value="Geneva">Geneva</option>
</xsl:when>

<xsl:otherwise>
<option value="Geneva">Geneva</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:rue du rhône')]">
<option selected="selected" value="Rue Du Rhône">Rue Du Rhône</option>
</xsl:when>

<xsl:otherwise>
<option value="Rue Du Rhône">Rue Du Rhône</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:bahnhofstrasse')]">
<option selected="selected" value="Bahnhofstrasse">Bahnhofstrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Bahnhofstrasse">Bahnhofstrasse</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:zurich')]">
<option selected="selected" value="Zurich">Zurich</option>
</xsl:when>

<xsl:otherwise>
<option value="Zurich">Zurich</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:grendelstrasse / schweizerhofquai')]">
<option selected="selected" value="Grendelstrasse / Schweizerhofquai">Grendelstrasse / Schweizerhofquai</option>
</xsl:when>

<xsl:otherwise>
<option value="Grendelstrasse / Schweizerhofquai">Grendelstrasse / Schweizerhofquai</option>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="PARAM[(@name='requiredfields') and contains($requiredfields_val, 'area:pilatusstrasse')]">
<option selected="selected" value="Pilatusstrasse">Pilatusstrasse</option>
</xsl:when>

<xsl:otherwise>
<option value="Pilatusstrasse">Pilatusstrasse</option>
</xsl:otherwise>
</xsl:choose>
</select>

<input type="hidden" name="requiredfields" value="" />

</div><!--dropdown_holder-->

<div class="clear" />
</div><!--search_input_holder-->

<xsl:variable name="brand_q">
<xsl:if test="/GSP/Q != ''">
<xsl:value-of select="$space_normalized_query" />
</xsl:if>
</xsl:variable>

<script>
$(window).load(function() {

productValue ='';
countryValue ='';
cityValue ='';
areaValue ='';
brandValueURL = '<xsl:value-of select="$brand_q" />';

function generateRequiredField() {
    productValue = $('#store_products option:selected').attr('value');

    countryValue = $('#store_country option:selected').attr('value');

    cityValue = $('#store_city option:selected').attr('value');

    areaValue = $('#store_areas option:selected').attr('value');

if(typeof areaValue === 'undefined'){
console.log('undefined');
areaValue = '';
}

brandValue = $('#search_input_store input[name="q"]').val();

contentType = 'contentTypeName:GlobalBlueBrandListing.';

console.log(contentType);

if (brandValue !== '') {
       brandValue = 'brand:' + brandValue +'.';
    }

    
    productValue = 'product:' + productValue;

    if (countryValue !== '') {
        countryValue = '.country:' + countryValue;
    }

    if (cityValue !== '') {
        cityValue = '.city:' + cityValue;
    }

    if (areaValue !== '') {
        areaValue = '.area:' + areaValue;
    }
    
if (brandValueURL.trim().length === 0) {
requiredFieldVal = contentType + productValue + countryValue + cityValue + areaValue;

    requiredField = $('input[name="requiredfields"]').attr('value', requiredFieldVal);
    requiredField = $('input[name="requiredfields"]').attr('value');
}

else {
requiredFieldVal = contentType + productValue + countryValue + cityValue + areaValue;

    requiredField = $('input[name="requiredfields"]').attr('value', requiredFieldVal);
    requiredField = $('input[name="requiredfields"]').attr('value');
}

console.log('requiredField from dropdown function '+requiredField);
    
}//function

generateRequiredField();

//$('.track_change').change(generateRequiredField).keyup(generateRequiredField);
$('.track_change').change(generateRequiredField);

});//windowload
</script>
</xsl:when><!--when_store_locator-->


<xsl:when test="$show_suggest = '1'">
<div id="search_input_holder">
<div id="search_input" class="this_one"><input type="text" name="q" size="{$search_box_size}" maxlength="256" value="{$space_normalized_query}" autocomplete="off" onkeyup="ss_handleKey(event)" x-webkit-speech="x-webkit-speech" /></div>
<table cellpadding="0" cellspacing="0" class="ss-gac-m" id="search_suggest"></table>

<div class="search_button"><input type="submit" id="search_button" name="btnG" value="GO" /></div>

<div class="dropdown_holder">

<select id="site_search_gb_services" class="story_type">
<option value="">All GB Services</option>

<xsl:choose>
  <xsl:when test="PARAM[(@name='requiredfields') and (@value='gbService:refund points')]">
   <option value="refund points" selected="selected">Refund Offices</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="refund points">Refund Offices</option>
  </xsl:otherwise>
</xsl:choose>

<xsl:choose>
  <xsl:when test="PARAM[(@name='requiredfields') and (@value='gbService:tfs')]">
   <option value="tfs" selected="selected">Tax Free Shopping</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="tfs">Tax Free Shopping</option>
  </xsl:otherwise>
</xsl:choose>

<xsl:choose>
  <xsl:when test="PARAM[(@name='requiredfields') and (@value='gbService:cc')]">
   <option value="cc" selected="selected">Currency Choice</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="cc">Currency Choice</option>
  </xsl:otherwise>
</xsl:choose>

<xsl:choose>
  <xsl:when test="PARAM[(@name='requiredfields') and (@value='gbService:Stores')]">
   <option value="Stores" selected="selected">Stores</option>
  </xsl:when>
  <xsl:otherwise>
   <option value="Stores">Stores</option>
  </xsl:otherwise>
</xsl:choose>
</select>

<input type="hidden" name="requiredfields" value="" />

</div><!--dropdown_holder-->

<div class="clear" />
</div><!--search_input_holder-->

<script>
$(window).load(function() {

gbServicesValue = '';

function generateRequiredField() {

    gbServicesValue = $('#site_search_gb_services option:selected').attr('value');

    if (gbServicesValue.trim().length !== 0) {
        requiredFieldVal = 'gbService:' + gbServicesValue;

        requiredField = $('input[name="requiredfields"]').attr('value', requiredFieldVal);
    }

} //function

generateRequiredField();

$('.story_type').change(generateRequiredField);

});//windowload
</script>
</xsl:when>

<xsl:otherwise>
<div id="search_input_holder">
<div class="search_button"><input type="submit" id="search_button" name="btnG" value="Search" />
<div class="clear" />
</div>
<div id="search_input"><input type="text" name="q" size="{$search_box_size}" maxlength="256" value="{$space_normalized_query}" autocomplete="off" x-webkit-speech="x-webkit-speech" /></div>
<div class="clear" />
</div><!--search_input_holder-->
</xsl:otherwise>
</xsl:choose>

<xsl:if test="$show_date_range_filter ='1' ">
<xsl:call-template name="date_range_filter" />
</xsl:if>

<xsl:variable name="as_q_value">
<xsl:value-of select="/GSP/PARAM[@name='as_q']/@value" />
</xsl:variable>

<xsl:if test="PARAM[not(@name='as_q') or not(contains($as_q_value, 'daterange'))]">
   <input type="hidden" name="as_q" id="date_range_filter"
   value="{PARAM[@name='as_q']/@value}" />
</xsl:if>

        <div class="advanced_search_holder">
          <xsl:if test="($egds_show_search_tabs != '0') and (($type = 'home') or ($type = 'std_top'))">
          	<div class="2">
                  <xsl:call-template name="desktop_tab"/>
            </div><!--2-->
          </xsl:if>
          <xsl:if test="($type = 'swr')">
          
          <div class="3">
                    <xsl:variable name="est_result" select="/GSP/RES/M" />
                    <xsl:if test="($est_result != '') and ($est_result > 0)">
                    There were about <b><xsl:value-of select="RES/M"/></b> results for <b><xsl:value-of select="$space_normalized_query"/></b>.
                      <br/>
                    </xsl:if>
                    Use the search box below to search within these results.
                  </div><!--3-->
          
          </xsl:if>
          
        <div class="4">
          <font size="-1">
            <xsl:choose>
              <xsl:when test="($type = 'swr')">
                <input type="text" name="as_q" size="{$search_box_size}" maxlength="256" value=""/>
                <input type="hidden" name="q" value="{$qval}"/>
              </xsl:when>
              <xsl:when test="$show_suggest = '1' and (($type = 'home') or ($type = 'std_top'))">
                                
<div class="ss-gac-m" style="width: 365px; visibility: hidden;" id="search_suggest"></div>

              </xsl:when>

            </xsl:choose>
          </font>
          <xsl:call-template name="collection_menu"/>
          	<div class="5">
                        <font size="-2">
                        <xsl:if test="($show_swr_link != '0') and ($type = 'std_bottom')">
                                <xsl:call-template name="nbsp"/>
                                <xsl:call-template name="nbsp"/>
                                <a ctype="advanced_swr" href="{$swr_search_url}">
                                        <xsl:value-of select="$swr_search_anchor_text"/>
                                </a>
                                <br/>
                        </xsl:if>
                        <xsl:if test="$show_result_page_adv_link != '0'">
                                <xsl:call-template name="nbsp"/>
                                <xsl:call-template name="nbsp"/>
                                <a ctype="advanced" href="{$adv_search_url}">
                                        <xsl:value-of select="$adv_search_anchor_text"/>
                                </a>
                        </xsl:if>
                        <xsl:if test="$show_result_page_help_link != '0'">
                                <xsl:call-template name="nbsp"/>
                                <xsl:call-template name="nbsp"/>
                                <a ctype="help" href="{$help_url}">
                                        <xsl:value-of select="$search_help_anchor_text"/>
                                </a>
                        </xsl:if>
                        </font>
                  </div><!--5-->
        <xsl:if test="$show_secure_radio != '0'">
        <div class="secure_radios">
          <font size="-1">Search:
            <xsl:choose>
              <xsl:when test="$access='p'">
                <label><input type="radio" class="access_radio" name="access" value="p" checked="checked" />public content</label>
              </xsl:when>
              <xsl:otherwise>
                <label><input type="radio" class="access_radio" name="access" value="p"/>public content</label>
              </xsl:otherwise>
            </xsl:choose>
            <xsl:choose>
              <xsl:when test="$access='a'">
                <label class="no_padding"><input type="radio" name="access" value="a" checked="checked" />public and secure content</label>
              </xsl:when>
              <xsl:otherwise>
                <label class="no_padding"><input type="radio" class="access_radio" name="access" value="a"/>public and secure content</label>
              </xsl:otherwise>
            </xsl:choose>
          </font>
          </div><!--6-->
        </xsl:if>
      </div><!--4-->

</div><!--first-->
    <xsl:text>
    </xsl:text>
    <xsl:call-template name="form_params"/>
  <xsl:if test="$is_embedded_mode != '1'">

<!-- ***************************************************************************
S.MIRZA PASS GETFIELDS AND FILTER IF NOT IN THE URL
**************************************************************************** -->
<xsl:if test="/GSP/PARAM[@name != 'filter']">
   <input type="hidden" name="filter" value="0"/>
</xsl:if>

<xsl:if test="not(/GSP/PARAM[@name = 'getfields'])">
   <input type="hidden" name="getfields" value="*"/>
</xsl:if>

  <xsl:text disable-output-escaping="yes">&lt;/form&gt;</xsl:text>
  </xsl:if>
</xsl:template>


<!-- **********************************************************************
  Bottom search box (do not customized)
     ********************************************************************** -->
<xsl:template name="bottom_search_box">
    <br clear="all"/>

    <div class="bottom-search-box">
<div class="bottom_search_box_holder">
      <xsl:call-template name="search_box">
      <xsl:with-param name="type" select="'std_bottom'"/>
      </xsl:call-template>
</div><!--bottom_search_box_holder-->
<div class="clear"></div>
    </div>
</xsl:template>


<!-- **********************************************************************
 Sort-by criteria: sort by date/relevance
     ********************************************************************** -->
<xsl:template name="sort_by">
  <xsl:variable name="sort_by_url"><xsl:for-each
    select="/GSP/PARAM[(@name != 'sort') and
                       (@name != $embedded_mode_root_path_param) and
                       (@name != $embedded_mode_resource_root_path_param) and
                       (@name != $embedded_mode_disable_style) and
                       (@name != 'start') and
                       (@name != 'epoch' or $is_test_search != '') and
                       not(starts-with(@name, 'metabased_'))]">
      <xsl:choose>
        <xsl:when test="@name = 'only_apps' and $show_apps_segmented_ui = '1'">
          <xsl:value-of select="'exclude_apps=1'" />
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="@name"/><xsl:text>=</xsl:text>
          <xsl:value-of select="@original_value"/>
        </xsl:otherwise>
      </xsl:choose>
      <xsl:if test="position() != last()">
        <xsl:text disable-output-escaping="yes">&amp;</xsl:text>
      </xsl:if>
    </xsl:for-each>
  </xsl:variable>

  <xsl:variable name="sort_by_relevance_url">
    <xsl:value-of select="$sort_by_url"
      />&amp;sort=date%3AD%3AL%3Ad1</xsl:variable>

  <xsl:variable name="sort_by_date_url">
    <xsl:value-of select="$sort_by_url"
      />&amp;sort=date%3AD%3AS%3Ad1</xsl:variable>

  <!-- S.MIRZA REMOVING THE SORT BY TABLE -->
<div id="sort_by_holder">
<div class="sort_by_links">
<span class="sort_by_title">Sort by</span>
  <span class="s">
  <xsl:choose>
    <xsl:when test="/GSP/PARAM[@name = 'sort' and starts-with(@value,'date:D:L')]">
      <span class="sort_by_selected"><xsl:text>Relevance </xsl:text></span>| 
      <a ctype="sort" class="sort_link"
          href="{$gsa_search_root_path_prefix}?{$sort_by_date_url}">Date</a>
    </xsl:when>
    <xsl:when test="/GSP/PARAM[@name = 'sort' and starts-with(@value,'date:A:L')]">
      <span class="sort_by_selected"><xsl:text>Relevance </xsl:text></span>| 
      <a ctype="sort" class="sort_link"
          href="{$gsa_search_root_path_prefix}?{$sort_by_date_url}">Date</a>
    </xsl:when>
    <xsl:otherwise>
      <a ctype="sort" class="sort_link"
          href="{$gsa_search_root_path_prefix}?{$sort_by_relevance_url}">Relvance</a>
       | <span class="sort_by_selected"><xsl:text>Date</xsl:text></span>
    </xsl:otherwise>
  </xsl:choose>
  </span>
  </div>
</div>
</xsl:template>

<!-- **********************************************************************
 S.MIRZA CUSTOM Sort-by criteria: sort by date/relevance MOBILE
     ********************************************************************** -->
<xsl:template name="sort_by_mobile">
  <xsl:variable name="sort_by_url"><xsl:for-each
    select="/GSP/PARAM[(@name != 'sort') and
                       (@name != $embedded_mode_root_path_param) and
                       (@name != $embedded_mode_resource_root_path_param) and
                       (@name != $embedded_mode_disable_style) and
                       (@name != 'start') and
                       (@name != 'epoch' or $is_test_search != '') and
                       not(starts-with(@name, 'metabased_'))]">
      <xsl:choose>
        <xsl:when test="@name = 'only_apps' and $show_apps_segmented_ui = '1'">
          <xsl:value-of select="'exclude_apps=1'" />
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="@name"/><xsl:text>=</xsl:text>
          <xsl:value-of select="@original_value"/>
        </xsl:otherwise>
      </xsl:choose>
      <xsl:if test="position() != last()">
        <xsl:text disable-output-escaping="yes">&amp;</xsl:text>
      </xsl:if>
    </xsl:for-each>
  </xsl:variable>

  <xsl:variable name="sort_by_relevance_url">
    <xsl:value-of select="$sort_by_url"
      />&amp;sort=date%3AD%3AL%3Ad1</xsl:variable>

  <xsl:variable name="sort_by_date_url">
    <xsl:value-of select="$sort_by_url"
      />&amp;sort=date%3AD%3AS%3Ad1</xsl:variable>

  <!-- S.MIRZA REMOVING THE SORT BY TABLE -->
<div id="sort_by_holder_mobile">
<div class="sort_by_links_mobile">
  <xsl:choose>
    <xsl:when test="/GSP/PARAM[@name = 'sort' and starts-with(@value,'date:D:L')]">
      <span class="sort_by_mobile_link sort_by_selected_mobile"><xsl:text>Relevance</xsl:text></span>
      <a ctype="sort" class="sort_by_mobile_link sort_link_mobile"
          href="{$gsa_search_root_path_prefix}?{$sort_by_date_url}">Date</a>
    </xsl:when>
    <xsl:when test="/GSP/PARAM[@name = 'sort' and starts-with(@value,'date:A:L')]">
      <font color="{$global_text_color}">
      <span class="sort_by_mobile_link sort_by_selected_mobile"><xsl:text>Relevance</xsl:text></span>
      </font>
      <a ctype="sort" class="sort_by_mobile_link sort_link_mobile"
          href="{$gsa_search_root_path_prefix}?{$sort_by_date_url}">Date</a>
    </xsl:when>
    <xsl:otherwise>
      <a ctype="sort" class="sort_by_mobile_link sort_link_mobile"
          href="{$gsa_search_root_path_prefix}?{$sort_by_relevance_url}">Relvance</a>
      <font color="{$global_text_color}">
<span class="sort_by_mobile_link sort_by_selected_mobile"><xsl:text>Date</xsl:text></span>
      </font>
    </xsl:otherwise>
  </xsl:choose>
  </div>
</div>
</xsl:template>

<xsl:template name="cluster_results">
  <div id='clustering'>
    <h3>Narrow your search by...</h3>

<span style="position: absolute; right: 10px; top: 10px;"><img src="https://s3-eu-west-1.amazonaws.com/gsa-cdn/globalblue/images/drc_arrow.png" width="8" height="7" alt="Expand" /></span>

    <span id='cluster_status' class="hide_info">
      <span id='cluster_message' style="display:none">loading...</span>
      <noscript>
        javascript must be enabled for narrowing.
      </noscript>
    </span>

    <xsl:choose>
      <xsl:when test="$res_cluster_position = 'top'">
        <div id="cluster_holder" class="hide_info">
            <div id='cluster_label0' class='cluster_link'></div>
            <div id='cluster_label2' class='cluster_link'></div>
            <div id='cluster_label4' class='cluster_link'></div>
            <div id='cluster_label6' class='cluster_link'></div>
            <div id='cluster_label8' class='cluster_link'></div>

            <div id='cluster_label1' class='cluster_link'></div>
            <div id='cluster_label3' class='cluster_link'></div>
            <div id='cluster_label5' class='cluster_link'></div>
            <div id='cluster_label7' class='cluster_link'></div>
            <div id='cluster_label9' class='cluster_link'></div>
        </div><!--cluster_holder-->
<div class="clear"></div>
      </xsl:when>
      <xsl:when test="$res_cluster_position = 'right'">
        <ul>
          <li id='cluster_label0'></li>
          <li id='cluster_label1'></li>
          <li id='cluster_label2'></li>
          <li id='cluster_label3'></li>
          <li id='cluster_label4'></li>
          <li id='cluster_label5'></li>
          <li id='cluster_label6'></li>
          <li id='cluster_label7'></li>
          <li id='cluster_label8'></li>
          <li id='cluster_label9'></li>
        </ul>
      </xsl:when>
    </xsl:choose>
  </div>
</xsl:template>

<!-- Generates search results navigation bar to be placed at the top. -->
<xsl:template name="gen_top_navigation">
  <xsl:if test="RES">
    <div style="margin-right:5px;">
        <xsl:if test="$show_top_navigation != '0'">
          <div>
            <xsl:call-template name="google_navigation">
              <xsl:with-param name="prev" select="RES/NB/PU"/>
              <xsl:with-param name="next" select="RES/NB/NU"/>
              <xsl:with-param name="view_begin" select="RES/@SN"/>
              <xsl:with-param name="view_end" select="RES/@EN"/>
              <xsl:with-param name="guess" select="RES/M"/>
              <xsl:with-param name="navigation_style" select="'top'"/>
            </xsl:call-template>
          </div>
        </xsl:if>
        <xsl:if test="$show_sort_by != '0'">
          <div>
            <xsl:call-template name="sort_by"/>
          </div>
        </xsl:if>
    </div>
  </xsl:if>
</xsl:template>

<!-- Generates search results navigation bar to be placed at the bottom. -->
<xsl:template name="gen_bottom_navigation">
  <xsl:if test="RES">
    <xsl:variable name="nav_style">
      <xsl:choose>
        <xsl:when test="($access='s') or ($access='a')"><xsl:value-of select="$secure_bottom_navigation_type"/></xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$choose_bottom_navigation"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>

    <xsl:call-template name="google_navigation">
      <xsl:with-param name="prev" select="RES/NB/PU"/>
      <xsl:with-param name="next" select="RES/NB/NU"/>
      <xsl:with-param name="view_begin" select="RES/@SN"/>
      <xsl:with-param name="view_end" select="RES/@EN"/>
      <xsl:with-param name="guess" select="RES/M"/>
      <xsl:with-param name="navigation_style" select="$nav_style"/>
    </xsl:call-template>
  </xsl:if>
</xsl:template>

<xsl:template name="render_filter_tabs">

<!-- S.MIRZA clear query to show all -->
<xsl:variable name="tab_all">
<xsl:if test="PARAM[(@name='requiredfields') and (@value='')]"><xsl:value-of select="/GSP/PARAM[@name='requiredfields']"/></xsl:if>
</xsl:variable>

<xsl:variable name="tab_images">
<xsl:value-of select="/GSP/PARAM[@name='requiredfields']"/>MainContentType:Image</xsl:variable>

<xsl:variable name="tab_videos">
<xsl:value-of select="/GSP/PARAM[@name='requiredfields']"/>MainContentType:Video</xsl:variable>

<!-- S.MIRZA get the current base URL -->
<xsl:variable name="current_url">
<xsl:value-of select="$gsa_search_root_path_prefix"/>?<xsl:value-of select="$search_url"
  />
</xsl:variable>

<xsl:variable name="requiredfields_filter_val">
<xsl:value-of select="/GSP/PARAM[@name='requiredfields']/@value"/>
</xsl:variable>

<!-- S.MIRZA when the current URL contains Image or Video replace it with empty string -->
<xsl:variable name="requiredfields_filter_val_remove_maincontenttype">
<xsl:choose>
<xsl:when test="contains($current_url, 'Image')">
<xsl:value-of select="replace( $current_url, 'MainContentType:Image.', '')" />
</xsl:when>

<xsl:when test="contains($current_url, 'Video')">
<xsl:value-of select="replace( $current_url, 'MainContentType:Video.', '')" />
</xsl:when>
</xsl:choose>
</xsl:variable>

<!-- S.MIRZA if requiredfields is Video replace Video with Image -->
<xsl:variable name="tab_images_translate">
<xsl:value-of select="replace($current_url,'Video','Image')"/>
</xsl:variable>

<!-- S.MIRZA if requiredfields is Image replace Image with Video -->
<xsl:variable name="tab_videos_translate">
<xsl:value-of select="replace($current_url,'Image','Video')"/>
</xsl:variable>

<!-- S.MIRZA value of site param -->
<xsl:variable name="site_val">
<xsl:value-of select="/GSP/PARAM[@name='site']/@value"/>
</xsl:variable>

<!-- S.MIRZA user defined site -->
<xsl:variable name="user_site_val">football_stadium_locator</xsl:variable>

<xsl:variable name="tab_site_translate">
<xsl:value-of select="replace($current_url,$site_val,$user_site_val)"/>
</xsl:variable>

<xsl:variable name="tab_site_original_translate">
<xsl:value-of select="replace($current_url,$site_val,'football_stadium_feed')"/>
</xsl:variable>


<!-- S.MIRZA GRAB THE CURRENT URL WITHOUT THE REQUIREDFIELDS PARAM -->
<xsl:variable name="url_without_requiredfields">
<xsl:value-of select="$gsa_search_root_path_prefix"/>?<xsl:value-of select="$no_requiredfields_search_url" />
</xsl:variable>

<!-- S.MIRZA REPLACE THE STORE LOCATOR SITE PARAM WITH THE DEFAULT SITE PARAM ON THE URL THAT DOES NOT HAVE A REQUIREDFIELDS PARAM -->
<xsl:variable name="remove_filter_results_tabs">
<xsl:value-of select="replace($url_without_requiredfields,$site_val,'football_stadium_feed')" />
</xsl:variable>

<xsl:variable name="author_id">
<xsl:value-of select="tokenize($requiredfields_filter_val,':')[3]" />
</xsl:variable>

<!-- S.MIRZA Pass author value when both maincontenttype and author exist -->
<xsl:variable name="requiredfields_add_author">&amp;requiredfields=author-id:<xsl:value-of select="$author_id" /></xsl:variable>



<div id="filter_tabs">
<span style="font-weight:bold;">Filter Results:</span>
<xsl:choose>

<!-- S.MIRZA when there is a requiredfields param -->
<xsl:when test="/GSP/PARAM[@name='requiredfields']">

<xsl:choose>

<!-- S.MIRZA MAKE ALL DROP REQUIREDFIELDS FROM URL AND MAKE SITE PARAM DEFAULT -->
<xsl:when test="contains($requiredfields_filter_val, 'MainContentType')  and /GSP/PARAM[(@name='site')]/@value='football_stadium_locator'">
<a class="filter_all" href="{$remove_filter_results_tabs}">All</a>
</xsl:when>

<xsl:when test="/GSP/PARAM[@name='requiredfields']/@value='MainContentType:Image'">
<a class="filter_all" href="{$gsa_search_root_path_prefix}?{$no_requiredfields_search_url}">All</a>
</xsl:when>

<xsl:when test="/GSP/PARAM[@name='requiredfields']/@value='MainContentType:Video'">
<a class="filter_all" href="{$gsa_search_root_path_prefix}?{$no_requiredfields_search_url}">All</a>
</xsl:when>

<xsl:when test="not(contains($requiredfields_filter_val, 'MainContentType'))">
<a class="filter_all filter_selected" href="{$requiredfields_filter_val_remove_maincontenttype}">All</a>
</xsl:when>

<xsl:otherwise>
<a class="filter_all" href="{$requiredfields_filter_val_remove_maincontenttype}">All</a>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="contains($requiredfields_filter_val, 'MainContentType:Image')">
<a class="filter_images filter_selected">Galleries</a>
</xsl:when>

<xsl:when test="contains($requiredfields_filter_val, 'MainContentType:Video')">
<a class="filter_images" href="{$tab_images_translate}">Galleries</a>
</xsl:when>

<xsl:otherwise>
<a class="filter_images" href="{$gsa_search_root_path_prefix}?{$no_requiredfields_search_url}&amp;requiredfields={$tab_images}.{$requiredfields_filter_val}">Galleries</a>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="contains($requiredfields_filter_val, 'MainContentType:Video')">
<a class="filter_videos filter_selected">Videos</a>
</xsl:when>

<xsl:when test="contains($requiredfields_filter_val, 'MainContentType:Image')">
<a class="filter_videos" href="{$tab_videos_translate}">Videos</a>
</xsl:when>

<xsl:otherwise>
<a class="filter_videos" href="{$gsa_search_root_path_prefix}?{$no_requiredfields_search_url}&amp;requiredfields={$tab_videos}.{$requiredfields_filter_val}">Videos</a>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="/GSP/PARAM[(@name='site') and (@value='football_stadium_locator')]">
<a class="filter_store filter_selected">Stadium Locator</a>
</xsl:when>

<xsl:otherwise>
<a class="filter_store" href="{$tab_site_translate}">Stadium Locator</a>
</xsl:otherwise>
</xsl:choose>

</xsl:when>

<!-- S.MIRZA when there isnt a requiredfields param -->
<xsl:otherwise>
<xsl:choose>
<xsl:when test="(/GSP/PARAM[@name!='requiredfields']) and /GSP/PARAM[@name='site']/@value='football_stadium_feed'">
<a class="filter_all filter_selected">All</a>
</xsl:when>

<!-- S.MIRZA ALL WITH NO REQUIREDFIELDS BUT HAS STORE LOCATOR THIS WILL GIVE SITE DEFAULT VAL -->
<xsl:when test="/GSP/PARAM[(@name='site')]/@value='football_stadium_locator'">
<a class="filter_all" href="{$tab_site_original_translate}">All</a>
</xsl:when>
</xsl:choose>

<a class="filter_images" href="{$gsa_search_root_path_prefix}?{$search_url}&amp;requiredfields={$tab_images}">Galleries</a>

<a class="filter_videos" href="{$gsa_search_root_path_prefix}?{$search_url}&amp;requiredfields={$tab_videos}">Videos</a>

<xsl:choose>
<xsl:when test="/GSP/PARAM[(@name='site') and (@value='football_stadium_locator')]">
<a class="filter_store filter_selected">Stadium Locator</a>
</xsl:when>

<xsl:otherwise>
<a class="filter_store" href="{$tab_site_translate}">Stadium Locator</a>
</xsl:otherwise>
</xsl:choose>

</xsl:otherwise>
</xsl:choose>

</div>

<!-- S.MIRZA ADD SORT BY BESIDE FILTER TABS -->
<xsl:call-template name="sort_by" />

</xsl:template>


<!-- **********************************************************************
 S.MIRZA Social Sharing
     ********************************************************************** -->
<xsl:template name="social_sharing">
<xsl:variable name="full_url" 	select="U"/>
<xsl:variable name="pinterest_title" select="T" />

<span class="social_sharing_holder">
<a href="//www.pinterest.com/pin/create/button/?url={$full_url}&amp;media=image&amp;description={$pinterest_title}" data-pin-do="buttonPin" data-pin-shape="round"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_16.png" /></a>

<a class="facebook_sl"></a>
	
<a class="twitter_sl" title="{$full_url}" name="{T}"></a>

<a class="google_sl" title="{$full_url}" name="{T}"></a>

<xsl:call-template name="gmap_icon" />

</span><!--social_sharing_holder-->

</xsl:template>

<!-- **********************************************************************
 S.MIRZA Map Search     ********************************************************************** -->
<xsl:template name="map_search_canvas">

<div id="map_search_canvas"></div>

<!-- S.MIRZA MAP FOR SEARCH -->
<script>
setTimeout(function() {
(function () {

if ( !! navigator.geolocation) {
     var map;
        var mapOptions = {
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    map = new google.maps.Map(document.getElementById('map_search_canvas'), mapOptions);
    
    navigator.geolocation.getCurrentPosition(function (position) {
        var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        
  map.setCenter(geolocate);

  var marker = new google.maps.Marker({
      position: geolocate,
      icon: 'http://www.globalblue.com/skins/global-blue/images/map-marker-global_refund_store.png',
      map: map
  });
        
    }); //navigator.geolocation
    
    /* DRAWING TOOLS */

var drawingManager = new google.maps.drawing.DrawingManager({
  //drawingMode: google.maps.drawing.OverlayType.MARKER,
  drawingControl: true,
  drawingControlOptions: {
    position: google.maps.ControlPosition.TOP_CENTER,
    drawingModes: [
      google.maps.drawing.OverlayType.RECTANGLE
    ]
  },
  circleOptions: {
    fillColor: '#ffff00',
    fillOpacity: 1,
    strokeWeight: 5,
    clickable: false,
    zIndex: 1,
    editable: true
  },

  rectangleOptions: {
    editable: true,
    draggable: true
  }
});
drawingManager.setMap(map);

/* END OF DRAWING TOOLS */

google.maps.event.addDomListener(drawingManager, 'rectanglecomplete', function(rectangle) {
  var ne = rectangle.getBounds().getNorthEast();
  var sw = rectangle.getBounds().getSouthWest();
  var nelat = ne.lat() + 90;
  var nelong = ne.lng() + 180;
  var swlat = sw.lat() + 90;
  var swlong = sw.lng() + 180;

var as_q_lat = swlat+'..'+nelat;

var as_q_long = swlong+'..'+nelong;

var as_q_latlong = 'inmeta:latitude_custom:'+as_q_lat+' AND inmeta:longitude_custom:'+as_q_long;
    
    <xsl:variable name="current_url">
<xsl:value-of select="$gsa_search_root_path_prefix"/>?<xsl:value-of select="$no_as_q_search_url" />
</xsl:variable>

var r=confirm("Update search results");
if (r==true)
  {
  var url = '<xsl:value-of select="$current_url" />&amp;as_q='+as_q_latlong;
  window.location = url;
  }
else
  {
  rectangle.setMap(null);
  }

});
                                 
    
}

else {
 document.getElementById('map_search_canvas').innerHTML = 'No Geolocation Support.';
}

})();
}, 500);
</script>
<!-- END OF MAP FOR SEARCH -->

</xsl:template>

<!-- **********************************************************************
 S.MIRZA GMap Icon
     ********************************************************************** -->
<xsl:template name="gmap_icon">

<xsl:variable name="directionsLat">
<xsl:value-of select="MT[@N='latitude']/@V"/>
</xsl:variable>

<xsl:variable name="directionsLong">
<xsl:value-of select="MT[@N='longitude']/@V"/>
</xsl:variable>

<xsl:variable name="alt_shop_name">
<xsl:value-of select="encode-for-uri(MT[@N='name']/@V)" />
</xsl:variable>

<xsl:if test="MT[@N='latitude']/@V and $show_gmap_icon_canvas = '1'">
<a name="{$directionsLat}, {$directionsLong}, {$alt_shop_name}" title="View Map" class="gmap_icon_holder gmap_button"></a>
</xsl:if>

</xsl:template>

<!-- **********************************************************************
 S.MIRZA Get Directions
     ********************************************************************** -->
<xsl:template name="get_directions">

<xsl:variable name="directionsLat">
<xsl:value-of select="MT[@N='latitude']/@V"/>
</xsl:variable>

<xsl:variable name="directionsLong">
<xsl:value-of select="MT[@N='longitude']/@V"/>
</xsl:variable>
<a name="({$directionsLat}, {$directionsLong})" class="get_directions_button">Get Directions</a>
</xsl:template>

<!-- **********************************************************************
 S.MIRZA Results page and results and duration took
     ********************************************************************** -->
<xsl:template name="top_results_time_bar">
  <xsl:param name="text"/>
  <xsl:param name="show_info"/>
  <xsl:param name="time"/>

    <div id="results_time">
            
<xsl:if test="count(/GSP/RES/R)>0 ">
              <xsl:choose>
                <xsl:when test="(($access = 's' or $access = 'a') and /GSP/RES/M = '')">
<span style="float:left; padding:10px;">
Results <b><xsl:value-of select="RES/@SN"/></b> - <b><xsl:value-of select="RES/@EN"/></b> for <b><xsl:value-of select="$space_normalized_query"/></b>.
</span>

<span style="float:right; padding:10px;">
(<span id="search_time"><xsl:value-of select="round(/GSP/TM * 100.0) div 100.0"/></span> seconds)
</span>
                </xsl:when>

<xsl:otherwise>
<!--Results <b><xsl:value-of select="RES/@SN"/></b> - <b><xsl:value-of select="RES/@EN"/></b> of about <b><xsl:value-of select="RES/M"/></b>.-->

<xsl:call-template name="custom_current_page" /> 

<span class="total_results_time_took">

<xsl:value-of select="RES/M" /> results         
(<span id="search_time"><xsl:value-of select="round(/GSP/TM * 100.0) div 100.0"/></span> seconds)

</span>
</xsl:otherwise>
              </xsl:choose>
            </xsl:if>

<!--<xsl:if test="/GSP/RES/R !='0'">
<xsl:call-template name="custom_current_page" /> 

<span class="total_results_time_took">

<xsl:value-of select="RES/M" /> results         
(<span id="search_time"><xsl:value-of select="round(/GSP/TM * 100.0) div 100.0"/></span> seconds)

</span>
</xsl:if>-->

</div><!--search_info_bar-->

<!--<xsl:call-template name="search_box" />-->

</xsl:template>

<!-- **********************************************************************
S.MIRZA DAY WEEK MONTH YEAR
*********************************************************************** -->
<xsl:template name="day_week_month_year_filter">

    <xsl:variable name="tab_images">
      <xsl:value-of select="/GSP/PARAM[@name='as_q']"/>inmeta:MainContentType=Gallery</xsl:variable>

    <xsl:variable name="tab_videos">
      <xsl:value-of select="/GSP/PARAM[@name='as_q']"/>inmeta:MainContentType=Video</xsl:variable>

    <xsl:variable name="as_q_val_filter">
      <xsl:value-of select="/GSP/PARAM[@name='as_q']/@value"/>
    </xsl:variable>

    <xsl:variable name="daterange_ddm">
      <xsl:value-of select="/GSP/PARAM[@name='daterange_ddm']/@value"/>
    </xsl:variable>

    <ul id="filter_day_week_month_year" class="dn-attr">

      <li class="dn-attr-hdr">
        <span class="dn-attr-hdr-txt">From:</span>
      </li>

      <li class="daterange_ddm_li" value="1d">
        <xsl:choose>
          <xsl:when test="/GSP/PARAM[(@name='as_q') and (@value=$tab_images)]">
            <a class="dn-attr-v" id="past_day" href="+{$tab_images}">Past 24 hours</a>
          </xsl:when>

          <xsl:when test="/GSP/PARAM[(@name='as_q') and (@value=$tab_videos)]">
            <a class="dn-attr-v" id="past_day" href="+{$tab_videos}">Past 24 hours</a>
          </xsl:when>

          <xsl:when test="/GSP/PARAM[(@name='daterange_ddm') and (@value='1d')]">
            <a class="dn-img dn-r-img" href="{$gsa_search_root_path_prefix}?{$no_as_q_search_url}">X</a>
            <span class="dn-overflow dn-inline-block">Past 24 hours</span>
          </xsl:when>

          <xsl:otherwise>
            <a class="dn-attr-v" id="past_day" href="">Past 24 hours</a>
          </xsl:otherwise>
        </xsl:choose>
      </li>

      <li class="daterange_ddm_li" value="7d">
        <xsl:choose>
          <xsl:when test="/GSP/PARAM[(@name='as_q') and (@value=$tab_images)]">
            <a class="dn-attr-v" id="past_week" href="+{$tab_images}">Past week</a>
          </xsl:when>

          <xsl:when test="/GSP/PARAM[(@name='as_q') and (@value=$tab_videos)]">
            <a class="dn-attr-v" id="past_week" href="+{$tab_videos}">Past week</a>
          </xsl:when>

          <xsl:when test="/GSP/PARAM[(@name='daterange_ddm') and (@value='7d')]">
            <a class="dn-img dn-r-img" href="{$gsa_search_root_path_prefix}?{$no_as_q_search_url}">X</a>
            <span class="dn-overflow dn-inline-block">Past week</span>
          </xsl:when>

          <xsl:otherwise>
            <a class="dn-attr-v" id="past_week" href="">Past week</a>
          </xsl:otherwise>
        </xsl:choose>
      </li>

      <li class="daterange_ddm_li" value="28d">
        <xsl:choose>
          <xsl:when test="/GSP/PARAM[(@name='as_q') and (@value=$tab_images)]">
            <a class="dn-attr-v" id="past_month" href="+{$tab_images}">Past month</a>
          </xsl:when>

          <xsl:when test="/GSP/PARAM[(@name='as_q') and (@value=$tab_videos)]">
            <a class="dn-attr-v" id="past_month" href="+{$tab_videos}">Past month</a>
          </xsl:when>

          <xsl:when test="/GSP/PARAM[(@name='daterange_ddm') and (@value='28d')]">
            <a class="dn-img dn-r-img" href="{$gsa_search_root_path_prefix}?{$no_as_q_search_url}">X</a>
            <span class="dn-overflow dn-inline-block">Past month</span>
          </xsl:when>

          <xsl:otherwise>
            <a class="dn-attr-v" id="past_month" href="">Past month</a>
          </xsl:otherwise>
        </xsl:choose>
      </li>

      <li class="daterange_ddm_li" value="365d">
        <xsl:choose>
          <xsl:when test="/GSP/PARAM[(@name='as_q') and (@value=$tab_images)]">
            <a class="dn-attr-v" id="past_year" href="+{$tab_images}">Past year</a>
          </xsl:when>

          <xsl:when test="/GSP/PARAM[(@name='as_q') and (@value=$tab_videos)]">
            <a class="dn-attr-v" id="past_year" href="+{$tab_videos}">Past year</a>
          </xsl:when>

          <xsl:when test="/GSP/PARAM[(@name='daterange_ddm') and (@value='365d')]">
            <a class="dn-img dn-r-img" href="{$gsa_search_root_path_prefix}?{$no_as_q_search_url}">X</a>
            <span class="dn-overflow dn-inline-block">Past year</span>
          </xsl:when>

          <xsl:otherwise>
            <a class="dn-attr-v" id="past_year" href="">Past year</a>
          </xsl:otherwise>
        </xsl:choose>
      </li>

    </ul>

    <script>
      $(window).load(function() {

      var searchParams = '<xsl:value-of select="$gsa_search_root_path_prefix"/>?<xsl:value-of select="$no_as_q_search_url"/>'

      var daterange_ddm = '<xsl:value-of select="$daterange_ddm"/>'

      var as_q_val_filter = '<xsl:value-of select="$as_q_val_filter"/>'

      /* if the as_q param is not empty then hide the relevant day filters */
      if (as_q_val_filter.length !== 0) {
      $('li.daterange_ddm_li').each(function(){
      liValue = $(this).attr('value');
      liValue = liValue+'d';
      if ( liValue != daterange_ddm ){
      $('li.dn-attr-hdr').show();
      $(this).hide();
      }
      });
      }//if

      var d = new Date();
      var currentYear = d.getFullYear();
      var currentMonth = d.getMonth()+1;
      var currentDay = d.getDate();

      var lastYear = d.getFullYear()-1;
      var lastMonth = new Date(d - 4 * 7 * 24 * 60 * 60 * 1000);
      var lastWeek = new Date(d - 7 * 24 * 60 * 60 * 1000);
      var lastDay = new Date(d - 24 * 60 * 60 * 1000);

      lDayYear = lastDay.getFullYear();
      lDayMonth = lastDay.getMonth()+1;
      lDayDay = lastDay.getDate();

      lWeekYear = lastWeek.getFullYear();
      lWeekMonth = lastWeek.getMonth()+1;
      lWeekDay = lastWeek.getDate();

      lMonthYear = lastMonth.getFullYear();
      lMonthMonth = lastMonth.getMonth()+1;
      lMonthDay = lastMonth.getDate();

      var filter_by_last_day = searchParams+'&amp;daterange_ddm=1d&amp;as_q=daterange:'+lDayYear+'-'+lDayMonth+'-'+lDayDay+'..';

      var filter_by_last_week = searchParams+'&amp;daterange_ddm=7d&amp;as_q=daterange:'+lWeekYear+'-'+lWeekMonth+'-'+lWeekDay+'..';

      var filter_by_last_month = searchParams+'&amp;daterange_ddm=28d&amp;as_q=daterange:'+lMonthYear+'-'+lMonthMonth+'-'+lMonthDay+'..';

      var filter_by_last_year = searchParams+'&amp;daterange_ddm=365d&amp;as_q=daterange:'+lastYear+'-'+currentMonth+'-'+currentDay+'..';

      var currentHref = $('a#past_day').attr('href');

      var dayWithMediaType = filter_by_last_day + currentHref;
      var weekWithMediaType = filter_by_last_week + currentHref;
      var monthWithMediaType = filter_by_last_month + currentHref;
      var yearWithMediaType = filter_by_last_year + currentHref;

      if ( currentHref == undefined ||  currentHref == '' ) {
      $('a#past_day').attr('href', filter_by_last_day);
      $('a#past_week').attr('href', filter_by_last_week);
      $('a#past_month').attr('href', filter_by_last_month);
      $('a#past_year').attr('href', filter_by_last_year);
      }

      else {
      $('a#past_day').attr('href', dayWithMediaType);
      $('a#past_week').attr('href', weekWithMediaType);
      $('a#past_month').attr('href', monthWithMediaType);
      $('a#past_year').attr('href', yearWithMediaType);
      }

      });

    </script>

  </xsl:template>

<!-- **********************************************************************
 Output all results
     ********************************************************************** -->
<xsl:template name="results">
  <xsl:param name="query"/>
  <xsl:param name="time"/>

  <xsl:choose>
    <xsl:when test="$render_dynamic_navigation = '1'">
      <!-- S.MIRZA HID THE DN xsl:call-template name="dynamic_navigation_results">
        <xsl:with-param name="query" select="$query"/>
      </xsl:call-template>-->
    </xsl:when>
    <xsl:otherwise>
      <!-- *** Add top navigation/sort-by bar *** -->
      <xsl:if test="$show_top_navigation != '0' or $show_sort_by != '0'">
        <!-- there might be onebox results but no RES  -->
        <xsl:if test="RES or $show_sidebar = '1'">
          <div id="top-navigation">
            <!--S.MIRZA HID THIS <xsl:call-template name="gen_top_navigation" />-->
          </div>
        </xsl:if>
      </xsl:if>

      <!-- *** Handle OneBox results, if any ***-->
      <xsl:if test="$show_onebox != '0' and count(/GSP/ENTOBRESULTS) &gt; 0">
        <xsl:call-template name="onebox"/>

      <script>
      <xsl:comment>
        if (window['populateUarMessages']) {
          populateUarMessages();
        }
      //</xsl:comment>
      </script>
      </xsl:if>

      <!-- *** handle spelling suggestions, if any *** -->
      <xsl:if test="$show_spelling != '0'">
        <xsl:call-template name="spelling"/>
      </xsl:if>

      <!-- *** handle synonyms, if any *** -->
      <xsl:if test="$show_synonyms != '0'">
        <xsl:call-template name="synonyms"/>
      </xsl:if>

      <!-- *** output google desktop results (if enabled and any available) *** -->
      <xsl:if test="$egds_show_desktop_results != '0'">
          <xsl:call-template name="desktop_results"/>
      </xsl:if>

      <!-- *** output results details ***
      <xsl:if test="$show_res_clusters = '1'">
        <xsl:call-template name="cluster_results"/>
      </xsl:if> -->

      <!-- main results -->
      <xsl:call-template name="main_results">
        <xsl:with-param name="query" select="$query"/>
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>

<script>
/* S.MIRZA START OF setDateRangeFromParameter */
$(window).load(function() {
function setDateRangeFromParameter() {

	if ($('#date_range_filter').val().length > 1 ) { 
	val = $('#date_range_filter').val();
	
	splitVal = val.split(':');
	
	splitFirstD = splitVal[1];
	
	splitFirstD = splitFirstD.split('-');
	
	fromSplitYear = splitFirstD[0];
	
	fromSplitMonth = splitFirstD[1];
	
	splitSecondD = splitVal[2];
	
	splitSecondD = splitVal[1];
	
	splitSecondD = splitSecondD.split('..');
	
	splitSecondD = splitSecondD[1];
	
	splitSecondD = splitSecondD.split('-');
	
	toSplitYear = splitSecondD[0];
	toSplitMonth = splitSecondD[1];
	
	if ($('#from_month').val() != fromSplitMonth) {
	$('#from_month').val( fromSplitMonth );
	}
	
	if ($('#from_year').val() != fromSplitYear) {
	$('#from_year').val( fromSplitYear );
	}
	
	if ($('#to_month').val() != toSplitMonth) {
	$('#to_month').val( toSplitMonth );
	}
	
	if ($('#to_year').val() != toSplitYear) {
	$('#to_year').val( toSplitYear );
	}
	

	}

}

setDateRangeFromParameter();

});

/* END OF setDateRangeFromParameter */
</script>

</xsl:template>

<xsl:template name="dynamic_navigation_results">
  <xsl:param name="query"/>

  <!-- show sort-by -->
  <xsl:if test="$show_sort_by != '0' or $show_spelling != '0' or $show_synonyms != '0'">
    <xsl:if test="RES"> <!-- there might be onebox results but no RES  -->
      <div>
      <xsl:if test="$show_spelling != '0' or $show_synonyms != '0'">
            <xsl:choose>
              <!-- *** handle spelling suggestions, if any *** -->
              <xsl:when test="$show_spelling != '0'">
                <xsl:call-template name="spelling"/>
              </xsl:when>
              <!-- *** handle synonyms, if any *** -->
              <xsl:otherwise>
                <xsl:call-template name="synonyms"/>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:if>
      </div>
    </xsl:if>
  </xsl:if>

  <xsl:if test="$show_spelling != '0' and $show_synonyms != '0'">
    <xsl:call-template name="synonyms"/>
  </xsl:if>

  <xsl:variable name="dn_tokens"
    select="tokenize(/GSP/PARAM[@name='dnavs']/@original_value, '\+')"/>

      <xsl:call-template name="main_results">
        <xsl:with-param name="query" select="$query"/>
        <xsl:with-param name="dn_tokens" select="$dn_tokens"/>
      </xsl:call-template>

   <div id="dyn_nav">
     <!--<div class="dn-hdr">
        <span style="padding-left: 6px;">
          <b>Navigate</b>
        </span>
      </div>-->
<span class="dyn_nav_header">Filter results</span>

<!-- *** S.MIRZA ADDED THE DAY WEEK MONTH YEAR FILTER *** -->
<xsl:call-template name="day_week_month_year_filter" /> 

      <!-- Expert Search - display go back to main results link if expert
           search expanded mode is configured for this frontend. -->
      <xsl:if test="$show_expert_search_expanded_results = '1'">
        <div class="dn-exp">
          <xsl:call-template name="back_to_widget_view_frontend_link">
            <xsl:with-param name="src_prefix"
                select="concat($gsa_search_root_path_prefix, '?')" />
            <xsl:with-param name="msg_back_to_main_results_action"
                select="$msg_back_to_main_results_action" />
          </xsl:call-template>
        </div>
      </xsl:if>

<div class="mobile_dyn_nav">

      <div id="dyn_nav_col" style="height: auto;">
        <xsl:apply-templates select="/GSP/RES/PARM/PMT">
          <xsl:with-param name="dn_tokens" select="$dn_tokens"/>
          <xsl:with-param name="partial_count" select="/GSP/RES/PARM/PC"/>
        </xsl:apply-templates>

        <script type="text/javascript">
          <xsl:for-each select="$dn_tokens">
            dynNavMgr.addSelectedAttr("<xsl:value-of select='.'/>");
          </xsl:for-each>

          <xsl:apply-templates select="/GSP/RES/PARM/PMT" mode="hidden"/>
        </script>
      </div>
</div><!--mobile_dyn_nav-->
    </div>
</xsl:template>

<xsl:template name="escapeQuot">
  <xsl:param name="text"/>
  <xsl:choose>
    <xsl:when test="contains($text, '&quot;')">
      <xsl:variable name="bufferBefore" select="substring-before($text, '&quot;')"/>
      <xsl:variable name="newBuffer" select="substring-after($text, '&quot;')"/>
      <xsl:value-of select="$bufferBefore"/><xsl:text>\"</xsl:text>
      <xsl:call-template name="escapeQuot">
        <xsl:with-param name="text" select="$newBuffer"/>
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$text"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

<xsl:template name="escapeBackslash">
  <xsl:param name="text"/>
  <xsl:choose>
    <xsl:when test="contains($text, '\')">
      <xsl:variable name="bufferBefore" select="substring-before($text, '\')"/>
      <xsl:variable name="newBuffer" select="substring-after($text, '\')"/>
      <xsl:value-of select="$bufferBefore"/><xsl:text>\\</xsl:text>
      <xsl:call-template name="escapeBackslash">
        <xsl:with-param name="text" select="$newBuffer"/>
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$text"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

<xsl:template name="escapeJsChars">
  <xsl:param name="text" />
  <xsl:variable name="esc1">
    <xsl:call-template name="escapeBackslash">
      <xsl:with-param name="text" select="$text" />
    </xsl:call-template>
  </xsl:variable>
  <xsl:variable name="esc2">
    <xsl:call-template name="escapeQuot">
      <xsl:with-param name="text">
        <xsl:value-of select="$esc1" />
      </xsl:with-param>
    </xsl:call-template>
  </xsl:variable>
  <xsl:value-of select="$esc2" />
</xsl:template>

<!-- This template is specifically needed to hide the lag in rendering for the
     dynamic navigation attributes with large set of values. Since only the top
     few values need to be displayed, the rest are added to the dynNavMgr JS
     instance for rendering later on demand ('More' click).
-->
<xsl:template match="PMT" mode="hidden">
  <xsl:if test="@IR != 1">
    <xsl:variable name="values">
      [<xsl:for-each select="PV[position() &gt; $dyn_nav_max_rows and @C != '0']">["<xsl:call-template
          name='escapeJsChars'><xsl:with-param name="text" select="@V"/>
          </xsl:call-template>", <xsl:value-of select='@C'/>]<xsl:if
          test="position() != last()">,</xsl:if></xsl:for-each>]
    </xsl:variable>
    <xsl:variable name="attr_id"><xsl:value-of
        select="concat('attr_', string(position()))"/></xsl:variable>

    dynNavMgr.addAttrValues("<xsl:value-of select='$attr_id'/>", <xsl:value-of select='$values'/>);
  </xsl:if>
</xsl:template>

<xsl:template match="PMT">
  <xsl:param name="dn_tokens"/>
  <xsl:param name="partial_count"/>

  <xsl:variable name="name"><xsl:value-of select="normalize-space(@NM)"/></xsl:variable>
  <xsl:variable name="pmt_name"><xsl:call-template
      name="term-escape"><xsl:with-param name="val" select="@NM"/></xsl:call-template>
  </xsl:variable>

  <xsl:choose>
    <xsl:when test="@IR = 1">
      <ul class="dn-attr">
        <li class="dn-attr-hdr"><span class="dn-attr-hdr-txt"><xsl:attribute
            name="title"><xsl:value-of select="@DN" disable-output-escaping="yes"/>
        </xsl:attribute><xsl:value-of select="@DN"/></span></li>
        <xsl:apply-templates select="PV">
          <xsl:with-param name="pmt_name" select="$pmt_name"/>
          <xsl:with-param name="dn_tokens" select="$dn_tokens"/>
          <xsl:with-param name="partial_count" select="$partial_count"/>
        </xsl:apply-templates>
      </ul>
    </xsl:when>

    <xsl:otherwise>
      <xsl:variable name="total" select="count(PV[@C != '0'])"/>
      <xsl:variable name="attr_class">
        <xsl:choose>
          <xsl:when test="$total &lt; $dyn_nav_max_rows + 1">
            <xsl:value-of select="'dn-attr'"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="'dn-attr dn-attr-more'"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>

      <xsl:variable name="attr_id"><xsl:value-of
          select="concat('attr_', string(position()))"/></xsl:variable>
      <ul id="{$attr_id}" class="{$attr_class}">
        <xsl:choose>
          <xsl:when test="$total &lt; $dyn_nav_max_rows + 1">
            <li class="dn-attr-hdr"><span class="dn-attr-hdr-txt"><xsl:attribute
              name="title"><xsl:value-of select="@DN" disable-output-escaping="yes"/>
            </xsl:attribute><xsl:value-of select="@DN"/></span></li>
          </xsl:when>
          <xsl:otherwise>
            <li class="dn-attr-hdr"><div class="dn-zippy-hdr"><div class="dn-zippy-hdr-img"></div>
              <span class="dn-attr-hdr-txt"><xsl:attribute
                name="title"><xsl:value-of select="@DN" disable-output-escaping="yes"/>
              </xsl:attribute><xsl:value-of select="@DN"/></span></div></li>
          </xsl:otherwise>
        </xsl:choose>

        <xsl:apply-templates select="PV[position() &lt; $dyn_nav_max_rows + 1]">
          <xsl:with-param name="pmt_name" select="$pmt_name"/>
          <xsl:with-param name="header" select="@DN"/>
          <xsl:with-param name="dn_tokens" select="$dn_tokens"/>
          <xsl:with-param name="partial_count" select="$partial_count"/>
        </xsl:apply-templates>

        <xsl:if test="$total &gt; $dyn_nav_max_rows">
          <xsl:variable name="total_left" select="$total - $dyn_nav_max_rows"/>
          <li id="{$attr_id}_more_less">
            <a id="more_{$attr_id}" class="dn-link" style="margin-right: 10px; outline-style: none;"
              onclick="dynNavMgr.displayMore('{$attr_id}', true); return false;"
              href="javascript:;">
              <xsl:attribute name="ctype">
                  <xsl:text>dynnav.</xsl:text>
                  <xsl:value-of select="$name" disable-output-escaping="no"/>
                  <xsl:text>.more</xsl:text>
              </xsl:attribute>
              <span class="dn-more-img dn-mimg"></span>
              <span id="disp_{$attr_id}"><xsl:value-of
              select="$total_left"/></span><span> More</span>
            </a>
            <a id="less_{$attr_id}" class="dn-link dn-hidden" style="outline-style: none;"
              onclick="dynNavMgr.displayMore('{$attr_id}', false, {$total_left}); return false;"
              href="javascript:;">
              <xsl:attribute name="ctype">
                <xsl:text>dynnav.</xsl:text>
                <xsl:value-of select="$name" disable-output-escaping="no"/>
                <xsl:text>.less</xsl:text>
              </xsl:attribute>
              <span class="dn-more-img dn-limg"></span>
              <span>Less</span>
            </a>
          </li>
          <label class="dn-hidden dn-id"><xsl:value-of select="$attr_id"/></label>
          <label id="{$attr_id}_escaped" class="dn-hidden"><xsl:value-of
              select="$pmt_name"/></label>
          <label id="{$attr_id}_total" class="dn-hidden"><xsl:value-of
              select="$total"/></label>
          <label id="{$attr_id}_total_left" class="dn-hidden"><xsl:value-of
              select="$total_left"/></label>
        </xsl:if>
      </ul>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

<xsl:template match="PV">
  <xsl:param name="pmt_name"/>
  <xsl:param name="header"/>
  <xsl:param name="dn_tokens"/>
  <xsl:param name="partial_count"/>

  <xsl:if test="@C != 0">
    <xsl:apply-templates select="." mode="construct">
      <xsl:with-param name="dn_tokens" select="$dn_tokens"/>
      <xsl:with-param name="header" select="$header"/>
      <xsl:with-param name="partial_count" select="$partial_count"/>
      <xsl:with-param name="current_token">
        <xsl:choose>
          <xsl:when test="../@IR = '1'"><xsl:variable
            name="stripped_l" select="normalize-space(@L)"/><xsl:variable
            name="stripped_h" select="normalize-space(@H)"/>inmeta:<xsl:value-of
            select="$pmt_name"/>:<xsl:choose><xsl:when test="../@T = 3"><xsl:if
            test="$stripped_l != ''">$<xsl:value-of select="$stripped_l"/></xsl:if>..<xsl:if
            test="$stripped_h != ''">$<xsl:value-of
            select="$stripped_h"/></xsl:if></xsl:when><xsl:otherwise><xsl:value-of
            select="$stripped_l"/>..<xsl:value-of select="$stripped_h"/></xsl:otherwise></xsl:choose>
          </xsl:when>
          <xsl:otherwise>inmeta:<xsl:value-of select="$pmt_name"/>%3D<xsl:call-template
              name="term-escape"><xsl:with-param name="val" select="@V"/></xsl:call-template>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:with-param>
    </xsl:apply-templates>
  </xsl:if>
</xsl:template>

<xsl:template match="PV" mode="construct">
  <xsl:param name="dn_tokens"/>
  <xsl:param name="header"/>
  <xsl:param name="current_token"/>
  <xsl:param name="partial_count"/>

  <xsl:variable name="dispval">
    <xsl:apply-templates select="." mode="display_value"/>
  </xsl:variable>

  <xsl:variable name="dispcount">
    <xsl:text> (</xsl:text><xsl:if
       test="$partial_count=1"><xsl:text>&gt; </xsl:text></xsl:if>
      <xsl:value-of select="@C"/><xsl:text>)</xsl:text>
  </xsl:variable>

  <xsl:variable name="is_selected" select="index-of($dn_tokens, $current_token)"/>
  <li class="first_item">
    <xsl:choose>
      <xsl:when test="exists($is_selected)">
        <xsl:variable name="other_tokens">
          <xsl:value-of select="string-join(remove($dn_tokens, $is_selected[position()=1]), '+')"/>
        </xsl:variable>

        <xsl:variable name="cancel_url">
          <xsl:value-of select="$no_q_dnavs_params"/>&amp;q=<xsl:value-of
            select="$original_q"/><xsl:if test="$other_tokens != ''">+<xsl:value-of
            select="$other_tokens"/>&amp;dnavs=<xsl:value-of select="$other_tokens"/></xsl:if>
        </xsl:variable>

        <a class="dn-img dn-r-img"
            href="{$gsa_search_root_path_prefix}?{$cancel_url}"
            title="Clear">
          <xsl:attribute name="ctype">
            <xsl:text>dynnav.clear.</xsl:text>
            <xsl:value-of select="$header" disable-output-escaping="no"/>
          </xsl:attribute>
X
        </a>
        <span class="dn-overflow dn-inline-block" style="width: 86%;">
          <xsl:if test="../@IR != 1">
            <xsl:attribute name="title"><xsl:value-of select="$dispval"
                disable-output-escaping="yes"/></xsl:attribute>
          </xsl:if>
          <xsl:value-of select="concat($dispval, $dispcount)"
              disable-output-escaping="yes"/>
        </span>
      </xsl:when>
      <xsl:otherwise>
        <xsl:variable name="pmts_var">dnavs=<xsl:if test="/GSP/PARAM[@name='dnavs']"><xsl:value-of
            select="/GSP/PARAM[@name='dnavs']/@original_value"/>+</xsl:if><xsl:value-of
            select="$current_token"/>
        </xsl:variable>
        <xsl:variable name="qurl"><xsl:value-of select="$no_q_dnavs_params"/>&amp;q=<xsl:value-of
            select="/GSP/PARAM[@name='q']/@original_value"/>+<xsl:value-of
            select="$current_token"/>&amp;<xsl:value-of select="$pmts_var"/>
        </xsl:variable>
        <a class="dn-attr-v" href="{$gsa_search_root_path_prefix}?{$qurl}">
          <xsl:attribute name="ctype">
            <xsl:text>dynnav.</xsl:text>
            <xsl:value-of select="$header" disable-output-escaping="no"/>
            <xsl:text>.</xsl:text>
            <xsl:value-of select="$dispval" disable-output-escaping="no"/>
          </xsl:attribute>
          <xsl:if test="../@IR != 1">
            <xsl:attribute name="title"><xsl:value-of select="$dispval"
                disable-output-escaping="no"/></xsl:attribute>
          </xsl:if>
          <xsl:value-of select="$dispval" disable-output-escaping="yes"/>
          <span class="dn-attr-c"><xsl:value-of select="$dispcount"
              disable-output-escaping="yes"/></span>
        </a>
      </xsl:otherwise>
    </xsl:choose>
  </li>
</xsl:template>

<xsl:template match="PV" mode="display_value">
  <xsl:choose>
    <xsl:when test="../@IR = 1">
      <xsl:variable name="disp_l">
        <xsl:call-template name="pmt_range_display_val">
          <xsl:with-param name="val" select="@L"/>
          <xsl:with-param name="type" select="../@T"/>
        </xsl:call-template>
      </xsl:variable>
      <xsl:variable name="disp_h">
        <xsl:call-template name="pmt_range_display_val">
          <xsl:with-param name="val" select="@H"/>
          <xsl:with-param name="type" select="../@T"/>
        </xsl:call-template>
      </xsl:variable>
      <xsl:choose>
        <xsl:when test="$disp_l = ''">
          <xsl:value-of select="$disp_h"/><xsl:text> </xsl:text>
          <xsl:choose>
            <xsl:when test="../@T = 4">or earlier</xsl:when>
            <xsl:otherwise>or less</xsl:otherwise>
          </xsl:choose>
        </xsl:when>
        <xsl:when test="$disp_h = ''">
          <xsl:value-of select="$disp_l"/><xsl:text> </xsl:text>
          <xsl:choose>
            <xsl:when test="../@T = 4">or later</xsl:when>
            <xsl:otherwise>or more</xsl:otherwise>
          </xsl:choose>
        </xsl:when>
        <xsl:otherwise><xsl:value-of
          select="$disp_l"/><xsl:text> </xsl:text><xsl:call-template
          name="endash"/><xsl:text> </xsl:text><xsl:value-of select="$disp_h"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="@V"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

<xsl:variable name="hex">0123456789ABCDEF</xsl:variable>
<xsl:template name="term-escape">
  <xsl:param name="val"/>
  <xsl:variable name="first-char" select="substring($val, 1, 1)"/>
  <xsl:variable name="code"
    select="string-to-codepoints($first-char)[position()=1]"/>
  <xsl:choose>
    <xsl:when test="not(($code >= 48 and $code &lt;= 57) or
      ($code >= 65 and $code &lt;= 90) or ($code = 95) or
      ($code >= 97 and $code &lt;= 122))">
      <xsl:choose>
        <xsl:when test="$code > 128">
          <xsl:value-of select="encode-for-uri($first-char)"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:variable name="hex-digit1"
            select="substring($hex, floor($code div 16) + 1, 1)"/>
          <xsl:variable name="hex-digit2"
            select="substring($hex, $code mod 16 + 1, 1)"/>
          <xsl:value-of select="concat('%25', $hex-digit1 ,$hex-digit2)"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$first-char"/>
    </xsl:otherwise>
  </xsl:choose>
  <xsl:if test="string-length($val) > 1">
    <xsl:call-template name="term-escape">
      <xsl:with-param name="val" select="substring($val, 2)"/>
    </xsl:call-template>
  </xsl:if>
</xsl:template>

<xsl:template name="pmt_range_display_val">
  <xsl:param name="val"/>
  <xsl:param name="type"/>
  <xsl:choose>
    <xsl:when test="$val != '' and ($type = 2 or $type = 3)">
      <xsl:value-of select="format-number($val, '#.##')"/>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$val"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

<xsl:template name="main_results">
  <xsl:param name="query"/>
  <xsl:param name="dn_tokens"/>

  <xsl:if test="$render_dynamic_navigation = '1'">
    <div class="dn-bar">
      <xsl:variable name="all_results_url"><xsl:value-of
          select="$no_q_dnavs_params"/>&amp;q=<xsl:value-of select="$original_q"/>
      </xsl:variable>

      <!-- Add next/prev navigation -->
      <xsl:if test="$show_top_navigation != '0' and /GSP/RES">
        <span class="dn-bar-rt">
          <xsl:call-template name="google_navigation">
            <xsl:with-param name="prev" select="/GSP/RES/NB/PU"/>
            <xsl:with-param name="next" select="/GSP/RES/NB/NU"/>
            <xsl:with-param name="view_begin" select="/GSP/RES/@SN"/>
            <xsl:with-param name="view_end" select="/GSP/RES/@EN"/>
            <xsl:with-param name="guess" select="/GSP/RES/M"/>
            <xsl:with-param name="navigation_style" select="'top'"/>
            <xsl:with-param name="dynamic_nav_bar" select="'1'"/>
          </xsl:call-template>
        </span>
      </xsl:if>

      <a class="dn-link" style="text-decoration: underline; color: #000;"
        href="{$gsa_search_root_path_prefix}?{$all_results_url}">All results</a>

      <xsl:if test="exists($dn_tokens)">
        <xsl:call-template name="rsaquo"/>
        <xsl:variable name="root_node" select="/GSP"/>
        <xsl:for-each select="$dn_tokens">
          <xsl:variable name="other_pmts_tokens"
            select="string-join(remove($dn_tokens, position()), '+')"/>

          <xsl:variable name="cancel_url">
            <xsl:value-of select="$all_results_url"/>
            <xsl:if test="$other_pmts_tokens != ''">+<xsl:value-of
                select="$other_pmts_tokens"/>&amp;dnavs=<xsl:value-of select="$other_pmts_tokens"/>
            </xsl:if>
          </xsl:variable>

          <a class="dn-link cancel-url dn-bar-link"
              href="{$gsa_search_root_path_prefix}?{$cancel_url}"
              title="Clear">
            <xsl:variable name="range_val" select="substring-after(., ':')"/>
            <xsl:choose>
              <xsl:when test="contains(., '..')">
                <xsl:for-each select="$root_node/RES/PARM/PMT">
                  <xsl:variable name="escaped_name"><xsl:call-template name="term-escape">
                    <xsl:with-param name="val" select="@NM"/>
                  </xsl:call-template></xsl:variable>
                  <xsl:if test="$escaped_name=substring-before($range_val, ':')">
                    <span class="dn-bar-v"><xsl:value-of select="@DN"/>:</span><xsl:call-template
                      name="nbsp"/><xsl:choose>
                      <xsl:when test="@T = '3'">
                        <xsl:for-each select="PV">
                          <xsl:variable name="check_val"><xsl:if
                            test="normalize-space(@L) != ''">$<xsl:value-of
                            select="normalize-space(@L)"/></xsl:if>..<xsl:if
                            test="normalize-space(@H) != ''">$<xsl:value-of
                              select="normalize-space(@H)"/></xsl:if>
                          </xsl:variable>
                          <xsl:if test="$check_val=substring-after($range_val, ':')">
                            <xsl:apply-templates select="current()" mode="display_value"/>
                          </xsl:if>
                        </xsl:for-each>
                      </xsl:when>
                      <xsl:otherwise>
                        <xsl:apply-templates select="PV[concat(normalize-space(@L), '..',
                          normalize-space(@H))=substring-after($range_val, ':')]" mode="display_value"/>
                      </xsl:otherwise>
                    </xsl:choose>
                  </xsl:if>
                </xsl:for-each>
              </xsl:when>
              <xsl:otherwise>
                <xsl:for-each select="$root_node/RES/PARM/PMT">
                  <xsl:variable name="escaped_name"><xsl:call-template name="term-escape">
                    <xsl:with-param name="val" select="@NM"/>
                  </xsl:call-template></xsl:variable>
                  <xsl:if test="$escaped_name=substring-before($range_val, '%3D')">
                    <span class="dn-bar-v"><xsl:value-of select="./@DN"/>:</span><xsl:call-template
                      name="nbsp"/><xsl:for-each select="./PV"><xsl:variable
                        name="pv_val"><xsl:call-template name="term-escape">
                          <xsl:with-param name="val" select="./@V"/>
                        </xsl:call-template></xsl:variable>
                        <xsl:if test="$pv_val=substring-after($range_val, '%3D')">
                          <xsl:apply-templates select="." mode="display_value"/>
                        </xsl:if>
                    </xsl:for-each>
                  </xsl:if>
                </xsl:for-each>
              </xsl:otherwise>
            </xsl:choose>
          </a>

          <xsl:if test="position() != last()">
            <xsl:call-template name="rsaquo"/>
          </xsl:if>
        </xsl:for-each>
      </xsl:if>
    </div>

    <!-- *** Handle OneBox results, if any ***-->
    <xsl:if test="$show_onebox != '0' and count(/GSP/ENTOBRESULTS) &gt; 0">
      <xsl:call-template name="onebox"/>

      <script>
      <xsl:comment>
        if (window['populateUarMessages']) {
          populateUarMessages();
        }
      //</xsl:comment>
      </script>
    </xsl:if>

    <!-- *** output google desktop results (if enabled and any available) *** -->
    <xsl:if test="$egds_show_desktop_results != '0'">
      <xsl:call-template name="desktop_results"/>
    </xsl:if>
  </xsl:if>

  <xsl:if test="$show_translation = '1' and $only_apps != '1'">
    <div id="translate_all_div" class="trns-all-div"></div>
  </xsl:if>

  <xsl:choose>
    <xsl:when test="$show_sidebar = '1'">
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <!-- Display organic results on the left side. -->
          <td id="left-side-container" width="55%" valign="top">
            <xsl:call-template name="render_main_results">
              <xsl:with-param name="query" select="$query"/>
            </xsl:call-template>
          </td>

          <!-- Display sidebar containing the enabled sidebar elements. -->
          <td id="sidebar-container" class="sb-r" valign="top">
            <div id="sidebar">
              <!-- Expert Search - sidebar element. -->
              <xsl:if test="$show_expert_search_widget_view = '1'">
                <div id="exp-results-container">
                  <xsl:call-template
                    name="render_expert_search_results">
                    <xsl:with-param name="src_prefix"
                        select="concat($gsa_search_root_path_prefix, '?')" />
                    <xsl:with-param name="is_noscript_mode" select="'true'" />
                  </xsl:call-template>
                </div>
              </xsl:if>

              <!-- People Search sidebar element. -->
              <xsl:if test="$show_people_search = '1'">
              <div id="ps-results-container">
                <div id="loading-ps-results" class="sb-r-ld-msg-c" style="display: none;">
                  <span class="sb-r-lbl">Loading People search results...</span>
                </div>
                <div id="ps-results-msg" class="sb-r-lbl" style="display: none;" >People</div>
                <div id="ps-results-section" class="sb-r-res" style="display:none;">
                </div>
              </div>
              </xsl:if>

              <!-- Google Apps results sidebar element. -->
              <xsl:if test="$show_apps_segmented_ui = '1'">
              <div id="apps-results-container">
                <div id="loading-app-results" class="sb-r-ld-msg-c" style="display: none;">
                  <span class="sb-r-lbl">Loading Google Apps results...</span>
                </div>
                <div style="display: none;" id="apps-results-msg" class="sb-r-lbl"></div>
                <div id="apps-results-section" class="sb-r-res" style="display: none;">
                </div>
                <iframe scrolling="no" id="apps-results-iframe" frameborder="0"
                    style="display: none;">
                </iframe>
              </div>
              </xsl:if>

              <!-- Google Site Search sidebar element. -->
              <xsl:if test="$show_gss_results = '1'">
              <div id="gss-results-container">
                <div id="loading-gss-results" class="sb-r-ld-msg-c" style="display: none;">
                  <span class="sb-r-lbl">Loading Google Site Search results...</span>
                </div>
                <div id="gss-results-msg" class="sb-r-lbl" style="display: none;" >Google Site Search</div>
                <div id="gss-results-section" class="sb-r-res" style="display:none">
                </div>
                <input style="display:none" id="gss-hidden-input" />
              </div>
              </xsl:if>

              <!-- Twitter sidebar element. -->
              <xsl:if test="$show_twitter_results = '1'">
              <div id="twitter-results-container">
                <div id="loading-twitter-results" class="sb-r-ld-msg-c" style="display: none;">
                  <span class="sb-r-lbl">Loading Twitter results...</span>
                </div>
                <div id="twitter-results-msg" class="sb-r-lbl" style="display: none;" >Twitter</div>
                <div id="twitter-results-section" class="sb-r-res" style="display:none">
                </div>
              </div>
              </xsl:if>
            </div>
          </td>
        </tr>
      </table>
    </xsl:when>
   <!-- S.MIRZA HIDING REPEAT RENDER OF MAIN RESULTS <xsl:otherwise>
      <xsl:call-template name="render_main_results">
        <xsl:with-param name="query" select="$query"/>
      </xsl:call-template>
    </xsl:otherwise> -->
  </xsl:choose>

  <!-- *** Filter note (if needed) *** -->
  <xsl:if test="(RES/FI) and (not(RES/NB/NU))">
    <p>
      <i>
      In order to show you the most relevant results, we have omitted some entries very similar to the <xsl:value-of select="RES/@EN"/> already displayed.<br/>If you like, you can <a href="{$filter_url}0">repeat the search with the omitted results included</a>.
      </i>
    </p>
  </xsl:if>

  <!-- *** Add bottom navigation *** -->
  <!-- S.MIRZA HID BOTTOM NAV<div id="bottom-navigation">
    <xsl:call-template name="gen_bottom_navigation" />
  </div>-->

<!-- S.MIRZA MOVED THE BOTTOM SEARCH BOX FROM HERE -->

  <!-- *** Load the JSAPI library if displaying GSS results is enabled. -->
  <xsl:if test="$show_gss_results = '1'">
    <script src="https://www.google.com/jsapi" type="text/javascript"></script>
    <script type="text/javascript">
      var GSS_JS_API_LOADED = false;
      /**
       * If you want to use a different Site Search theme you can specify the
       * same through {style: THEME_CONSTANT} property passed as the third
       * parameter to google.load call below. For example:
       * google.load('search', '1', {style: google.loader.themes.ESPRESSO})
       * You can refer API documentation here:
       * http://code.google.com/apis/ajaxsearch/documentation/customsearch/#_themes
       * Optionally, you can override the default stylesheet via custom CSS or
       * customize existing themes via "Look and Feel" option in the control
       * panel.
       */
      google.load('search', '1');
      google.setOnLoadCallback(function(){GSS_JS_API_LOADED = true;});
    </script>
  </xsl:if>

  <!-- *** Load the Twitter JS library, if enabled *** -->
  <xsl:if test="$show_twitter_results = '1'">
    <script src="{$gsa_resource_root_path_prefix}/twitter.js"
        type="text/javascript"></script>
  </xsl:if>

  <!-- *** Load the Translation JS library, if enabled *** -->
  <xsl:if test="$show_translation = '1' and $only_apps != '1'">
    <xsl:variable name="result_contents">
      <xsl:for-each select="/GSP/RES/R">{'id':<xsl:value-of select="@N"/>,'lang':'<xsl:value-of select="LANG"/>'},</xsl:for-each>
    </xsl:variable>
    <xsl:variable name="res_count" select="count(/GSP/RES/R)"/>
    <xsl:variable name="user_lang" select="/GSP/PARAM[@name='ulang']/@value" />
    <xsl:if test="$render_dynamic_navigation != '1'">
      <script src="{$gsa_resource_root_path_prefix}/translation_compiled.js"
          type="text/javascript"></script>
    </xsl:if>
    <script type="text/javascript">
      var translationManager = new gsa.translation.TranslationManager();
      translationManager.initTranslation(<xsl:value-of select="$res_count" />,
          [<xsl:value-of select="substring($result_contents,
          1,string-length($result_contents)-1)" />],
          '<xsl:value-of select="$user_lang"/>');

      function createSectionalElement() {
        new google.translate.SectionalElement({
         sectionalNodeClassName: 'goog-trans-section',
         controlNodeClassName: 'goog-trans-control',
         background: '#ffffff',
         useSecureConnection: true,
         key: '<xsl:value-of select="$translate_key"/>',
         relate: 'id'
        }, 'goog-trans-all');
      }
    </script>
    <script src="https://translate.google.com/translate_a/element.js?cb=createSectionalElement&amp;ug=section&amp;hl={$user_lang}"></script>
  </xsl:if>

  <!-- *** Load resources for showing document previews, if enabled *** -->
  <xsl:if test="$show_document_previews = '1'">
    <xsl:call-template name="populate_previewer_i18n_array"/>
    <script src="{$gsa_resource_root_path_prefix}/dpsjsclient/dps.min.js"
        type="text/javascript"></script>
    <script src="{$gsa_resource_root_path_prefix}/previewer.js"
        type="text/javascript"></script>
    <xsl:if test="/GSP/PREVIEWS">
      <script type="text/javascript">
      <xsl:comment>
        <xsl:value-of select="/GSP/PREVIEWS"/>
      //</xsl:comment>
      </script>
    </xsl:if>
    <link rel="stylesheet"
      href="{$gsa_resource_root_path_prefix}/dpsjsclient/dps-floating-viewer.css"
      type="text/css">
    </link>
    <xsl:if test="$is_embedded_mode = '1'">
      <script type="text/javascript">
        if (window['DPS']) {
          DPS.forwardingProxy =
              '<xsl:value-of select="$embedded_mode_resource_root_path_prefix" />';
          <xsl:if test="$embedded_mode_dps_viewer_host != ''">
          <xsl:variable name="embedded_mode_dps_viewer_host_to_use"
            select="if (starts-with($embedded_mode_dps_viewer_host, 'http://'))
                    then
                       $embedded_mode_dps_viewer_host
                    else
                       concat('http://', $embedded_mode_dps_viewer_host)" />
          // Disable the full preview mode in SharePoint embedded mode.
          DPS.onPageClick = function() { return false; };
          </xsl:if>
        }
      </script>
      <style type="text/css">
        div.floating-viewer-header .controls {
          background-image: url("<xsl:value-of select="$embedded_mode_resource_root_path_prefix"/>/dpsjsclient/buttons.png");
        }
        div.result-item-hover span.toggle-preview {
          background-image: url("<xsl:value-of select="$embedded_mode_resource_root_path_prefix"/>/preview_on.png") !important;
        }
        body.previews-enabled span.toggle-preview {
          background-image: url("<xsl:value-of select="$embedded_mode_resource_root_path_prefix"/>/preview_off.png");
        }
      </style>
    </xsl:if>
  </xsl:if>
</xsl:template>

<xsl:template name="render_main_results">
  <xsl:param name="query"/>
  <xsl:variable name="main_results_class">
    <xsl:choose>
      <xsl:when test="$render_dynamic_navigation = '1'">main-results</xsl:when>
      <xsl:otherwise>main-results-without-dn</xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <div class="{$main_results_class}">
    <!-- S.MIRZA MOVED KEYMAT RESULTS FROM HERE -->

    <!-- Experty Search - render the expert search results if expanded
         mode is configured for the current frontend. -->
    <xsl:choose>
      <xsl:when test="$show_expert_search_expanded_results = '1'">
        <xsl:if test="$render_dynamic_navigation != '1'">
          <xsl:call-template name="back_to_widget_view_frontend_link">
            <xsl:with-param name="src_prefix"
                select="concat($gsa_search_root_path_prefix, '?')" />
            <xsl:with-param name="msg_back_to_main_results_action"
                select="$msg_back_to_main_results_action" />
          </xsl:call-template>
        </xsl:if>
        <xsl:call-template name="render_expert_search_results">
          <xsl:with-param name="src_prefix"
              select="concat($gsa_search_root_path_prefix, '?')" />
          <xsl:with-param name="current_search_query_args"
              select="$search_url" />
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:apply-templates select="RES/R">
          <xsl:with-param name="query" select="$query"/>
        </xsl:apply-templates>
      </xsl:otherwise>
    </xsl:choose>
  </div>
</xsl:template>

<!-- **********************************************************************
 Stopwords suggestions in result page (do not customize)
     ********************************************************************** -->
<xsl:template name="stopwords">
  <xsl:variable name="stopwords_suggestions1">
    <xsl:call-template name="replace_string">
      <xsl:with-param name="find" select="'/help/basics.html#stopwords'"/>
      <xsl:with-param name="replace" select="'user_help.html#stop'"/>
      <xsl:with-param name="string" select="/GSP/CT"/>
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="stopwords_suggestions">
    <xsl:call-template name="replace_string">
      <xsl:with-param name="find" select="'/help/basics.html'"/>
      <xsl:with-param name="replace" select="'user_help.html'"/>
      <xsl:with-param name="string" select="$stopwords_suggestions1"/>
    </xsl:call-template>
  </xsl:variable>

  <xsl:if test="/GSP/CT">
    <font size="-1" color="gray">
      <xsl:value-of disable-output-escaping="yes"
        select="$stopwords_suggestions"/>
    </font>
  </xsl:if>
</xsl:template>


<!-- **********************************************************************
 Spelling suggestions in result page (do not customize)
     ********************************************************************** -->
<xsl:template name="spelling">
  <xsl:if test="/GSP/Spelling/Suggestion">
    <p><span class="p"><font color="{$spelling_text_color}">
         <xsl:value-of select="$spelling_text"/>
         <xsl:call-template name="nbsp"/>
       </font></span>
    <xsl:variable name="apps_param">
      <xsl:choose>
        <xsl:when test="/GSP/PARAM[@name='exclude_apps']">
          <xsl:text disable-output-escaping='yes'>&amp;exclude_apps=</xsl:text>
          <xsl:value-of select="/GSP/PARAM[@name='exclude_apps']/@original_value" />
        </xsl:when>
        <xsl:when test="/GSP/PARAM[@name='only_apps']">
          <xsl:text disable-output-escaping='yes'>&amp;only_apps=</xsl:text>
          <xsl:value-of select="/GSP/PARAM[@name='only_apps']/@original_value" />
        </xsl:when>
      </xsl:choose>
    </xsl:variable>
    <a ctype="spell"
      href="{$gsa_search_root_path_prefix}?q={/GSP/Spelling/Suggestion[1]/@qe}&amp;spell=1&amp;{$synonym_url}{$apps_param}">
      <xsl:value-of disable-output-escaping="yes" select="/GSP/Spelling/Suggestion[1]"/>
    </a>
    </p>
  </xsl:if>
</xsl:template>


<!-- **********************************************************************
 Synonym suggestions in result page (do not customize)
     ********************************************************************** -->
<xsl:template name="synonyms">
  <xsl:if test="/GSP/Synonyms/OneSynonym">
    <p><span class="p"><font color="{$synonyms_text_color}">
         <xsl:value-of select="$synonyms_text"/>
         <xsl:call-template name="nbsp"/>
       </font></span>
    <xsl:for-each select="/GSP/Synonyms/OneSynonym">
      <a ctype="synonym" href="{$gsa_search_root_path_prefix}?q={@q}&amp;{$synonym_url}">
        <xsl:value-of disable-output-escaping="yes" select="."/>
      </a><xsl:text> </xsl:text>
    </xsl:for-each>
    </p>
  </xsl:if>
</xsl:template>


<!-- **********************************************************************
 Truncation functions (do not customize)
     ********************************************************************** -->
<xsl:template name="truncate_url">
  <xsl:param name="t_url"/>

  <xsl:choose>
    <xsl:when test="string-length($t_url) &lt; $truncate_result_url_length">
      <xsl:value-of select="$t_url"/>
    </xsl:when>
    <xsl:otherwise>
      <xsl:variable name="first" select="substring-before($t_url, '/')"/>
      <xsl:variable name="last">
              <xsl:call-template name="truncate_find_last_token">
                <xsl:with-param name="t_url" select="$t_url"/>
              </xsl:call-template>
      </xsl:variable>
      <xsl:variable name="path_limit" select="$truncate_result_url_length - (string-length($first) + string-length($last) + 1)"/>

      <xsl:choose>
              <xsl:when test="$path_limit &lt;= 0">
                <xsl:value-of select="concat(substring($t_url, 1, $truncate_result_url_length), '...')"/>
              </xsl:when>
              <xsl:otherwise>
                <xsl:variable name="chopped_path">
                  <xsl:call-template name="truncate_chop_path">
                    <xsl:with-param name="path" select="substring($t_url, string-length($first) + 2, string-length($t_url) - (string-length($first) + string-length($last) + 1))"/>
                    <xsl:with-param name="path_limit" select="$path_limit"/>
                  </xsl:call-template>
                </xsl:variable>
                <xsl:value-of select="concat($first, '/.../', $chopped_path, $last)"/>
              </xsl:otherwise>
      </xsl:choose>
    </xsl:otherwise>
  </xsl:choose>

</xsl:template>

<xsl:template name="truncate_find_last_token">
  <xsl:param name="t_url"/>

  <xsl:choose>
    <xsl:when test="contains($t_url, '/')">
      <xsl:call-template name="truncate_find_last_token">
            <xsl:with-param name="t_url" select="substring-after($t_url, '/')"/>
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
            <xsl:value-of select="$t_url"/>
    </xsl:otherwise>
  </xsl:choose>

</xsl:template>

<xsl:template name="truncate_chop_path">
  <xsl:param name="path"/>
  <xsl:param name="path_limit"/>

  <xsl:choose>
    <xsl:when test="string-length($path) &lt;= $path_limit">
      <xsl:value-of select="$path"/>
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template name="truncate_chop_path">
        <xsl:with-param name="path" select="substring-after($path, '/')"/>
        <xsl:with-param name="path_limit" select="$path_limit"/>
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>

</xsl:template>


<!-- **********************************************************************
  Google Apps (do not customize)
     ********************************************************************** -->
<xsl:variable
  name="sites_icon"
  select="'https://www.google.com/sites/images/sites_favicon.ico'"/>
<xsl:variable
  name="docs_icon"
  select="'https://docs.google.com/images/doclist/icon_doc.gif'"/>
<xsl:variable
  name="spreadsheets_icon"
  select="'https://docs.google.com/images/doclist/icon_spread.gif'"/>
<xsl:variable
  name="presentations_icon"
  select="'https://docs.google.com/images/doclist/icon_pres.gif'"/>
<xsl:variable
  name="pdf_icon"
  select="'https://docs.google.com/images/doclist/icon_6_pdf.gif'"/>
<xsl:variable
  name="drawing_icon"
  select="'https://docs.google.com/images/doclist/icon_6_drawing.png'"/>
<xsl:variable
  name="email_icon"
  select="'https://mail.google.com/mail/images/favicon.ico'"/>

<!-- **********************************************************************
  A single result (do not customize)
     ********************************************************************** -->
<xsl:template match="R">
  <xsl:param name="query"/>

  <xsl:variable name="protocol"     select="substring-before(U, '://')"/>
  <xsl:variable name="temp_url"     select="substring-after(U, '://')"/>
  <xsl:variable name="display_url1" select="substring-after(UD, '://')"/>
  <xsl:variable name="escaped_url"  select="substring-after(UE, '://')"/>

  <xsl:variable name="display_url2">
    <xsl:choose>
      <xsl:when test="$display_url1">
        <xsl:value-of select="$display_url1"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$temp_url"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="display_url">
    <xsl:choose>
      <xsl:when test="$protocol='unc'">
        <xsl:call-template name="convert_unc">
          <xsl:with-param name="string" select="$display_url2"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$display_url2"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="stripped_url">
    <xsl:choose>
      <xsl:when test="$truncate_result_urls != '0'">
                <xsl:call-template name="truncate_url">
                  <xsl:with-param name="t_url" select="$display_url"/>
                </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
            <xsl:value-of select="$display_url"/>
          </xsl:otherwise>
        </xsl:choose>
  </xsl:variable>

  <xsl:variable name="crowded_url" select="HN/@U"/>
  <xsl:variable name="crowded_display_url1" select="HN"/>
  <xsl:variable name="crowded_display_url">
    <xsl:choose>
      <xsl:when test="$protocol='unc'">
        <xsl:call-template name="convert_unc">
          <xsl:with-param name="string" select="substring-after($crowded_display_url1,'://')"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$crowded_display_url1"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
  <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>

  <xsl:variable name="url_indexed" select="not(starts-with($temp_url, 'noindex!/'))"/>

  <!-- *** Indent as required (only supports 2 levels) *** -->
  <xsl:if test="@L='2'">
    <xsl:text disable-output-escaping="yes">&lt;blockquote class=&quot;g&quot;&gt;</xsl:text>
  </xsl:if>

  <!-- *** Result Header *** -->
<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />


<xsl:variable name="store_locator_result">
<xsl:if test="contains($requiredfields_val, 'contenttypename')">
<xsl:text> store_locator_result</xsl:text>
</xsl:if>
</xsl:variable>

<div class="result_holder{$store_locator_result}">
<p class="g">

<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<xsl:if test="MT[@N='MainContentType']/@V and not(contains($requiredfields_val, 'contenttypename'))">
<xsl:call-template name="content_icon" />
</xsl:if>

<!--<xsl:if test="MT[@N='brand']/@V and not(contains($requiredfields_val, 'contenttypename'))">
<span class="meta_section"><xsl:value-of select="MT[@N='brand']/@V" /></span>
</xsl:if>-->

  <xsl:variable name="apps_domain">
    <xsl:if test="starts-with($stripped_url, 'sites.google.com/a/') or
                  starts-with($stripped_url, 'docs.google.com/a/') or
                  starts-with($stripped_url, 'spreadsheets.google.com/a/')">
      <xsl:value-of
        select="substring-before(substring-after($stripped_url, '/a/'), '/')"/>
    </xsl:if>
  </xsl:variable>

  <!-- *** Google Sites icon *** -->
  <xsl:if test="starts-with($stripped_url, 'sites.google.com/')">
    <img src="{$sites_icon}" alt="" height="16" width="16"/><xsl:call-template name="nbsp"/>
  </xsl:if>

  <!-- *** Google Docs icon *** -->
  <xsl:if test="starts-with($stripped_url, concat('docs.google.com/a/', $apps_domain, '/View?')) or
                RF[@NAME='type']/@VALUE='document'">
    <img src="{$docs_icon}" alt="" height="16" width="16"/><xsl:call-template name="nbsp"/>
  </xsl:if>

  <!-- *** Google Spreadsheets icon *** -->
  <xsl:if test="starts-with($stripped_url, 'spreadsheets.google.com/') or
                 RF[@NAME='type']/@VALUE='spreadsheet'">
    <img src="{$spreadsheets_icon}" alt="" height="16" width="16"/><xsl:call-template name="nbsp"/>
  </xsl:if>

  <!-- *** Google Presentations icon *** -->
  <!-- TODO(timg): remove once Docs eliminates SimplePresentaionView URLs -->
  <xsl:if test="starts-with($stripped_url,
                            concat('docs.google.com/a/', $apps_domain, '/SimplePresentationView?')) or
                starts-with($stripped_url,
                            concat('docs.google.com/a/', $apps_domain, '/PresentationView?')) or
                RF[@NAME='type']/@VALUE='presentation'">
    <img src="{$presentations_icon}" alt="" height="16" width="16"/><xsl:call-template name="nbsp"/>
  </xsl:if>

  <!-- *** Google PDF viewer icon *** -->
  <xsl:if test="RF[@NAME='type']/@VALUE='pdf'">
    <img src="{$pdf_icon}" alt="" height="16" width="16"/><xsl:call-template name="nbsp"/>
  </xsl:if>

  <!-- *** Google Drawing icon *** -->
  <xsl:if test="RF[@NAME='type']/@VALUE='drawing'">
    <img src="{$drawing_icon}" alt="" height="16" width="16"/><xsl:call-template name="nbsp"/>
  </xsl:if>

  <!-- *** GMail icon *** -->
  <xsl:if test="starts-with($stripped_url, 'mail.google.com') or
                RF[@NAME='type']/@VALUE='mail'">
    <img src="{$email_icon}" alt="" height="16" width="16"/>&#xA0;
  </xsl:if>

  <!-- *** Translation button -->
  <xsl:variable name="res_num" select="@N"/>
  <xsl:if test="$show_translation = '1' and $only_apps != '1'">
    <span class="trns-span" id="sec_trns_elem_span_{$res_num}"></span>
    <xsl:call-template name="nbsp"/>
  </xsl:if>

  <!-- *** Result Title (including PDF tag and hyperlink) *** -->
  <xsl:if test="$show_res_title != '0'">
    <font size="-2"><b>
    <xsl:choose>
      <xsl:when test="@MIME='text/html' or @MIME='' or not(@MIME)"></xsl:when>
      <xsl:when test="@MIME='text/plain'">[TEXT]</xsl:when>
      <xsl:when test="@MIME='application/rtf'">[RTF]</xsl:when>
      <xsl:when test="@MIME='application/pdf'">[PDF]</xsl:when>
      <xsl:when test="@MIME='application/postscript'">[PS]</xsl:when>
      <xsl:when test="@MIME='application/vnd.ms-powerpoint'">[MS POWERPOINT]</xsl:when>
      <xsl:when test="@MIME='application/vnd.ms-excel'">[MS EXCEL]</xsl:when>
      <xsl:when test="@MIME='application/msword'">[MS WORD]</xsl:when>
      <xsl:otherwise>
        <xsl:variable name="extension">
          <xsl:call-template name="last_substring_after">
            <xsl:with-param name="string" select="substring-after(
                                                  $temp_url,
                                                  '/')"/>
            <xsl:with-param name="separator" select="'.'"/>
            <xsl:with-param name="fallback" select="'UNKNOWN'"/>
          </xsl:call-template>
        </xsl:variable>
        [<xsl:value-of select="translate($extension,$lower,$upper)"/>]
      </xsl:otherwise>
    </xsl:choose>
    </b></font>
    <xsl:text> </xsl:text>

<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<!-- S.MIRZA Include image from meta tag in results list-->
<xsl:for-each select="MT">
    <xsl:if test="@N='image' and @V!='' and not(contains($requiredfields_val, 'contenttypename'))">
<span class="thumbnail_holder">
        <a href="{$protocol}://{$escaped_url}">
         <img height="75" width="100" src="{@V}"/>
          </a>

</span><!--thumbnail_holder-->
    </xsl:if>
</xsl:for-each>

<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<xsl:variable name="link" select="$url_indexed and not(starts-with(U,$googleconnector_protocol))"/>

    <xsl:if test="$link and ((contains($requiredfields_val, 'contenttypename') and MT[@N='paid']/@V='true') or (not(contains($requiredfields_val, 'contenttypename'))))">

      <xsl:text disable-output-escaping='yes'>&lt;a 
            ctype="c"
      </xsl:text>
            name=&quot;<xsl:value-of select="position()"/>&quot; rank=&quot;<xsl:value-of select="position()"/>&quot;

<xsl:text disable-output-escaping='yes'>
            href="</xsl:text>

      <xsl:choose>
        <xsl:when test="starts-with(U, $dbconnector_protocol)">
          <xsl:variable name="cache_encoding">
            <xsl:choose>
              <xsl:when test="'' != HAS/C/@ENC"><xsl:value-of select="HAS/C/@ENC"/></xsl:when>
              <xsl:otherwise>UTF-8</xsl:otherwise>
            </xsl:choose>
            </xsl:variable><xsl:value-of select="$gsa_search_root_path_prefix"/>?q=cache:<xsl:value-of select="HAS/C/@CID"/>:<xsl:value-of select="$stripped_url"/>+<xsl:value-of select="$stripped_search_query"/>&amp;<xsl:value-of select="$base_url"/>&amp;oe=<xsl:value-of select="$cache_encoding"/>
        </xsl:when>

        <xsl:when test="starts-with(U, $db_url_protocol)">
          <xsl:value-of disable-output-escaping='yes'
                        select="concat('db/', $temp_url)"/>
        </xsl:when>
        


        <xsl:when test="$protocol='nfs' or $protocol='smb'">
          <xsl:value-of disable-output-escaping='yes'
                        select="concat($protocol,'/',$temp_url)"/>
        </xsl:when>
        <xsl:when test="$protocol='unc'">
          <xsl:value-of disable-output-escaping='yes' select="concat('file://', $display_url2)"/>
        </xsl:when>

        <xsl:otherwise>
          <xsl:value-of disable-output-escaping='yes' select="U"/>
        </xsl:otherwise>
      </xsl:choose>
      <xsl:text disable-output-escaping='yes'>"&gt;</xsl:text>
    </xsl:if>

    <span id="title_{$res_num}" class="l">
    <xsl:choose>
      <xsl:when test="T">
        <span class= "goog-trans-section l" transId="gadget_{$res_num}">

<xsl:variable name="articleTitle">
<xsl:value-of select="MT[@N='name']/@V"/>
</xsl:variable>

<xsl:choose>
<xsl:when test="MT[@N='name']/@V"> 
<xsl:call-template name="reformat_keyword">          
<xsl:with-param name="orig_string" select="$articleTitle"/>
</xsl:call-template>
</xsl:when>

<xsl:otherwise> 
<xsl:call-template name="reformat_keyword">          
<xsl:with-param name="orig_string" select="T"/>
</xsl:call-template>
</xsl:otherwise>
</xsl:choose>          

        </span>
      </xsl:when>
      <xsl:otherwise><xsl:value-of select="$stripped_url"/></xsl:otherwise>
    </xsl:choose>
    </span>
    <xsl:if test="$link">
        <xsl:text disable-output-escaping='yes'>&lt;/a&gt;</xsl:text>
    </xsl:if>
  </xsl:if>

  <!-- *** Snippet Box *** -->

<xsl:variable name="contains_image">
<xsl:choose>
<xsl:when test="MT[@N='image']/@V">
has_image
</xsl:when>

<xsl:otherwise>
no_image
</xsl:otherwise>
</xsl:choose>
</xsl:variable>


<xsl:variable name="main_results_class">
    <xsl:choose>
      <xsl:when test="$render_dynamic_navigation = '1'">main-results</xsl:when>
      <xsl:otherwise>main-results-without-dn</xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

<xsl:variable name="result_with_dn">
<xsl:if test="$main_results_class ='main-results'">
<xsl:text> result_with_dn</xsl:text>
</xsl:if>
</xsl:variable>

<!-- S.MIRZA FIX DOC PREVIEW -->
<table cellpadding="0" cellspacing="0" border="0" class="{$contains_image}{$result_with_dn}">
<tr>
<td>
<!-- S.MIRZA FIX DOC PREVIEW -->

        <xsl:if test="$show_res_snippet != '0' and
                      $only_apps != '1'">

<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<xsl:variable name="store_locator_text">
<xsl:if test="
contains($requiredfields_val, 'contenttypename')">
<xsl:text> store_locator_text</xsl:text>
</xsl:if>
</xsl:variable>

<span id="snippet_{$res_num}" class= "goog-trans-section snippet_text{$store_locator_text}" transId="gadget_{$res_num}">

<xsl:choose>
<xsl:when test="contains($requiredfields_val, 'contenttypename')"> 
<xsl:value-of select="MT[@N='address']/@V"/>
<xsl:if test="MT[@N='phone']/@V">
<span style="display:block;"><xsl:text>Tel: </xsl:text><xsl:value-of select="MT[@N='phone']/@V"/></span>
</xsl:if>
</xsl:when>

<xsl:when test="MT[@N='leadtext']/@V"> 
<xsl:value-of select="MT[@N='leadtext']/@V"/>
</xsl:when>

<xsl:otherwise> 
<xsl:call-template name="reformat_keyword">          
<xsl:with-param name="orig_string" select="S"/>
</xsl:call-template>
</xsl:otherwise>
</xsl:choose>

</span>
        </xsl:if>
<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<xsl:if test="not(contains($requiredfields_val, 'contenttypename'))">
<span class="meta_details">

<xsl:variable name="country_meta_link_val" select="MT[@N='country'][position() = 1]/@V" />

<xsl:variable name="city_meta_link_val" select="MT[@N='city'][position() = 1]/@V" />

<xsl:variable name="product_meta_link_val" select="MT[@N='product'][position() = 1]/@V" />

<xsl:variable name="country_meta_link" select="MT[@N='countryUrl'][position() = 1]/@V" />
<xsl:variable name="city_meta_link" select="MT[@N='cityUrl'][position() = 1]/@V" />
<xsl:variable name="product_meta_link" select="MT[@N='productUrl'][position() = 1]/@V" />

<a class="meta_details_link" href="{$country_meta_link}" target="_blank"><xsl:value-of select="$country_meta_link_val" /></a>

<xsl:if test="MT[@N='city']/@V">
<xsl:text> | </xsl:text>
<a class="meta_details_link" href="{$city_meta_link}" target="_blank"><xsl:value-of select="$city_meta_link_val" /></a>
</xsl:if>

<xsl:if test="MT[@N='product']/@V">
<xsl:text> | </xsl:text>
<a class="meta_details_link" href="{$product_meta_link}" target="_blank"><xsl:value-of select="$product_meta_link_val" /></a>
</xsl:if>
</span>

<xsl:variable name="lastModifiedDate">
<xsl:value-of select="MT[@N='lastModifiedDate']/@V" />
</xsl:variable>

<xsl:variable name="day"><xsl:value-of select="tokenize($lastModifiedDate,'-')[3]" /></xsl:variable>

<xsl:variable name="month"><xsl:value-of select="tokenize($lastModifiedDate,'-')[2]" /></xsl:variable>

<xsl:variable name="year"><xsl:value-of select="tokenize($lastModifiedDate,'-')[1]" /></xsl:variable>

<!-- S.MIRZA REMOVE LEADING ZEROS -->
<xsl:variable name="customLastModifiedDate">
<xsl:value-of select="translate(concat(substring(translate($day, '0', ''), 1, 1), substring-after($day, substring(translate($day, '0', ''), 1, 1))), '.', '')" /><xsl:text>-</xsl:text><xsl:value-of select="translate(concat(substring(translate($month, '0', ''), 1, 1), substring-after($month, substring(translate($month, '0', ''), 1, 1))), '.', '')" /><xsl:text>-</xsl:text><xsl:value-of select="$year" />
</xsl:variable>

<xsl:if test="MT[@N='lastModifiedDate']/@V">
<span class="last_modified_date">
<xsl:value-of select="$customLastModifiedDate" /></span>
</xsl:if>

</xsl:if><!-- S.MIRZA if not store locator -->

        <!-- *** Meta tags *** -->
        <xsl:if test="$show_meta_tags != '0' and $only_apps != '1'">
          <xsl:apply-templates select="MT"/>
        </xsl:if>

        <xsl:if test="$only_apps != '1' and
                      ($show_res_snippet != '0' and string-length(S)) or
                      ($show_meta_tags != '0' and MT[(@N != '') or (@V != '')])">
        <br/>
        </xsl:if>

        <!-- *** URL *** -->
        <xsl:if test="$only_apps != '1' or
                      ($only_apps = '1' and $show_apps_segmented_ui != '1')">
<xsl:if test="$show_res_url_custom = '1'">
        <font color="{$res_url_color}" size="{$res_url_size}" class="word_break">
          <xsl:choose>
            <xsl:when test="not($url_indexed)">
              <xsl:if test="($show_res_size!='0') or
                            ($show_res_date!='0') or
                            ($show_res_cache!='0')">
                <xsl:text>Not Indexed:</xsl:text>
                <xsl:value-of select="$stripped_url"/>
              </xsl:if>
            </xsl:when>
            <xsl:otherwise>
              <xsl:choose>
<xsl:when test="$show_res_url != '0' and string-length( $stripped_url) &gt; 70 ">
     <xsl:value-of select="substring($stripped_url, 0, 75)"/>...
</xsl:when>

<xsl:otherwise>
     <xsl:value-of select="substring($stripped_url, 0, 75)"/>
</xsl:otherwise>
</xsl:choose>
            </xsl:otherwise>
          </xsl:choose>
        </font>
</xsl:if>
        </xsl:if>

        <!-- *** Miscellaneous (- size - date - cache) *** -->
        <xsl:if test="$url_indexed">
        <xsl:choose>
          <xsl:when test="'' != HAS/C/@ENC">
           <xsl:apply-templates select="HAS/C">
                         <xsl:with-param name="stripped_url" select="$stripped_url"/>
                         <xsl:with-param name="escaped_url" select="$escaped_url"/>
                         <xsl:with-param name="query" select="$query"/>
                         <xsl:with-param name="mime" select="@MIME"/>
                         <xsl:with-param name="date" select="FS[@NAME='date']/@VALUE"/>
                         <xsl:with-param name="result_num" select="$res_num"/>
           </xsl:apply-templates>
          </xsl:when>
          <xsl:otherwise>
          <xsl:call-template name="showdate">
              <xsl:with-param name="date" select="FS[@NAME='date']/@VALUE"/>
          </xsl:call-template>
          </xsl:otherwise>
          </xsl:choose>
        </xsl:if>

        <!-- *** Link to more links from this site *** -->
        <xsl:if test="HN">
          <br/>
          [
          <a ctype="sitesearch" class="f" href="{$gsa_search_root_path_prefix}?as_sitesearch={$crowded_url}&amp;{
            $search_url}">More results from <xsl:value-of select="$crowded_display_url"/></a>
          ]

        <!-- *** Link to aggregated results from database source *** -->
        <xsl:if test="starts-with($crowded_url, $db_url_protocol)">
        [
        <a ctype="db" class="f" href="dbaggr?sitesearch={$crowded_url}&amp;{
          $search_url}&amp;filter=0">View all data</a>
            ]
          </xsl:if>
        </xsl:if>


        <!-- *** Result Footer *** -->

<!-- ***** S.MIRZA SOCIAL SHARING ***** 
<xsl:if test="$show_social_sharing='1' and not(MT[@N='image']/@V)">
<xsl:call-template name="social_sharing" />
</xsl:if>-->

<!-- S.MIRZA FIX DOC PREVIEW -->
</td>
</tr>
</table>
<!-- S.MIRZA FIX DOC PREVIEW -->

<!-- ***** S.MIRZA SOCIAL SHARING ***** -->
<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<xsl:if test="$show_social_sharing='1' and not(contains($requiredfields_val, 'contenttypename'))">
<xsl:call-template name="social_sharing" />
</xsl:if>
</p>


<xsl:variable name="directionsLat">
<xsl:value-of select="MT[@N='latitude']/@V"/>
</xsl:variable>

<xsl:variable name="directionsLong">
<xsl:value-of select="MT[@N='longitude']/@V"/>
</xsl:variable>

<xsl:variable name="requiredfields_val" select="lower-case(/GSP/PARAM[@name='requiredfields']/@value)" />

<xsl:variable name="alt_shop_name">
<xsl:value-of select="encode-for-uri(MT[@N='name']/@V)" />
</xsl:variable>

<xsl:if test="/GSP/RES/R/MT[(@N='latitude')]/@V and $show_gmap_icon_canvas != '0' and contains($requiredfields_val, 'contenttypename')">
<a name="{$directionsLat}, {$directionsLong}, {$alt_shop_name}" class="locate_store gmap_button">Locate Store</a>
</xsl:if>

</div><!--result_holder-->

  <!-- *** End indenting as required (only supports 2 levels) *** -->
  <xsl:if test="@L='2'">
    <xsl:text disable-output-escaping="yes">&lt;/blockquote&gt;</xsl:text>
  </xsl:if>

</xsl:template>

<xsl:template name="content_icon">
<span><xsl:value-of select="MT[@N='storyType']/@value"/></span>
<xsl:choose>
<xsl:when test="MT[(@N='storyType') and (@V='Image')]">
<span class="image_content_icon"></span>
</xsl:when>
<xsl:when test="MT[(@N='storyType') and (@V='Video')]">
<span class="video_content_icon"></span>
</xsl:when>
<xsl:otherwise></xsl:otherwise>
</xsl:choose>
</xsl:template>

<!-- **********************************************************************
 S.MIRZA Expert Search Custom Template
     ********************************************************************** -->
<xsl:template name="custom_expert_search">

<div class="expert_search_container">

<xsl:for-each select="/GSP/RES/R">
<xsl:if test="MT[(@N='teamManaged')]/@V">
<xsl:variable name="expert_coach" select="MT[(@N='coachName')]/@V" />

<xsl:variable name="expert_image" select="MT[(@N='expertImage')]/@V" />

<xsl:variable name="expert_team" select="MT[(@N='teamManaged')]/@V" />

<xsl:variable name="expert_dob" select="MT[(@N='coachBorn')]/@V" />

<xsl:variable name="expert_nationality" select="MT[(@N='coachNationality')]/@V" />


<div class="expert_search_holder">
<div class="expert_image"><img src="{$expert_image}" /></div><!--expert_image-->
<div class="expert_details">
<p><strong>Name:</strong> <xsl:value-of select="$expert_coach" /></p>
<p><strong>Team Managed:</strong> <xsl:value-of select="$expert_team"/></p>
<p><strong>Date of Birth:</strong> <xsl:value-of select="$expert_dob"/></p>
<p><strong>Nationality:</strong> <xsl:value-of select="$expert_nationality"/></p>
</div><!--expert_details-->
</div><!--expert_search_holder-->

</xsl:if>
</xsl:for-each>

</div><!--expert_search_container-->
</xsl:template>


<!-- **********************************************************************
  Meta tag values within a result (do not customize)
     ********************************************************************** -->
<xsl:template match="MT">
  <br/>
  <span class="f"><xsl:value-of select="@N"/>: </span><xsl:value-of select="@V"/>
</xsl:template>

<!-- **********************************************************************
  A single keymatch result (do not customize)
     ********************************************************************** -->
<xsl:template match="GM">
    <div id="keymatch_holder">
<div id="keymatch_padded">
<strong><xsl:value-of select="$keymatch_text"/></strong><br />
          <a class="keymatch_link" ctype="keymatch" href="{GL}">
            <xsl:value-of select="GD"/>
          </a>
          <!--<br/>
            <span class="a">
               <xsl:value-of select="GL"/>
            </span>-->
</div><!--keymatch_padded-->
    </div><!--keymatch_holder-->
</xsl:template>


<!-- **********************************************************************
  Variables for reformatting keyword-match display (do not customize)
     ********************************************************************** -->
<xsl:variable name="keyword_orig_start" select="'&lt;b&gt;'"/>
<xsl:variable name="keyword_orig_end" select="'&lt;/b&gt;'"/>

<xsl:variable name="keyword_reformat_start">
  <xsl:if test="$res_keyword_format">
    <xsl:text>&lt;</xsl:text>
    <xsl:value-of select="$res_keyword_format"/>
    <xsl:text>&gt;</xsl:text>
  </xsl:if>
  <xsl:if test="($res_keyword_size) or ($res_keyword_color)">
  <xsl:text>&lt;font</xsl:text>
  <xsl:if test="$res_keyword_size">
    <xsl:text> size="</xsl:text>
    <xsl:value-of select="$res_keyword_size"/>
    <xsl:text>"</xsl:text>
  </xsl:if>
  <xsl:if test="$res_keyword_color">
    <xsl:text> color="</xsl:text>
    <xsl:value-of select="$res_keyword_color"/>
    <xsl:text>"</xsl:text>
  </xsl:if>
  <xsl:text>&gt;</xsl:text>
  </xsl:if>
</xsl:variable>

<xsl:variable name="keyword_reformat_end">
  <xsl:if test="($res_keyword_size) or ($res_keyword_color)">
    <xsl:text>&lt;/font&gt;</xsl:text>
  </xsl:if>
  <xsl:if test="$res_keyword_format">
    <xsl:text>&lt;/</xsl:text>
    <xsl:value-of select="$res_keyword_format"/>
    <xsl:text>&gt;</xsl:text>
  </xsl:if>
</xsl:variable>

<!-- **********************************************************************
  Reformat the keyword match display in a title/snippet string
     (do not customize)
     ********************************************************************** -->
<xsl:template name="reformat_keyword">
  <xsl:param name="orig_string"/>

  <xsl:variable name="reformatted_1">
    <xsl:call-template name="replace_string">
      <xsl:with-param name="find" select="$keyword_orig_start"/>
      <xsl:with-param name="replace" select="$keyword_reformat_start"/>
      <xsl:with-param name="string" select="$orig_string"/>
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="reformatted_2">
    <xsl:call-template name="replace_string">
      <xsl:with-param name="find" select="$keyword_orig_end"/>
      <xsl:with-param name="replace" select="$keyword_reformat_end"/>
      <xsl:with-param name="string" select="$reformatted_1"/>
    </xsl:call-template>
  </xsl:variable>

  <xsl:value-of disable-output-escaping='yes' select="$reformatted_2"/>

</xsl:template>

<!-- **********************************************************************
S.MIRZA MOBILE PAGINATION TEMPLATE
*********************************************************************** -->

<xsl:template name="mobile_pagination">
    <xsl:param name="prev"/>
    <xsl:param name="next"/>
    <xsl:param name="view_begin"/>
    <xsl:param name="guess"/>

<xsl:variable name="mobile_pagination_view_begin"><xsl:value-of select="RES/@SN"/></xsl:variable>

<xsl:variable name="mobile_pagination_en"><xsl:value-of select="RES/@EN"/></xsl:variable>

<xsl:variable name="mobile_pagination_m"><xsl:value-of select="RES/M"/></xsl:variable>

<div id="mobile_pagination">

<xsl:choose>
<xsl:when test="(/GSP/PARAM[@name='start']/@value='0') or (not(/GSP/PARAM[@name='start']))">
<a ctype="nav.prev">
<div class="mobile_pagination_links mobile_faded" style="margin-right:20px">
Back
</div></a>
</xsl:when>

<xsl:otherwise>
<a ctype="nav.prev"
                   href="{$gsa_search_root_path_prefix}?{$search_url}&amp;start={$mobile_pagination_view_begin - $num_results - 1}">
<div class="mobile_pagination_links" style="margin-right:20px">
Back
</div>
</a>
</xsl:otherwise>
</xsl:choose>

<xsl:choose>
<xsl:when test="$mobile_pagination_m > $mobile_pagination_en">
<a ctype="nav.next"
                   href="{$gsa_search_root_path_prefix}?{$search_url}&amp;start={$mobile_pagination_view_begin + $num_results - 1}">
<div class="mobile_pagination_links" style="float:right;">
Next
</div>
</a>
</xsl:when>

<xsl:otherwise>
<a ctype="nav.next">
<div class="mobile_pagination_links mobile_faded" style="float:right;">
Next
</div>
</a>
</xsl:otherwise>
</xsl:choose>

<div class="clear"></div>

</div><!--mobile_pagination-->
</xsl:template>


<!-- **********************************************************************
  Helper templates for generating a result item (do not customize)
     ********************************************************************** -->

<!-- *** Miscellaneous: - size - date - cache *** -->
<xsl:template match="C">
    <xsl:param name="stripped_url"/>
    <xsl:param name="escaped_url"/>
    <xsl:param name="query"/>
    <xsl:param name="mime"/>
    <xsl:param name="date"/>
    <xsl:param name="result_num"/>

    <xsl:variable name="docid"><xsl:value-of select="@CID"/></xsl:variable>

    <xsl:if test="$show_res_size != '0'">
    <xsl:if test="not(@SZ='')">
        <font color="{$res_url_color}" size="{$res_url_size}">
          <xsl:text> - </xsl:text>
          <xsl:value-of select="@SZ"/>
        </font>
    </xsl:if>
    </xsl:if>

    <xsl:call-template name="showdate">
        <xsl:with-param name="date" select="$date"/>
    </xsl:call-template>

    <xsl:if test="$show_res_cache != '0'">
        <font color="{$res_url_color}" size="{$res_url_size}">
        <xsl:text> - </xsl:text>
        </font>
        <xsl:variable name="cache_encoding">
          <xsl:choose>
            <xsl:when test="'' != @ENC"><xsl:value-of select="@ENC"/></xsl:when>
            <xsl:otherwise>UTF-8</xsl:otherwise>
          </xsl:choose>
        </xsl:variable>
        <a ctype="cache" id="cache_link_{$result_num}" class="f"
              href="{$gsa_search_root_path_prefix}?q=cache:{$docid}:{$escaped_url}+{
                    $stripped_search_query}&amp;{$base_url}&amp;oe={$cache_encoding}">
          <xsl:choose>
            <xsl:when test="not($mime)">Cached</xsl:when>
            <xsl:when test="$mime='text/html'">Cached</xsl:when>
            <xsl:when test="$mime='text/plain'">Cached</xsl:when>
            <xsl:otherwise>Text Version</xsl:otherwise>
          </xsl:choose>
        </a>
        <xsl:if test="$show_translation = '1' and $only_apps != '1'">
          <xsl:call-template name="nbsp3"/>
          <a ctype="cache" id="translate_cache_link_{$result_num}" class="f trns-cache-link"
              href="{$gsa_search_root_path_prefix}?q=cache:{$docid}:{$escaped_url}+{
                   $stripped_search_query}&amp;{$base_url}&amp;oe={$cache_encoding}">Translated
          </a>
        </xsl:if>
    </xsl:if>

</xsl:template>

<xsl:template name="showdate">
    <xsl:param name="date"/>

    <xsl:if test="$show_res_date != '0'">
    <xsl:if test="($date != '')">
        <font color="{$res_url_color}" size="{$res_url_size}">
        <span style="float:right"><xsl:value-of select="$date"/></span>
        </font>
    </xsl:if>
    </xsl:if>
</xsl:template>


<!-- **********************************************************************
 Google navigation bar in result page (do not customize)
     ********************************************************************** -->
<xsl:template name="google_navigation">
    <xsl:param name="prev"/>
    <xsl:param name="next"/>
    <xsl:param name="view_begin"/>
    <xsl:param name="view_end"/>
    <xsl:param name="guess"/>
    <xsl:param name="navigation_style"/>
    <xsl:param name="dynamic_nav_bar"/>

  <!-- *** Override the navigation style to 'simple' type if result estimation
           is not available and the navigation type has been specified
           as 'google'. *** -->
  <xsl:variable name="navigation_style_to_use">
    <xsl:choose>
      <xsl:when test="$navigation_style = 'google' and $guess = ''">simple</xsl:when>
      <xsl:otherwise><xsl:value-of select="$navigation_style"/></xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <xsl:variable name="fontclass">
    <xsl:choose>
      <xsl:when test="$navigation_style_to_use = 'top'
          and $dynamic_nav_bar = '1'">dn-bar-nav</xsl:when>
      <xsl:when test="$navigation_style_to_use = 'top'">s</xsl:when>
      <xsl:otherwise>b</xsl:otherwise>
    </xsl:choose>
  </xsl:variable>

  <!-- *** Test to see if we should even show navigation *** -->
  <xsl:if test="($prev) or ($next)">

  <!-- *** Start Google result navigation bar *** -->

    <xsl:if test="$navigation_style_to_use != 'top'">
      <xsl:text disable-output-escaping="yes">&lt;center&gt;
        &lt;div class=&quot;n&quot;&gt;</xsl:text>
    </xsl:if>

<!-- S.MIRZA PUT BOTTOM NAVIGATION IN DIVs -->
    
<div id="bottom_navigation_holder">      

  <!-- *** Show previous navigation, if available *** -->
        <xsl:choose>
          <xsl:when test="$prev">
            <div id="previous_link">

              <span class="{$fontclass}">
                <a ctype="nav.prev"
                   href="{$gsa_search_root_path_prefix}?{$search_url}&amp;start={$view_begin - $num_results - 1}">
                <xsl:if test="$navigation_style_to_use = 'google'">

                  <img src="{$gsa_resource_root_path_prefix}/nav_previous.gif" width="68" height="26"
                    alt="Previous" border="0"/>

                 </xsl:if>
                <xsl:if test="$navigation_style_to_use = 'top'">
                  <xsl:text>&lt;</xsl:text><xsl:call-template name="nbsp"/>
                </xsl:if>
<img src="http://www.shahidmirzadesign.co.uk/stoneburn/responsive_design/previous_button.jpg" width="35" height="35" alt="Next" />
                <!--<xsl:text>Previous</xsl:text>-->
              </a>
              </span>
              <xsl:if test="$navigation_style_to_use != 'google'">
                  <xsl:call-template name="nbsp"/>
              </xsl:if>
            </div><!--previous_link-->
          </xsl:when>
          <xsl:otherwise>
            <div>
              <xsl:if test="$navigation_style_to_use = 'google'">
                <img src="{$gsa_resource_root_path_prefix}/nav_first.png" width="18" height="26"
                  alt="First" border="0"/>
                
              </xsl:if>
            </div>
          </xsl:otherwise>
        </xsl:choose>

        <xsl:if test="($navigation_style_to_use = 'google') or
                      ($navigation_style_to_use = 'link')">
  <!-- *** Google result set navigation *** -->
        <xsl:variable name="mod_end">
          <xsl:choose>
            <xsl:when test="$next"><xsl:value-of select="$guess"/></xsl:when>
            <xsl:otherwise><xsl:value-of select="$view_end"/></xsl:otherwise>
          </xsl:choose>
        </xsl:variable>

        <xsl:call-template name="result_nav">
          <xsl:with-param name="start" select="0"/>
          <xsl:with-param name="end" select="$mod_end"/>
          <xsl:with-param name="current_view" select="($view_begin)-1"/>
          <xsl:with-param name="navigation_style" select="$navigation_style_to_use"/>
        </xsl:call-template>
        </xsl:if>

  <!-- *** Show next navigation, if available *** -->
        <xsl:choose>
          <xsl:when test="$next">
            <div id="next_link">
              <xsl:if test="$navigation_style_to_use != 'google'">
                  <xsl:call-template name="nbsp"/>
              </xsl:if>
              <span class="{$fontclass}">
              <a ctype="nav.next" href="{$gsa_search_root_path_prefix}?{$search_url}&amp;start={$view_begin +
                $num_results - 1}">
                <xsl:if test="$navigation_style_to_use = 'google'">

                  <img src="{$gsa_resource_root_path_prefix}/nav_next.png" width="100" height="26"

                    alt="Next" border="0"/>
                 
                </xsl:if>
<img src="http://www.shahidmirzadesign.co.uk/stoneburn/responsive_design/next_button.jpg" width="35" height="35" alt="Next" />
                <!--<xsl:text>Next</xsl:text>-->
                <xsl:if test="$navigation_style_to_use = 'top'">
                  <xsl:call-template name="nbsp"/><xsl:text>&gt;</xsl:text>
                </xsl:if>
              </a>
              </span>
            </div><!--next_link-->
          </xsl:when>
          <xsl:otherwise>
            <div>
              <xsl:if test="$navigation_style_to_use != 'google'">
                <xsl:call-template name="nbsp"/>
              </xsl:if>
              <xsl:if test="$navigation_style_to_use = 'google'">
                <img src="{$gsa_resource_root_path_prefix}/nav_last.png" width="46" height="26"

                  alt="Last" border="0"/>
                
              </xsl:if>
            </div>
          </xsl:otherwise>
        </xsl:choose>

  <!-- *** End Google result bar *** -->
<div class="clear"></div>
    </div>

    <xsl:if test="$navigation_style_to_use != 'top'">
      <xsl:text disable-output-escaping="yes">&lt;/div&gt;
        &lt;/center&gt;</xsl:text>
    </xsl:if>
  </xsl:if>
</xsl:template>

<!-- **********************************************************************
 Helper templates for generating Google result navigation (do not customize)
   only shows 10 sets up or down from current view
     ********************************************************************** -->
<xsl:template name="result_nav">
  <xsl:param name="start" select="'0'"/>
  <xsl:param name="end"/>
  <xsl:param name="current_view"/>
  <xsl:param name="navigation_style"/>

  <!-- *** Choose how to show this result set *** -->
  <xsl:choose>
    <xsl:when test="($start)&lt;(($current_view)-(10*($num_results)))">
    </xsl:when>
    <xsl:when test="(($current_view)&gt;=($start)) and
                    (($current_view)&lt;(($start)+($num_results)))">
      <div class="pagination_link_selected">
        <xsl:if test="$navigation_style = 'google'">
          <img src="{$gsa_resource_root_path_prefix}/nav_current.gif" width="16" height="26" alt="Current"/>
          
        </xsl:if>
        <xsl:if test="$navigation_style = 'link'">
          <xsl:call-template name="nbsp"/>
        </xsl:if>
        <xsl:value-of
          select="(($start)div($num_results))+1"/>
        <xsl:if test="$navigation_style = 'link'">
          <xsl:call-template name="nbsp"/>
        </xsl:if>
      </div>
    </xsl:when>
    <xsl:otherwise>
      <div class="pagination_link">
        <xsl:if test="$navigation_style = 'link'">
            <xsl:call-template name="nbsp"/>
        </xsl:if>
        <a ctype="nav.page" href="{$gsa_search_root_path_prefix}?{$search_url}&amp;start={$start}">
        <xsl:if test="$navigation_style = 'google'">
          <img src="{$gsa_resource_root_path_prefix}/nav_page.gif" width="16" height="26" alt="Navigation"
               border="0"/>
          
        </xsl:if>
        <xsl:value-of select="(($start)div($num_results))+1"/>
        </a>
        <xsl:if test="$navigation_style = 'link'">
           <xsl:call-template name="nbsp"/>
        </xsl:if>
      </div><!--pagination_link-->
    </xsl:otherwise>
  </xsl:choose>

  <!-- *** Recursively iterate through result sets to display *** -->
  <xsl:if test="((($start)+($num_results))&lt;($end)) and
                ((($start)+($num_results))&lt;(($current_view)+
                (10*($num_results))))">
    <xsl:call-template name="result_nav">
      <xsl:with-param name="start" select="$start+$num_results"/>
      <xsl:with-param name="end" select="$end"/>
      <xsl:with-param name="current_view" select="$current_view"/>
      <xsl:with-param name="navigation_style" select="$navigation_style"/>
    </xsl:call-template>
  </xsl:if>

</xsl:template>

<!-- **********************************************************************
 S.MIRZA CUSTOM CURRENT PAGE
     ********************************************************************** -->

<xsl:template name="custom_current_page">

<xsl:variable name="custom_amount_of_pages" select="RES/M mod 10" />

<div class="search_results_title_holder">
<xsl:choose>
<xsl:when test="/GSP/RES/@SN &lt; 11">
<h2 class="search_took_header">Search results page 1 of <xsl:value-of select="ceiling (RES/M div 10)"/></h2>
</xsl:when>

<xsl:when test="$custom_amount_of_pages &lt; 5">
<h2 class="search_took_header">Search results page <xsl:value-of select="/GSP/PARAM[@name='start']/@value div 10 +1" /> of <xsl:value-of select="ceiling (RES/M div 10)"/></h2>
</xsl:when>

<xsl:otherwise>
<h2 class="search_took_header">Search results page <xsl:value-of select="/GSP/PARAM[@name='start']/@value div 10 +1"/> of <xsl:value-of select="ceiling (RES/M div 10)"/></h2>
</xsl:otherwise>
</xsl:choose>

</div><!--search_results_title_holder-->

</xsl:template>


<!-- **********************************************************************
 Top separation bar (do not customize)
     ********************************************************************** -->
<xsl:template name="top_sep_bar">
  <xsl:param name="text"/>
  <xsl:param name="show_info"/>
  <xsl:param name="time"/>

    <div id="search_info_bar">
        <div id="search_info_bar_header">
                   <b><xsl:value-of select="$text"/></b>
         </div><!-- Search info bar header -->
        <div id="search_info" class="hide_for_mobile">
          <xsl:if test="$show_info != 0">
            <xsl:if test="count(/GSP/RES/R)>0 ">
              <xsl:choose>
                <xsl:when test="(($access = 's' or $access = 'a') and /GSP/RES/M = '')">
                  Results <b><xsl:value-of select="RES/@SN"/></b> - <b><xsl:value-of select="RES/@EN"/></b> for <b><xsl:value-of select="$space_normalized_query"/></b>.
                </xsl:when>
                <xsl:otherwise>
                  Results <b><xsl:value-of select="RES/@SN"/></b> - <b><xsl:value-of select="RES/@EN"/></b> of about <b><xsl:value-of select="RES/M"/></b> for <b><xsl:value-of select="$space_normalized_query"/></b>.
                </xsl:otherwise>
              </xsl:choose>
            </xsl:if>
              Search took <span style="font-weight: bold;" id="search_time"><xsl:value-of select="round($time * 100.0) div 100.0"/></span> seconds.
            
          </xsl:if>
        </div>
<div class="clear"></div>
    </div><!--search_info_bar-->
    <hr class="z"/>
    <xsl:if test="$choose_sep_bar = 'line'">
      <hr size="1" color="gray"/>
    </xsl:if>
</xsl:template>

<!-- **********************************************************************
 Analytics script (do not customize)
     ********************************************************************** -->
<xsl:template name="analytics">
 <xsl:if test="string-length($analytics_account) != 0">
   <script type="text/javascript" src="{$analytics_script_url}"></script>
   <script type="text/javascript">
     var pageTracker = _gat._getTracker("<xsl:value-of select='$analytics_account'/>");
     pageTracker._trackPageview();
   </script>
 </xsl:if>
</xsl:template>

<!-- **********************************************************************
 Utility function for constructing copyright text (do not customize)
     ********************************************************************** -->
<xsl:template name="copyright">
<xsl:if test="$show_copyright != '0'">
  <center>
    <br/><br/>
    <p>
    <font face="arial,sans-serif" size="-1" color="#2f2f2f">
      Powered by Google Search Appliance</font>
    </p>
  </center>
</xsl:if>
</xsl:template>


<!-- **********************************************************************
 Utility functions for generating html entities
     ********************************************************************** -->
<xsl:template name="nbsp">
  <xsl:text disable-output-escaping="yes">&amp;nbsp;</xsl:text>
</xsl:template>
<xsl:template name="nbsp3">
  <xsl:call-template name="nbsp"/>
  <xsl:call-template name="nbsp"/>
  <xsl:call-template name="nbsp"/>
</xsl:template>
<xsl:template name="nbsp4">
  <xsl:call-template name="nbsp3"/>
  <xsl:call-template name="nbsp"/>
</xsl:template>
<xsl:template name="quot">
  <xsl:text disable-output-escaping="yes">&amp;quot;</xsl:text>
</xsl:template>
<xsl:template name="rsaquo">
  <dfn><xsl:text disable-output-escaping="yes">&amp;#8250;</xsl:text></dfn>
</xsl:template>
<xsl:template name="endash">
  <xsl:text disable-output-escaping="yes">&amp;#8211;</xsl:text>
</xsl:template>
<xsl:template name="copy">
  <xsl:text disable-output-escaping="yes">&amp;copy;</xsl:text>
</xsl:template>

<!-- **********************************************************************
 Utility functions for generating head elements so that the XSLT processor
 won't add a meta tag to the output, since it may specify the wrong
 encoding (utf8) in the meta tag.
     ********************************************************************** -->
<xsl:template name="plainHeadStart">
  <xsl:text disable-output-escaping="yes">&lt;head&gt;</xsl:text>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="robots" content="NOINDEX,NOFOLLOW"/>
  <xsl:text>
  </xsl:text>
</xsl:template>
<xsl:template name="plainHeadEnd">
  <xsl:text disable-output-escaping="yes">&lt;/head&gt;</xsl:text>
  <xsl:text>
  </xsl:text>
</xsl:template>


<!-- **********************************************************************
 Utility functions for generating head elements with a meta tag to the output
 specifying the character set as requested
     ********************************************************************** -->
<xsl:template name="langHeadStart">

  <xsl:if test="$is_embedded_mode != '1'">
  <xsl:text disable-output-escaping="yes">&lt;head&gt;</xsl:text>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="robots" content="NOINDEX,NOFOLLOW"/>
  <xsl:choose>
    <xsl:when test="PARAM[(@name='oe') and (@value='utf8')]">
      <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='oe') and (@value!='')]">
      <meta http-equiv="content-type" content="text/html; charset={PARAM[@name='oe']/@value}"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_zh-CN')]">
      <meta http-equiv="content-type" content="text/html; charset=GB2312"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_zh-TW')]">
      <meta http-equiv="content-type" content="text/html; charset=Big5"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_cs')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-2"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_da')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_nl')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_en')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_et')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_fi')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_fr')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_de')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_el')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-7"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_iw')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-8-I"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_hu')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-2"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_is')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_it')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_ja')]">
      <meta http-equiv="content-type" content="text/html; charset=Shift_JIS"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_ko')]">
      <meta http-equiv="content-type" content="text/html; charset=EUC-KR"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_lv')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_lt')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_no')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_pl')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-2"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_pt')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_ro')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-2"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_ru')]">
      <meta http-equiv="content-type" content="text/html; charset=windows-1251"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_es')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:when test="PARAM[(@name='lr') and (@value='lang_sv')]">
      <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"/>
    </xsl:when>
    <xsl:otherwise>
      <meta http-equiv="content-type" content="text/html; charset="/>
    </xsl:otherwise>
  </xsl:choose>
  </xsl:if>

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false&amp;libraries=drawing"></script>

  <!-- UAR v2 - Load the right CSS file for the UAR UI component,
       as required. This should be placed in the head section of the
       document. -->
  <xsl:if test="$show_onebox != '0'">
    <xsl:if test="/GSP/ENTOBRESULTS/OBRES/provider = $uar_provider">
    <xsl:choose>
      <xsl:when test="$document_direction = 'rtl'">
        <link rel="stylesheet"
            href="{$gsa_resource_root_path_prefix}/uardesktop_rtl.css"
            type="text/css" />
      </xsl:when>
      <xsl:otherwise>
        <link rel="stylesheet"
            href="{$gsa_resource_root_path_prefix}/uardesktop.css"
            type="text/css" />
      </xsl:otherwise>
    </xsl:choose>
    <!-- Override below styles to change the look and feel of the UAR section by
         adding appropriate CSS style properties. -->
    <style>
      /**
       * Background (default: #f2f7ff) and border-color (default: #ebebeb)
       * property for the UAR section.
       */
      .gsa-uar-container {
      }
      /* Description title color. Default is #555. */
      .gsa-uar-container h2 {
      }
      /* Color of the URL text. Default is #0e774a. */
      .gsa-uar-record cite {
      }
      <xsl:if test="$is_disable_style_in_embedded_mode = '1'">
      .gsa-uar-container {
        background: none;
      }
      .oneboxResults .gsa-uar-url-field, .oneboxResults .gsa-uar-title-field {
        width: 99%;
      }
      </xsl:if>
    </style>
    </xsl:if>
  </xsl:if>

  <!-- Expert Search - Load the right CSS file for the expert search UI
       component. -->
  <xsl:if test="$is_expert_search_configured = '1'">
    <xsl:call-template name="include_expert_search_css">
      <xsl:with-param name="doc_dir" select="$document_direction" />
      <xsl:with-param name="src_prefix" select="$gsa_resource_root_path_prefix" />
    </xsl:call-template>
    <!-- Override below styles to change the look and feel of the expert search
         section by adding appropriate CSS style properties. -->
    <style type="text/css">
      #exp-results-container {
        margin-bottom: 20px;
        margin-left: 10px;
        width: 85%;
      }
      /* Container holding the widget view. */
      .gsa-exp-container {
        font-size: 100%;
      }
      /* Header title for results. */
      .gsa-exp-header h2 {
      }
      /* Every row in the info section of the widget/expanded view. */
      .gsa-exp-info-row {
      }
      /**
       * Target a specific row in the info section of widget/expanded view.
       * Create CSS classes with different row numbers as displayed below to
       * target specific rows.
       */
      .gsa-exp-info-row-1 {
      }
      /**
       * Every field in each row in the info section of the widget/expanded
       * view.
       */
      .gsa-exp-info-column-ele {
      }
      /**
       * Target a specific row and column in the info section of widget/expanded
       * view. Create CSS classes with different row / column numbers as
       * displayed below to target specific rows.
       */
      .gsa-exp-info-row-1-col-1 {
      }
      /* Pagination bar in the widget view. */
      ol.gsa-exp-pagination {
      }
      <xsl:if test="$is_disable_style_in_embedded_mode = '1'">
      .gsa-exp-container,
      .gsa-exp-header h2,
      .gsa-exp-header a,
      ol.gsa-exp-results li {
        font-size: inherit;
      }
      ol.gsa-exp-pagination a, ol.gsa-exp-pagination span {
        color: inherit;
      }
      </xsl:if>
    </style>
  </xsl:if>
  <script type="text/javascript">
    /* Returns the root path prefix for full-refresh search requests. */
    function GSA_getSearchRootPathPrefix() {
      return '<xsl:value-of select="$gsa_search_root_path_prefix" />';
    }
    /* Returns the root path prefix for resources. */
    function GSA_getResourceRootPathPrefix() {
      return '<xsl:value-of select="$gsa_resource_root_path_prefix" />';
    }
    /* Checks if the search results is accessed in embedded mode or not. */
    function GSA_isEmbeddedMode() {
      return <xsl:value-of
          select="if ($is_embedded_mode = '1') then 'true' else 'false'" />;
    }
  </script>
  <xsl:text>
  </xsl:text>
</xsl:template>

<xsl:template name="langHeadEnd">
  <xsl:if test="$is_embedded_mode != '1'">

<link rel="stylesheet" type="text/css" href="https://s3-eu-west-1.amazonaws.com/gsa-cdn/globalblue/css/gsa_search_css.css" />

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=10.0" />


<!-- ****************************************************************************************************
S.MIRZA PASTE ALL FILES FROM Global Blue
**************************************************************************************************** -->

<link rel="shortcut icon" href="http://www.globalblue.com/skins/global-blue/images/favicon.ico" type="image/x-icon" />

<link rel="stylesheet" type="text/css" href="http://www.globalblue.com/skins/global-blue/css/themestent.css" />

<link rel="stylesheet" type="text/css" href="http://www.globalblue.com/skins/global-blue/css/app.css" />

<link rel="stylesheet" type="text/css" href="http://www.globalblue.com/skins/global-blue/css/gsa.custom.css" />

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

<script src="https://s3-eu-west-1.amazonaws.com/gsa-cdn/globalblue/js/gb_search.js"></script>

<script type="text/javascript" src="http://www.globalblue.com/skins/global-blue/js/bootstrap.js"></script>

<script type="text/javascript" src="http://www.globalblue.com/skins/global-blue/js/plugins.min.js"></script>

<script type="text/javascript" src="http://www.globalblue.com/skins/global-blue/js/app-search.js"></script>

<script type="text/javascript" src="http://www.globalblue.com/skins/global-blue/js/modernizr.js"></script>

<!-- ****************************************************************************************************
S.MIRZA END OF FILES FROM CLOUD SHERPAS
**************************************************************************************************** -->

<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>

<xsl:if test="$show_user_location = '1'">
<script>
/* S.MIRZA START OF GEOLOCATION */
// Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

currentPosition = pos;

/* $('#current_position').val(currentPosition);

     var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos
       // content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });

  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }


function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }
} */

});
}

/* S.MIRZA END OF GEO LOCATION */
</script>
</xsl:if>

  <xsl:text disable-output-escaping="yes">&lt;/head&gt;</xsl:text>
  </xsl:if>
  <xsl:text>
  </xsl:text>
</xsl:template>

<!-- *** Generates the <body> section for the search results page. *** -->
<xsl:template name="generate_html_body_for_search_results">
  <!-- Import all required JavaScript modules based on enabled features. -->
  <xsl:if test="$show_suggest = '1' or $show_res_clusters = '1'">
    <script type="text/javascript"
        src="{$gsa_resource_root_path_prefix}/common.js"></script>
    <script type="text/javascript"
        src="{$gsa_resource_root_path_prefix}/xmlhttp.js"></script>
    <script type="text/javascript"
        src="{$gsa_resource_root_path_prefix}/uri.js"></script>
  </xsl:if>
  <xsl:if test="$show_res_clusters = '1'">
    <script type="text/javascript"
        src="{$gsa_resource_root_path_prefix}/cluster.js"></script>
  </xsl:if>
  <xsl:if test="$show_suggest = '1'">
    <xsl:call-template name="gsa_suggest" />
  </xsl:if>
  <!-- Add required JS function calls based on enabled features. -->
  <xsl:variable name="ss_load_call">
    <!-- Initialize suggest control. -->
    <xsl:if test="$show_suggest != '0'">
      <xsl:text disable-output-escaping="yes">ss_sf();</xsl:text>
    </xsl:if>
  </xsl:variable>
  <xsl:variable name="cs_load_call">
    <!-- Initialize results clustering. -->
    <xsl:if test="$show_res_clusters = '1'">
      <xsl:text disable-output-escaping="yes">cs_loadClusters('</xsl:text>
      <xsl:value-of select="$search_url_escaped" />
      <xsl:text disable-output-escaping="yes">', cs_drawClusters);</xsl:text>
    </xsl:if>
  </xsl:variable>
  <!-- Do not render body tag in embedded mode. -->
  <xsl:if test="$is_embedded_mode != '1'">
    <xsl:text disable-output-escaping="yes">&lt;</xsl:text>
    <xsl:text>body onLoad="resetForms(); fixFileLinks();</xsl:text>
    <xsl:value-of select="$cs_load_call"/>
    <xsl:value-of select="$ss_load_call"/>
    <xsl:text disable-output-escaping="yes">" dir="ltr"&gt;</xsl:text>
  </xsl:if>
  <!-- Render search results section. -->
  <xsl:call-template name="search_results_body"/>
  <!-- Make required onload JS calls directly when in embedded mode. -->
  <xsl:if test="$is_embedded_mode = '1'">
    <script type="text/javascript">
      <xsl:value-of select="$cs_load_call"/>
    </script>
  </xsl:if>
  <!-- Create the input field element for expert search, if enabled. -->
  <xsl:call-template name="include_expert_search_history_input" />
  <!-- Initialize side bar if enabled. -->
  <xsl:if test="$show_sidebar = '1'">
    <script type="text/javascript">
     initSidebar();
    </script>
  </xsl:if>
  <xsl:if test="$is_embedded_mode != '1'">
    <xsl:text disable-output-escaping="yes">&lt;/body&gt;</xsl:text>
  </xsl:if>
</xsl:template>

<!-- **********************************************************************
 Utility functions (do not customize)
     ********************************************************************** -->

<!-- *** Find the substring after the last occurence of a separator *** -->
<xsl:template name="last_substring_after">

  <xsl:param name="string"/>
  <xsl:param name="separator"/>
  <xsl:param name="fallback"/>

  <xsl:variable name="newString"
    select="substring-after($string, $separator)"/>

  <xsl:choose>
    <xsl:when test="$newString!=''">
      <xsl:call-template name="last_substring_after">
        <xsl:with-param name="string" select="$newString"/>
        <xsl:with-param name="separator" select="$separator"/>
        <xsl:with-param name="fallback" select="$newString"/>
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$fallback"/>
    </xsl:otherwise>
  </xsl:choose>

</xsl:template>

<!-- *** Find and replace *** -->
<xsl:template name="replace_string">
  <xsl:param name="find"/>
  <xsl:param name="replace"/>
  <xsl:param name="string"/>
  <xsl:choose>
    <xsl:when test="contains($string, $find)">
      <xsl:value-of select="substring-before($string, $find)"/>
      <xsl:value-of select="$replace"/>
      <xsl:call-template name="replace_string">
        <xsl:with-param name="find" select="$find"/>
        <xsl:with-param name="replace" select="$replace"/>
        <xsl:with-param name="string"
          select="substring-after($string, $find)"/>
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$string"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

<!-- *** Decode hex encoding *** -->
<xsl:template name="decode_hex">
  <xsl:param name="encoded" />

  <xsl:variable name="hex" select="'0123456789ABCDEF'" />
  <xsl:variable name="ascii"> !"#$%&amp;'()*+,-./0123456789:;&lt;=&gt;?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~</xsl:variable>

  <xsl:choose>
    <xsl:when test="contains($encoded,'%')">
      <xsl:value-of select="substring-before($encoded,'%')" />
      <xsl:variable name="hexpair" select="translate(substring(substring-after($encoded,'%'),1,2),'abcdef','ABCDEF')" />
      <xsl:variable name="decimal" select="(string-length(substring-before($hex,substring($hexpair,1,1))))*16 + string-length(substring-before($hex,substring($hexpair,2,1)))" />
      <xsl:choose>
        <xsl:when test="$decimal &lt; 127 and $decimal &gt; 31">
          <xsl:value-of select="substring($ascii,$decimal - 31,1)" />
        </xsl:when>
        <xsl:when test="$decimal &gt; 159">
          <xsl:text disable-output-escaping="yes">%</xsl:text>
          <xsl:value-of select="$hexpair" />
        </xsl:when>
        <xsl:otherwise>?</xsl:otherwise>
      </xsl:choose>
      <xsl:call-template name="decode_hex">
        <xsl:with-param name="encoded" select="substring(substring-after($encoded,'%'),3)" />
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$encoded" />
    </xsl:otherwise>
  </xsl:choose>

</xsl:template>

<!-- *** Convert UNC *** -->
<xsl:template name="convert_unc">
  <xsl:param name="string"/>
  <xsl:variable name="slash">/</xsl:variable>
  <xsl:variable name="backslash">\</xsl:variable>
  <xsl:variable name="escaped_ampersand">&amp;amp;</xsl:variable>
  <xsl:variable name="unescaped_ampersand">&amp;</xsl:variable>

  <xsl:variable name="converted_1">
    <xsl:call-template name="replace_string">
      <xsl:with-param name="find"    select="$slash"/>
      <xsl:with-param name="replace" select="$backslash"/>
      <xsl:with-param name="string"  select="$string"/>
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="converted_2">
    <xsl:call-template name="decode_hex">
      <xsl:with-param name="encoded" select="$converted_1"/>
    </xsl:call-template>
  </xsl:variable>

  <xsl:variable name="converted_3">
    <xsl:call-template name="replace_string">
      <xsl:with-param name="find"    select="$escaped_ampersand"/>
      <xsl:with-param name="replace" select="$unescaped_ampersand"/>
      <xsl:with-param name="string"  select="$converted_2"/>
    </xsl:call-template>
  </xsl:variable>

  <xsl:value-of disable-output-escaping='yes' select="concat($backslash,$backslash,$converted_3)"/>

</xsl:template>

<!-- **********************************************************************
 Display error messages
     ********************************************************************** -->
<xsl:template name="error_page">
  <xsl:param name="errorMessage"/>
  <xsl:param name="errorDescription"/>

  <html>
    <xsl:call-template name="plainHeadStart"/>
      <title><xsl:value-of select="$error_page_title"/></title>
            <xsl:call-template name="style"/>
    <xsl:call-template name="plainHeadEnd"/>
    <body dir="ltr">
      <xsl:call-template name="personalization"/>
      <xsl:call-template name="analytics"/>

            <xsl:call-template name="my_page_header"/>

            <xsl:if test="$show_logo != '0'">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                          <td rowspan="3" valign="top">
                          <xsl:call-template name="logo"/>
                          <xsl:call-template name="nbsp3"/>
                        </td>
                  </tr>
                </table>
            </xsl:if>

      <xsl:call-template name="top_sep_bar">
        <xsl:with-param name="text" select="$sep_bar_error_text"/>
                <xsl:with-param name="show_info" select="0"/>
        <xsl:with-param name="time" select="0"/>
      </xsl:call-template>

      <p>
      <table width="99%" border="0" cellpadding="2" cellspacing="0">
        <tr>
          <td><font color="#990000" size="+1">Message:</font></td>
          <td><font color="#990000" size="+1"><xsl:value-of select="$errorMessage"/></font></td>
        </tr>
        <tr>
          <td><font color="#990000">Description:</font></td>
          <td><font color="#990000"><xsl:value-of select="$errorDescription"/></font></td>
        </tr>
        <tr>
          <td><font color="#990000">Details:</font></td>
          <td><font color="#990000"><xsl:copy-of select="/"/></font></td>
        </tr>
      </table>
      </p>

          <hr/>
          <xsl:call-template name="copyright"/>
          <xsl:call-template name="my_page_footer"/>

    </body>
  </html>
</xsl:template>


<!-- **********************************************************************
 Google Desktop for Enterprise integration templates
     ********************************************************************** -->
<xsl:template name="desktop_tab">

  <!-- *** Show the Google tabs *** -->

  <font size="-1">
    <a class="q" onClick="return window.qs?qs(this):1" ctype="desk.web" href="http://www.google.com/search?q={$qval}">Web</a>
  </font>

  <xsl:call-template name="nbsp4"/>

  <font size="-1">
    <a class="q" onClick="return window.qs?qs(this):1" ctype="desk.images"  href="http://images.google.com/images?q={$qval}">Images</a>
  </font>

  <xsl:call-template name="nbsp4"/>

  <font size="-1">
    <a class="q" onClick="return window.qs?qs(this):1" ctype="desk.groups" href="http://groups.google.com/groups?q={$qval}">Groups</a>
  </font>

  <xsl:call-template name="nbsp4"/>

  <font size="-1">
    <a class="q" onClick="return window.qs?qs(this):1" ctype="desk.news"  href="http://news.google.com/news?q={$qval}">News</a>
  </font>

  <xsl:call-template name="nbsp4"/>

  <font size="-1">
    <a class="q" onClick="return window.qs?qs(this):1" ctype="desk.local"  href="http://local.google.com/local?q={$qval}">Local</a>
  </font>

  <xsl:call-template name="nbsp4"/>

  <!-- *** Show the desktop and web tabs *** -->

  <xsl:if test="CUSTOM/HOME">
    <xsl:comment>trh2</xsl:comment>
  </xsl:if>
  <xsl:if test="Q">
    <xsl:comment>trl2</xsl:comment>
  </xsl:if>

  <!-- *** Show the appliance tab *** -->
  <font size="-1"><b><xsl:value-of select="$egds_appliance_tab_label"/></b></font>

</xsl:template>

<xsl:template name="desktop_results">
  <xsl:comment>tro2</xsl:comment>
</xsl:template>

<!-- **********************************************************************
  OneBox results (if any)
     ********************************************************************** -->
<xsl:template name="onebox">
  <xsl:for-each select="/GSP/ENTOBRESULTS">
    <xsl:apply-templates/>
  </xsl:for-each>
</xsl:template>

<!-- **********************************************************************
s.MIRZA Geo map results - JB:Edit
     ********************************************************************** -->
 
<xsl:template name="LATLNG">  	
<xsl:for-each select="/GSP/RES/R">
<xsl:variable name="lat"/>
<xsl:variable name="long"/>
<xsl:for-each select="MT">
<xsl:if test="@N='latitude'">
                                                                            	new google.maps.Marker({
  	                                                                                      	position: new google.maps.LatLng(
                                                                            	<xsl:variable  name="lat"><xsl:value-of select="@V"/></xsl:variable>
                                                                            	<xsl:value-of select="$lat"/>,
                                                            	</xsl:if>
                                                            	<xsl:if test="@N='longitude'">
                                                                            	<xsl:variable  name="long"><xsl:value-of select="@V"/></xsl:variable>
                                                                            	<xsl:value-of select="$long"/>
                                                                            	),
  	                                                                                      	title:"Branch Locator"
                                                                                            	}).setMap(map);

//removed geolocation from here
                                                            	</xsl:if>
                                            	</xsl:for-each>
                            	</xsl:for-each>
            	</xsl:template>
 
<!-- **********************************************************************
  Geo results - End JB:Edit
     ********************************************************************** -->

<!-- S.MIRZA generate markers by grabbing all the lat and longs -->
<xsl:template name="result_markers">

<xsl:for-each select="/GSP/RES/R[MT[@N='latitude']/@V!= '']">

<xsl:variable name="store_url">
<xsl:if test="MT[@N='paid']/@V = 'true'">
<xsl:value-of select="MT[@N='url']/@V" />
</xsl:if>
</xsl:variable>


<xsl:variable name="encoded_name" select="encode-for-uri(MT[@N='name']/@V)"/>
<xsl:variable name="encoded_leadtext" select="encode-for-uri(MT[@N='leadtext']/@V)"/>

<xsl:choose>
<xsl:when test="MT[@N='paid']/@V = 'true'">
[<xsl:text>'</xsl:text><h4><a class="store_link" href="{$store_url}"><xsl:value-of select="$encoded_name"/></a></h4>
<xsl:value-of select="$encoded_leadtext"/><xsl:text>'</xsl:text>, <xsl:value-of select="MT[@N='latitude']/@V"/>, <xsl:value-of select="MT[@N='longitude']/@V"/>, <xsl:text>'</xsl:text><xsl:value-of select="MT[@N='storyType'][position() = 2]/@V"/><xsl:text>'</xsl:text>,  <xsl:text>'</xsl:text><xsl:value-of select="MT[@N='paid']/@V = 'true'" /><xsl:text>'</xsl:text>, <xsl:value-of select="position()"/>]

<!-- S.MIRZA remove last comma -->
<xsl:if test="position() != last()">
        <xsl:text>,</xsl:text>
      </xsl:if>
</xsl:when>

<xsl:otherwise>
[<xsl:text>'</xsl:text><h4><xsl:value-of select="$encoded_name"/></h4>
<xsl:value-of select="$encoded_leadtext"/><xsl:text>'</xsl:text>, <xsl:value-of select="MT[@N='latitude']/@V"/>, <xsl:value-of select="MT[@N='longitude']/@V"/>, <xsl:text>'</xsl:text><xsl:value-of select="MT[@N='storyType'][position() = 2]/@V"/><xsl:text>'</xsl:text>, <xsl:text>'</xsl:text><xsl:value-of select="MT[@N='paid']/@V = 'true'" /><xsl:text>'</xsl:text>, <xsl:value-of select="position()"/>]

<!-- S.MIRZA remove last comma -->
<xsl:if test="position() != last()">
        <xsl:text>,</xsl:text>
      </xsl:if>
</xsl:otherwise>
</xsl:choose>
</xsl:for-each>

</xsl:template>

<!-- S.MIRZA GEO MAP LAT LONG -->
<xsl:template name="lat">
<xsl:for-each select="/GSP/RES/R[MT[@N='latitude']/@V!= '']">
<xsl:if test="@N='1'">
        <xsl:value-of select="MT[@N='latitude']/@V"/>,
</xsl:if>
</xsl:for-each>
</xsl:template>

<xsl:template name="long">
<xsl:for-each select="/GSP/RES/R[MT[@N='latitude']/@V!= '']">
<xsl:if test="@N='1'">
        <xsl:value-of select="MT[@N='longitude']/@V"/>
</xsl:if>
</xsl:for-each>
</xsl:template>

<!-- **********************************************************************
 Swallow unmatched elements
     ********************************************************************** -->
<xsl:template match="@*|node()"/>
</xsl:stylesheet>


<!-- *** END OF STYLESHEET *** -->