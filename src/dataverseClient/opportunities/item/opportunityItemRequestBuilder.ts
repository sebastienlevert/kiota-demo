import {Opportunity} from '../../models/microsoft/dynamics/cRM/';
import {createOpportunityFromDiscriminatorValue} from '../../models/microsoft/dynamics/cRM/createOpportunityFromDiscriminatorValue';
import {ODataError} from '../../models/microsoft/dynamics/cRM/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/microsoft/dynamics/cRM/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CalculateActualValueOpportunityRequestBuilder} from './calculateActualValueOpportunity/calculateActualValueOpportunityRequestBuilder';
import {CampaignidRequestBuilder} from './campaignid/campaignidRequestBuilder';
import {CreatedbyRequestBuilder} from './createdby/createdbyRequestBuilder';
import {CreatedonbehalfbyRequestBuilder} from './createdonbehalfby/createdonbehalfbyRequestBuilder';
import {CreatedOpportunity_BulkOperationLogsRequestBuilder} from './createdOpportunity_BulkOperationLogs/createdOpportunity_BulkOperationLogsRequestBuilder';
import {BulkoperationlogItemRequestBuilder} from './createdOpportunity_BulkOperationLogs/item/bulkoperationlogItemRequestBuilder';
import {Customerid_accountRequestBuilder} from './customerid_account/customerid_accountRequestBuilder';
import {Customerid_contactRequestBuilder} from './customerid_contact/customerid_contactRequestBuilder';
import {GetQuantityDecimalWithProductWithUoMRequestBuilder} from './getQuantityDecimalWithProductWithUoM/getQuantityDecimalWithProductWithUoMRequestBuilder';
import {LeadItemRequestBuilder} from './lead_qualifying_opportunity/item/leadItemRequestBuilder';
import {Lead_qualifying_opportunityRequestBuilder} from './lead_qualifying_opportunity/lead_qualifying_opportunityRequestBuilder';
import {ModifiedbyRequestBuilder} from './modifiedby/modifiedbyRequestBuilder';
import {ModifiedonbehalfbyRequestBuilder} from './modifiedonbehalfby/modifiedonbehalfbyRequestBuilder';
import {Msdyn_AccountManagerIdRequestBuilder} from './msdyn_AccountManagerId/msdyn_AccountManagerIdRequestBuilder';
import {Msdyn_CloseAllOpportunityQuotesRequestBuilder} from './msdyn_CloseAllOpportunityQuotes/msdyn_CloseAllOpportunityQuotesRequestBuilder';
import {Msdyn_ContractOrganizationalUnitIdRequestBuilder} from './msdyn_ContractOrganizationalUnitId/msdyn_ContractOrganizationalUnitIdRequestBuilder';
import {Msdyn_CreateQuoteFromOpportunityRequestBuilder} from './msdyn_CreateQuoteFromOpportunity/msdyn_CreateQuoteFromOpportunityRequestBuilder';
import {Msdyn_opportunitypricelistItemRequestBuilder} from './msdyn_opportunity_msdyn_opportunitypricelist_Opportunity/item/msdyn_opportunitypricelistItemRequestBuilder';
import {Msdyn_opportunity_msdyn_opportunitypricelist_OpportunityRequestBuilder} from './msdyn_opportunity_msdyn_opportunitypricelist_Opportunity/msdyn_opportunity_msdyn_opportunitypricelist_OpportunityRequestBuilder';
import {Msdyn_salesroutingrunItemRequestBuilder} from './msdyn_opportunity_msdyn_salesroutingrun_targetobject/item/msdyn_salesroutingrunItemRequestBuilder';
import {Msdyn_opportunity_msdyn_salesroutingrun_targetobjectRequestBuilder} from './msdyn_opportunity_msdyn_salesroutingrun_targetobject/msdyn_opportunity_msdyn_salesroutingrun_targetobjectRequestBuilder';
import {Msdyn_workorderItemRequestBuilder} from './msdyn_opportunity_msdyn_workorder/item/msdyn_workorderItemRequestBuilder';
import {Msdyn_opportunity_msdyn_workorderRequestBuilder} from './msdyn_opportunity_msdyn_workorder/msdyn_opportunity_msdyn_workorderRequestBuilder';
import {Msdyn_playbookinstanceItemRequestBuilder} from './msdyn_playbookinstance_opportunity/item/msdyn_playbookinstanceItemRequestBuilder';
import {Msdyn_playbookinstance_opportunityRequestBuilder} from './msdyn_playbookinstance_opportunity/msdyn_playbookinstance_opportunityRequestBuilder';
import {Msdyn_PredictiveScoreIdRequestBuilder} from './msdyn_PredictiveScoreId/msdyn_PredictiveScoreIdRequestBuilder';
import {Msdyn_salessuggestionItemRequestBuilder} from './msdyn_salessuggestion_opportunity_qualifiedrecord/item/msdyn_salessuggestionItemRequestBuilder';
import {Msdyn_salessuggestion_opportunity_qualifiedrecordRequestBuilder} from './msdyn_salessuggestion_opportunity_qualifiedrecord/msdyn_salessuggestion_opportunity_qualifiedrecordRequestBuilder';
import {Msdyn_segmentidRequestBuilder} from './msdyn_segmentid/msdyn_segmentidRequestBuilder';
import {Msdyn_workordertypeRequestBuilder} from './msdyn_workordertype/msdyn_workordertypeRequestBuilder';
import {ActioncardItemRequestBuilder} from './opportunity_actioncard/item/actioncardItemRequestBuilder';
import {Opportunity_actioncardRequestBuilder} from './opportunity_actioncard/opportunity_actioncardRequestBuilder';
import {ActivitypartyItemRequestBuilder} from './opportunity_activity_parties/item/activitypartyItemRequestBuilder';
import {Opportunity_activity_partiesRequestBuilder} from './opportunity_activity_parties/opportunity_activity_partiesRequestBuilder';
import {ActivitypointerItemRequestBuilder} from './opportunity_ActivityPointers/item/activitypointerItemRequestBuilder';
import {Opportunity_ActivityPointersRequestBuilder} from './opportunity_ActivityPointers/opportunity_ActivityPointersRequestBuilder';
import {AnnotationItemRequestBuilder} from './opportunity_Annotation/item/annotationItemRequestBuilder';
import {Opportunity_AnnotationRequestBuilder} from './opportunity_Annotation/opportunity_AnnotationRequestBuilder';
import {AppointmentItemRequestBuilder} from './opportunity_Appointments/item/appointmentItemRequestBuilder';
import {Opportunity_AppointmentsRequestBuilder} from './opportunity_Appointments/opportunity_AppointmentsRequestBuilder';
import {AsyncoperationItemRequestBuilder} from './opportunity_AsyncOperations/item/asyncoperationItemRequestBuilder';
import {Opportunity_AsyncOperationsRequestBuilder} from './opportunity_AsyncOperations/opportunity_AsyncOperationsRequestBuilder';
import {BulkdeletefailureItemRequestBuilder} from './opportunity_BulkDeleteFailures/item/bulkdeletefailureItemRequestBuilder';
import {Opportunity_BulkDeleteFailuresRequestBuilder} from './opportunity_BulkDeleteFailures/opportunity_BulkDeleteFailuresRequestBuilder';
import {ConnectionItemRequestBuilder as i8d2824151947bf3cfe7cfa9b15b1ebeeb80e901718c920687111c733b02ddc16} from './opportunity_connections1/item/connectionItemRequestBuilder';
import {Opportunity_connections1RequestBuilder} from './opportunity_connections1/opportunity_connections1RequestBuilder';
import {ConnectionItemRequestBuilder as i2468cd43491d0c0b3ebbbe64d2144f8b72d947cf790019830d547bd6ac5bbfaf} from './opportunity_connections2/item/connectionItemRequestBuilder';
import {Opportunity_connections2RequestBuilder} from './opportunity_connections2/opportunity_connections2RequestBuilder';
import {DuplicaterecordItemRequestBuilder as i6ce41d07c69822ba13282a92f636e262a5fb74116f00e761878e6028742136cd} from './opportunity_DuplicateBaseRecord/item/duplicaterecordItemRequestBuilder';
import {Opportunity_DuplicateBaseRecordRequestBuilder} from './opportunity_DuplicateBaseRecord/opportunity_DuplicateBaseRecordRequestBuilder';
import {DuplicaterecordItemRequestBuilder as i82aae98a854a8d761ee78ded21f86bf466074defcf4777f7cbb7eea844d22f14} from './opportunity_DuplicateMatchingRecord/item/duplicaterecordItemRequestBuilder';
import {Opportunity_DuplicateMatchingRecordRequestBuilder} from './opportunity_DuplicateMatchingRecord/opportunity_DuplicateMatchingRecordRequestBuilder';
import {EmailItemRequestBuilder} from './opportunity_Emails/item/emailItemRequestBuilder';
import {Opportunity_EmailsRequestBuilder} from './opportunity_Emails/opportunity_EmailsRequestBuilder';
import {FaxItemRequestBuilder} from './opportunity_Faxes/item/faxItemRequestBuilder';
import {Opportunity_FaxesRequestBuilder} from './opportunity_Faxes/opportunity_FaxesRequestBuilder';
import {InvoiceItemRequestBuilder} from './opportunity_invoices/item/invoiceItemRequestBuilder';
import {Opportunity_invoicesRequestBuilder} from './opportunity_invoices/opportunity_invoicesRequestBuilder';
import {LeadtoopportunitysalesprocessItemRequestBuilder} from './opportunity_leadtoopportunitysalesprocess/item/leadtoopportunitysalesprocessItemRequestBuilder';
import {Opportunity_leadtoopportunitysalesprocessRequestBuilder} from './opportunity_leadtoopportunitysalesprocess/opportunity_leadtoopportunitysalesprocessRequestBuilder';
import {LetterItemRequestBuilder} from './opportunity_Letters/item/letterItemRequestBuilder';
import {Opportunity_LettersRequestBuilder} from './opportunity_Letters/opportunity_LettersRequestBuilder';
import {MailboxtrackingfolderItemRequestBuilder} from './opportunity_MailboxTrackingFolder/item/mailboxtrackingfolderItemRequestBuilder';
import {Opportunity_MailboxTrackingFolderRequestBuilder} from './opportunity_MailboxTrackingFolder/opportunity_MailboxTrackingFolderRequestBuilder';
import {Msdyn_approvalItemRequestBuilder} from './opportunity_msdyn_approvals/item/msdyn_approvalItemRequestBuilder';
import {Opportunity_msdyn_approvalsRequestBuilder} from './opportunity_msdyn_approvals/opportunity_msdyn_approvalsRequestBuilder';
import {Msdyn_bookingalertItemRequestBuilder} from './opportunity_msdyn_bookingalerts/item/msdyn_bookingalertItemRequestBuilder';
import {Opportunity_msdyn_bookingalertsRequestBuilder} from './opportunity_msdyn_bookingalerts/opportunity_msdyn_bookingalertsRequestBuilder';
import {Msdyn_ocliveworkitemItemRequestBuilder} from './opportunity_msdyn_ocliveworkitems/item/msdyn_ocliveworkitemItemRequestBuilder';
import {Opportunity_msdyn_ocliveworkitemsRequestBuilder} from './opportunity_msdyn_ocliveworkitems/opportunity_msdyn_ocliveworkitemsRequestBuilder';
import {Msdyn_ocoutboundmessageItemRequestBuilder} from './opportunity_msdyn_ocoutboundmessages/item/msdyn_ocoutboundmessageItemRequestBuilder';
import {Opportunity_msdyn_ocoutboundmessagesRequestBuilder} from './opportunity_msdyn_ocoutboundmessages/opportunity_msdyn_ocoutboundmessagesRequestBuilder';
import {Msdyn_ocsessionItemRequestBuilder} from './opportunity_msdyn_ocsessions/item/msdyn_ocsessionItemRequestBuilder';
import {Opportunity_msdyn_ocsessionsRequestBuilder} from './opportunity_msdyn_ocsessions/opportunity_msdyn_ocsessionsRequestBuilder';
import {Msfp_alertItemRequestBuilder} from './opportunity_msfp_alerts/item/msfp_alertItemRequestBuilder';
import {Opportunity_msfp_alertsRequestBuilder} from './opportunity_msfp_alerts/opportunity_msfp_alertsRequestBuilder';
import {Msfp_surveyinviteItemRequestBuilder} from './opportunity_msfp_surveyinvites/item/msfp_surveyinviteItemRequestBuilder';
import {Opportunity_msfp_surveyinvitesRequestBuilder} from './opportunity_msfp_surveyinvites/opportunity_msfp_surveyinvitesRequestBuilder';
import {Msfp_surveyresponseItemRequestBuilder} from './opportunity_msfp_surveyresponses/item/msfp_surveyresponseItemRequestBuilder';
import {Opportunity_msfp_surveyresponsesRequestBuilder} from './opportunity_msfp_surveyresponses/opportunity_msfp_surveyresponsesRequestBuilder';
import {OpportunitycloseItemRequestBuilder as i520629720baa72bd1ce4a2002302cb2329cf40265c979fd033c0b9b2871fe778} from './opportunity_OpportunityClose/item/opportunitycloseItemRequestBuilder';
import {Opportunity_OpportunityCloseRequestBuilder} from './opportunity_OpportunityClose/opportunity_OpportunityCloseRequestBuilder';
import {OpportunitycloseItemRequestBuilder as idcdd8610cb0ca273bdc5fc29cbbffaa562c22b7541db9a962b969af5b8fb36fd} from './opportunity_OpportunityCloses/item/opportunitycloseItemRequestBuilder';
import {Opportunity_OpportunityClosesRequestBuilder} from './opportunity_OpportunityCloses/opportunity_OpportunityClosesRequestBuilder';
import {OpportunitysalesprocessItemRequestBuilder} from './opportunity_opportunitysalesprocess/item/opportunitysalesprocessItemRequestBuilder';
import {Opportunity_opportunitysalesprocessRequestBuilder} from './opportunity_opportunitysalesprocess/opportunity_opportunitysalesprocessRequestBuilder';
import {OrdercloseItemRequestBuilder} from './opportunity_OrderCloses/item/ordercloseItemRequestBuilder';
import {Opportunity_OrderClosesRequestBuilder} from './opportunity_OrderCloses/opportunity_OrderClosesRequestBuilder';
import {PhonecallItemRequestBuilder} from './opportunity_Phonecalls/item/phonecallItemRequestBuilder';
import {Opportunity_PhonecallsRequestBuilder} from './opportunity_Phonecalls/opportunity_PhonecallsRequestBuilder';
import {PostfollowItemRequestBuilder} from './opportunity_PostFollows/item/postfollowItemRequestBuilder';
import {Opportunity_PostFollowsRequestBuilder} from './opportunity_PostFollows/opportunity_PostFollowsRequestBuilder';
import {PostregardingItemRequestBuilder} from './opportunity_PostRegardings/item/postregardingItemRequestBuilder';
import {Opportunity_PostRegardingsRequestBuilder} from './opportunity_PostRegardings/opportunity_PostRegardingsRequestBuilder';
import {PostItemRequestBuilder} from './opportunity_Posts/item/postItemRequestBuilder';
import {Opportunity_PostsRequestBuilder} from './opportunity_Posts/opportunity_PostsRequestBuilder';
import {PrincipalobjectattributeaccessItemRequestBuilder} from './opportunity_principalobjectattributeaccess/item/principalobjectattributeaccessItemRequestBuilder';
import {Opportunity_principalobjectattributeaccessRequestBuilder} from './opportunity_principalobjectattributeaccess/opportunity_principalobjectattributeaccessRequestBuilder';
import {ProcesssessionItemRequestBuilder} from './opportunity_ProcessSessions/item/processsessionItemRequestBuilder';
import {Opportunity_ProcessSessionsRequestBuilder} from './opportunity_ProcessSessions/opportunity_ProcessSessionsRequestBuilder';
import {QuotecloseItemRequestBuilder} from './opportunity_QuoteCloses/item/quotecloseItemRequestBuilder';
import {Opportunity_QuoteClosesRequestBuilder} from './opportunity_QuoteCloses/opportunity_QuoteClosesRequestBuilder';
import {QuoteItemRequestBuilder} from './opportunity_quotes/item/quoteItemRequestBuilder';
import {Opportunity_quotesRequestBuilder} from './opportunity_quotes/opportunity_quotesRequestBuilder';
import {RecurringappointmentmasterItemRequestBuilder} from './opportunity_RecurringAppointmentMasters/item/recurringappointmentmasterItemRequestBuilder';
import {Opportunity_RecurringAppointmentMastersRequestBuilder} from './opportunity_RecurringAppointmentMasters/opportunity_RecurringAppointmentMastersRequestBuilder';
import {SalesorderItemRequestBuilder} from './opportunity_sales_orders/item/salesorderItemRequestBuilder';
import {Opportunity_sales_ordersRequestBuilder} from './opportunity_sales_orders/opportunity_sales_ordersRequestBuilder';
import {ServiceappointmentItemRequestBuilder} from './opportunity_ServiceAppointments/item/serviceappointmentItemRequestBuilder';
import {Opportunity_ServiceAppointmentsRequestBuilder} from './opportunity_ServiceAppointments/opportunity_ServiceAppointmentsRequestBuilder';
import {SharepointdocumentlocationItemRequestBuilder} from './opportunity_SharepointDocumentLocation/item/sharepointdocumentlocationItemRequestBuilder';
import {Opportunity_SharepointDocumentLocationRequestBuilder} from './opportunity_SharepointDocumentLocation/opportunity_SharepointDocumentLocationRequestBuilder';
import {SocialactivityItemRequestBuilder} from './opportunity_SocialActivities/item/socialactivityItemRequestBuilder';
import {Opportunity_SocialActivitiesRequestBuilder} from './opportunity_SocialActivities/opportunity_SocialActivitiesRequestBuilder';
import {SyncerrorItemRequestBuilder} from './opportunity_SyncErrors/item/syncerrorItemRequestBuilder';
import {Opportunity_SyncErrorsRequestBuilder} from './opportunity_SyncErrors/opportunity_SyncErrorsRequestBuilder';
import {TaskItemRequestBuilder} from './opportunity_Tasks/item/taskItemRequestBuilder';
import {Opportunity_TasksRequestBuilder} from './opportunity_Tasks/opportunity_TasksRequestBuilder';
import {TeamItemRequestBuilder} from './opportunity_Teams/item/teamItemRequestBuilder';
import {Opportunity_TeamsRequestBuilder} from './opportunity_Teams/opportunity_TeamsRequestBuilder';
import {CompetitorItemRequestBuilder} from './opportunitycompetitors_association/item/competitorItemRequestBuilder';
import {Opportunitycompetitors_associationRequestBuilder} from './opportunitycompetitors_association/opportunitycompetitors_associationRequestBuilder';
import {OriginatingleadidRequestBuilder} from './originatingleadid/originatingleadidRequestBuilder';
import {OwneridRequestBuilder} from './ownerid/owneridRequestBuilder';
import {OwningbusinessunitRequestBuilder} from './owningbusinessunit/owningbusinessunitRequestBuilder';
import {OwningteamRequestBuilder} from './owningteam/owningteamRequestBuilder';
import {OwninguserRequestBuilder} from './owninguser/owninguserRequestBuilder';
import {ParentaccountidRequestBuilder} from './parentaccountid/parentaccountidRequestBuilder';
import {ParentcontactidRequestBuilder} from './parentcontactid/parentcontactidRequestBuilder';
import {PricelevelidRequestBuilder} from './pricelevelid/pricelevelidRequestBuilder';
import {OpportunityproductItemRequestBuilder} from './product_opportunities/item/opportunityproductItemRequestBuilder';
import {Product_opportunitiesRequestBuilder} from './product_opportunities/product_opportunitiesRequestBuilder';
import {Sla_opportunity_slaRequestBuilder} from './sla_opportunity_sla/sla_opportunity_slaRequestBuilder';
import {Slainvokedid_opportunity_slaRequestBuilder} from './slainvokedid_opportunity_sla/slainvokedid_opportunity_slaRequestBuilder';
import {SlakpiinstanceItemRequestBuilder} from './slakpiinstance_opportunity/item/slakpiinstanceItemRequestBuilder';
import {Slakpiinstance_opportunityRequestBuilder} from './slakpiinstance_opportunity/slakpiinstance_opportunityRequestBuilder';
import {Stageid_processstageRequestBuilder} from './stageid_processstage/stageid_processstageRequestBuilder';
import {TransactioncurrencyidRequestBuilder} from './transactioncurrencyid/transactioncurrencyidRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of opportunity entities.  */
export class OpportunityItemRequestBuilder {
    public get calculateActualValueOpportunity(): CalculateActualValueOpportunityRequestBuilder {
        return new CalculateActualValueOpportunityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get campaignid(): CampaignidRequestBuilder {
        return new CampaignidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createdby(): CreatedbyRequestBuilder {
        return new CreatedbyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createdonbehalfby(): CreatedonbehalfbyRequestBuilder {
        return new CreatedonbehalfbyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createdOpportunity_BulkOperationLogs(): CreatedOpportunity_BulkOperationLogsRequestBuilder {
        return new CreatedOpportunity_BulkOperationLogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get customerid_account(): Customerid_accountRequestBuilder {
        return new Customerid_accountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get customerid_contact(): Customerid_contactRequestBuilder {
        return new Customerid_contactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get lead_qualifying_opportunity(): Lead_qualifying_opportunityRequestBuilder {
        return new Lead_qualifying_opportunityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get modifiedby(): ModifiedbyRequestBuilder {
        return new ModifiedbyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get modifiedonbehalfby(): ModifiedonbehalfbyRequestBuilder {
        return new ModifiedonbehalfbyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_AccountManagerId(): Msdyn_AccountManagerIdRequestBuilder {
        return new Msdyn_AccountManagerIdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_CloseAllOpportunityQuotes(): Msdyn_CloseAllOpportunityQuotesRequestBuilder {
        return new Msdyn_CloseAllOpportunityQuotesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_ContractOrganizationalUnitId(): Msdyn_ContractOrganizationalUnitIdRequestBuilder {
        return new Msdyn_ContractOrganizationalUnitIdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_CreateQuoteFromOpportunity(): Msdyn_CreateQuoteFromOpportunityRequestBuilder {
        return new Msdyn_CreateQuoteFromOpportunityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_opportunity_msdyn_opportunitypricelist_Opportunity(): Msdyn_opportunity_msdyn_opportunitypricelist_OpportunityRequestBuilder {
        return new Msdyn_opportunity_msdyn_opportunitypricelist_OpportunityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_opportunity_msdyn_salesroutingrun_targetobject(): Msdyn_opportunity_msdyn_salesroutingrun_targetobjectRequestBuilder {
        return new Msdyn_opportunity_msdyn_salesroutingrun_targetobjectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_opportunity_msdyn_workorder(): Msdyn_opportunity_msdyn_workorderRequestBuilder {
        return new Msdyn_opportunity_msdyn_workorderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_playbookinstance_opportunity(): Msdyn_playbookinstance_opportunityRequestBuilder {
        return new Msdyn_playbookinstance_opportunityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_PredictiveScoreId(): Msdyn_PredictiveScoreIdRequestBuilder {
        return new Msdyn_PredictiveScoreIdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_salessuggestion_opportunity_qualifiedrecord(): Msdyn_salessuggestion_opportunity_qualifiedrecordRequestBuilder {
        return new Msdyn_salessuggestion_opportunity_qualifiedrecordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_segmentid(): Msdyn_segmentidRequestBuilder {
        return new Msdyn_segmentidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_workordertype(): Msdyn_workordertypeRequestBuilder {
        return new Msdyn_workordertypeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_actioncard(): Opportunity_actioncardRequestBuilder {
        return new Opportunity_actioncardRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_activity_parties(): Opportunity_activity_partiesRequestBuilder {
        return new Opportunity_activity_partiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_ActivityPointers(): Opportunity_ActivityPointersRequestBuilder {
        return new Opportunity_ActivityPointersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_Annotation(): Opportunity_AnnotationRequestBuilder {
        return new Opportunity_AnnotationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_Appointments(): Opportunity_AppointmentsRequestBuilder {
        return new Opportunity_AppointmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_AsyncOperations(): Opportunity_AsyncOperationsRequestBuilder {
        return new Opportunity_AsyncOperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_BulkDeleteFailures(): Opportunity_BulkDeleteFailuresRequestBuilder {
        return new Opportunity_BulkDeleteFailuresRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_connections1(): Opportunity_connections1RequestBuilder {
        return new Opportunity_connections1RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_connections2(): Opportunity_connections2RequestBuilder {
        return new Opportunity_connections2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_DuplicateBaseRecord(): Opportunity_DuplicateBaseRecordRequestBuilder {
        return new Opportunity_DuplicateBaseRecordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_DuplicateMatchingRecord(): Opportunity_DuplicateMatchingRecordRequestBuilder {
        return new Opportunity_DuplicateMatchingRecordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_Emails(): Opportunity_EmailsRequestBuilder {
        return new Opportunity_EmailsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_Faxes(): Opportunity_FaxesRequestBuilder {
        return new Opportunity_FaxesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_invoices(): Opportunity_invoicesRequestBuilder {
        return new Opportunity_invoicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_leadtoopportunitysalesprocess(): Opportunity_leadtoopportunitysalesprocessRequestBuilder {
        return new Opportunity_leadtoopportunitysalesprocessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_Letters(): Opportunity_LettersRequestBuilder {
        return new Opportunity_LettersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_MailboxTrackingFolder(): Opportunity_MailboxTrackingFolderRequestBuilder {
        return new Opportunity_MailboxTrackingFolderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_msdyn_approvals(): Opportunity_msdyn_approvalsRequestBuilder {
        return new Opportunity_msdyn_approvalsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_msdyn_bookingalerts(): Opportunity_msdyn_bookingalertsRequestBuilder {
        return new Opportunity_msdyn_bookingalertsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_msdyn_ocliveworkitems(): Opportunity_msdyn_ocliveworkitemsRequestBuilder {
        return new Opportunity_msdyn_ocliveworkitemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_msdyn_ocoutboundmessages(): Opportunity_msdyn_ocoutboundmessagesRequestBuilder {
        return new Opportunity_msdyn_ocoutboundmessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_msdyn_ocsessions(): Opportunity_msdyn_ocsessionsRequestBuilder {
        return new Opportunity_msdyn_ocsessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_msfp_alerts(): Opportunity_msfp_alertsRequestBuilder {
        return new Opportunity_msfp_alertsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_msfp_surveyinvites(): Opportunity_msfp_surveyinvitesRequestBuilder {
        return new Opportunity_msfp_surveyinvitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_msfp_surveyresponses(): Opportunity_msfp_surveyresponsesRequestBuilder {
        return new Opportunity_msfp_surveyresponsesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_OpportunityClose(): Opportunity_OpportunityCloseRequestBuilder {
        return new Opportunity_OpportunityCloseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_OpportunityCloses(): Opportunity_OpportunityClosesRequestBuilder {
        return new Opportunity_OpportunityClosesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_opportunitysalesprocess(): Opportunity_opportunitysalesprocessRequestBuilder {
        return new Opportunity_opportunitysalesprocessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_OrderCloses(): Opportunity_OrderClosesRequestBuilder {
        return new Opportunity_OrderClosesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_Phonecalls(): Opportunity_PhonecallsRequestBuilder {
        return new Opportunity_PhonecallsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_PostFollows(): Opportunity_PostFollowsRequestBuilder {
        return new Opportunity_PostFollowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_PostRegardings(): Opportunity_PostRegardingsRequestBuilder {
        return new Opportunity_PostRegardingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_Posts(): Opportunity_PostsRequestBuilder {
        return new Opportunity_PostsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_principalobjectattributeaccess(): Opportunity_principalobjectattributeaccessRequestBuilder {
        return new Opportunity_principalobjectattributeaccessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_ProcessSessions(): Opportunity_ProcessSessionsRequestBuilder {
        return new Opportunity_ProcessSessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_QuoteCloses(): Opportunity_QuoteClosesRequestBuilder {
        return new Opportunity_QuoteClosesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_quotes(): Opportunity_quotesRequestBuilder {
        return new Opportunity_quotesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_RecurringAppointmentMasters(): Opportunity_RecurringAppointmentMastersRequestBuilder {
        return new Opportunity_RecurringAppointmentMastersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_sales_orders(): Opportunity_sales_ordersRequestBuilder {
        return new Opportunity_sales_ordersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_ServiceAppointments(): Opportunity_ServiceAppointmentsRequestBuilder {
        return new Opportunity_ServiceAppointmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_SharepointDocumentLocation(): Opportunity_SharepointDocumentLocationRequestBuilder {
        return new Opportunity_SharepointDocumentLocationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_SocialActivities(): Opportunity_SocialActivitiesRequestBuilder {
        return new Opportunity_SocialActivitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_SyncErrors(): Opportunity_SyncErrorsRequestBuilder {
        return new Opportunity_SyncErrorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_Tasks(): Opportunity_TasksRequestBuilder {
        return new Opportunity_TasksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunity_Teams(): Opportunity_TeamsRequestBuilder {
        return new Opportunity_TeamsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get opportunitycompetitors_association(): Opportunitycompetitors_associationRequestBuilder {
        return new Opportunitycompetitors_associationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get originatingleadid(): OriginatingleadidRequestBuilder {
        return new OriginatingleadidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ownerid(): OwneridRequestBuilder {
        return new OwneridRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get owningbusinessunit(): OwningbusinessunitRequestBuilder {
        return new OwningbusinessunitRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get owningteam(): OwningteamRequestBuilder {
        return new OwningteamRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get owninguser(): OwninguserRequestBuilder {
        return new OwninguserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get parentaccountid(): ParentaccountidRequestBuilder {
        return new ParentaccountidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get parentcontactid(): ParentcontactidRequestBuilder {
        return new ParentcontactidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get pricelevelid(): PricelevelidRequestBuilder {
        return new PricelevelidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get product_opportunities(): Product_opportunitiesRequestBuilder {
        return new Product_opportunitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get sla_opportunity_sla(): Sla_opportunity_slaRequestBuilder {
        return new Sla_opportunity_slaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get slainvokedid_opportunity_sla(): Slainvokedid_opportunity_slaRequestBuilder {
        return new Slainvokedid_opportunity_slaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get slakpiinstance_opportunity(): Slakpiinstance_opportunityRequestBuilder {
        return new Slakpiinstance_opportunityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get stageid_processstage(): Stageid_processstageRequestBuilder {
        return new Stageid_processstageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get transactioncurrencyid(): TransactioncurrencyidRequestBuilder {
        return new TransactioncurrencyidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new OpportunityItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/opportunities/{opportunity_opportunityid}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from opportunities
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.CreatedOpportunity_BulkOperationLogs.item collection
     * @param id Unique identifier of the item
     * @returns a bulkoperationlogItemRequestBuilder
     */
    public createdOpportunity_BulkOperationLogsById(id: string) : BulkoperationlogItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bulkoperationlog_bulkoperationlogid"] = id
        return new BulkoperationlogItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get entity from opportunities by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update entity in opportunities
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Opportunity | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete entity from opportunities
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get entity from opportunities by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Opportunity
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Opportunity | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Opportunity>(requestInfo, createOpportunityFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Provides operations to call the GetQuantityDecimal method.
     * @returns a GetQuantityDecimalWithProductWithUoMRequestBuilder
     */
    public getQuantityDecimalWithProductWithUoM() : GetQuantityDecimalWithProductWithUoMRequestBuilder {
        return new GetQuantityDecimalWithProductWithUoMRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.lead_qualifying_opportunity.item collection
     * @param id Unique identifier of the item
     * @returns a leadItemRequestBuilder
     */
    public lead_qualifying_opportunityById(id: string) : LeadItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["lead_leadid"] = id
        return new LeadItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.msdyn_opportunity_msdyn_opportunitypricelist_Opportunity.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_opportunitypricelistItemRequestBuilder
     */
    public msdyn_opportunity_msdyn_opportunitypricelist_OpportunityById(id: string) : Msdyn_opportunitypricelistItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_opportunitypricelist_msdyn_opportunitypricelistid"] = id
        return new Msdyn_opportunitypricelistItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.msdyn_opportunity_msdyn_salesroutingrun_targetobject.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_salesroutingrunItemRequestBuilder
     */
    public msdyn_opportunity_msdyn_salesroutingrun_targetobjectById(id: string) : Msdyn_salesroutingrunItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_salesroutingrun_msdyn_salesroutingrunid"] = id
        return new Msdyn_salesroutingrunItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.msdyn_opportunity_msdyn_workorder.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_workorderItemRequestBuilder
     */
    public msdyn_opportunity_msdyn_workorderById(id: string) : Msdyn_workorderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_workorder_msdyn_workorderid"] = id
        return new Msdyn_workorderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.msdyn_playbookinstance_opportunity.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_playbookinstanceItemRequestBuilder
     */
    public msdyn_playbookinstance_opportunityById(id: string) : Msdyn_playbookinstanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_playbookinstance_msdyn_playbookinstanceid"] = id
        return new Msdyn_playbookinstanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.msdyn_salessuggestion_opportunity_qualifiedrecord.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_salessuggestionItemRequestBuilder
     */
    public msdyn_salessuggestion_opportunity_qualifiedrecordById(id: string) : Msdyn_salessuggestionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_salessuggestion_msdyn_salessuggestionid"] = id
        return new Msdyn_salessuggestionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_actioncard.item collection
     * @param id Unique identifier of the item
     * @returns a actioncardItemRequestBuilder
     */
    public opportunity_actioncardById(id: string) : ActioncardItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["actioncard_actioncardid"] = id
        return new ActioncardItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_activity_parties.item collection
     * @param id Unique identifier of the item
     * @returns a activitypartyItemRequestBuilder
     */
    public opportunity_activity_partiesById(id: string) : ActivitypartyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["activityparty_activitypartyid"] = id
        return new ActivitypartyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_ActivityPointers.item collection
     * @param id Unique identifier of the item
     * @returns a activitypointerItemRequestBuilder
     */
    public opportunity_ActivityPointersById(id: string) : ActivitypointerItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["activitypointer_activityid"] = id
        return new ActivitypointerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_Annotation.item collection
     * @param id Unique identifier of the item
     * @returns a annotationItemRequestBuilder
     */
    public opportunity_AnnotationById(id: string) : AnnotationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["annotation_annotationid"] = id
        return new AnnotationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_Appointments.item collection
     * @param id Unique identifier of the item
     * @returns a appointmentItemRequestBuilder
     */
    public opportunity_AppointmentsById(id: string) : AppointmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appointment_activityid"] = id
        return new AppointmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_AsyncOperations.item collection
     * @param id Unique identifier of the item
     * @returns a asyncoperationItemRequestBuilder
     */
    public opportunity_AsyncOperationsById(id: string) : AsyncoperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["asyncoperation_asyncoperationid"] = id
        return new AsyncoperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_BulkDeleteFailures.item collection
     * @param id Unique identifier of the item
     * @returns a bulkdeletefailureItemRequestBuilder
     */
    public opportunity_BulkDeleteFailuresById(id: string) : BulkdeletefailureItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bulkdeletefailure_bulkdeletefailureid"] = id
        return new BulkdeletefailureItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_connections1.item collection
     * @param id Unique identifier of the item
     * @returns a connectionItemRequestBuilder
     */
    public opportunity_connections1ById(id: string) : i8d2824151947bf3cfe7cfa9b15b1ebeeb80e901718c920687111c733b02ddc16 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["connection_connectionid"] = id
        return new i8d2824151947bf3cfe7cfa9b15b1ebeeb80e901718c920687111c733b02ddc16(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_connections2.item collection
     * @param id Unique identifier of the item
     * @returns a connectionItemRequestBuilder
     */
    public opportunity_connections2ById(id: string) : i2468cd43491d0c0b3ebbbe64d2144f8b72d947cf790019830d547bd6ac5bbfaf {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["connection_connectionid"] = id
        return new i2468cd43491d0c0b3ebbbe64d2144f8b72d947cf790019830d547bd6ac5bbfaf(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_DuplicateBaseRecord.item collection
     * @param id Unique identifier of the item
     * @returns a duplicaterecordItemRequestBuilder
     */
    public opportunity_DuplicateBaseRecordById(id: string) : i6ce41d07c69822ba13282a92f636e262a5fb74116f00e761878e6028742136cd {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["duplicaterecord_duplicateid"] = id
        return new i6ce41d07c69822ba13282a92f636e262a5fb74116f00e761878e6028742136cd(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_DuplicateMatchingRecord.item collection
     * @param id Unique identifier of the item
     * @returns a duplicaterecordItemRequestBuilder
     */
    public opportunity_DuplicateMatchingRecordById(id: string) : i82aae98a854a8d761ee78ded21f86bf466074defcf4777f7cbb7eea844d22f14 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["duplicaterecord_duplicateid"] = id
        return new i82aae98a854a8d761ee78ded21f86bf466074defcf4777f7cbb7eea844d22f14(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_Emails.item collection
     * @param id Unique identifier of the item
     * @returns a emailItemRequestBuilder
     */
    public opportunity_EmailsById(id: string) : EmailItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["email_activityid"] = id
        return new EmailItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_Faxes.item collection
     * @param id Unique identifier of the item
     * @returns a faxItemRequestBuilder
     */
    public opportunity_FaxesById(id: string) : FaxItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["fax_activityid"] = id
        return new FaxItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_invoices.item collection
     * @param id Unique identifier of the item
     * @returns a invoiceItemRequestBuilder
     */
    public opportunity_invoicesById(id: string) : InvoiceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["invoice_invoiceid"] = id
        return new InvoiceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_leadtoopportunitysalesprocess.item collection
     * @param id Unique identifier of the item
     * @returns a leadtoopportunitysalesprocessItemRequestBuilder
     */
    public opportunity_leadtoopportunitysalesprocessById(id: string) : LeadtoopportunitysalesprocessItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["leadtoopportunitysalesprocess_businessprocessflowinstanceid"] = id
        return new LeadtoopportunitysalesprocessItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_Letters.item collection
     * @param id Unique identifier of the item
     * @returns a letterItemRequestBuilder
     */
    public opportunity_LettersById(id: string) : LetterItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["letter_activityid"] = id
        return new LetterItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_MailboxTrackingFolder.item collection
     * @param id Unique identifier of the item
     * @returns a mailboxtrackingfolderItemRequestBuilder
     */
    public opportunity_MailboxTrackingFolderById(id: string) : MailboxtrackingfolderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mailboxtrackingfolder_mailboxtrackingfolderid"] = id
        return new MailboxtrackingfolderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_msdyn_approvals.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_approvalItemRequestBuilder
     */
    public opportunity_msdyn_approvalsById(id: string) : Msdyn_approvalItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_approval_activityid"] = id
        return new Msdyn_approvalItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_msdyn_bookingalerts.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_bookingalertItemRequestBuilder
     */
    public opportunity_msdyn_bookingalertsById(id: string) : Msdyn_bookingalertItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_bookingalert_activityid"] = id
        return new Msdyn_bookingalertItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_msdyn_ocliveworkitems.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_ocliveworkitemItemRequestBuilder
     */
    public opportunity_msdyn_ocliveworkitemsById(id: string) : Msdyn_ocliveworkitemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_ocliveworkitem_activityid"] = id
        return new Msdyn_ocliveworkitemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_msdyn_ocoutboundmessages.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_ocoutboundmessageItemRequestBuilder
     */
    public opportunity_msdyn_ocoutboundmessagesById(id: string) : Msdyn_ocoutboundmessageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_ocoutboundmessage_activityid"] = id
        return new Msdyn_ocoutboundmessageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_msdyn_ocsessions.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_ocsessionItemRequestBuilder
     */
    public opportunity_msdyn_ocsessionsById(id: string) : Msdyn_ocsessionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_ocsession_activityid"] = id
        return new Msdyn_ocsessionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_msfp_alerts.item collection
     * @param id Unique identifier of the item
     * @returns a msfp_alertItemRequestBuilder
     */
    public opportunity_msfp_alertsById(id: string) : Msfp_alertItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msfp_alert_activityid"] = id
        return new Msfp_alertItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_msfp_surveyinvites.item collection
     * @param id Unique identifier of the item
     * @returns a msfp_surveyinviteItemRequestBuilder
     */
    public opportunity_msfp_surveyinvitesById(id: string) : Msfp_surveyinviteItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msfp_surveyinvite_activityid"] = id
        return new Msfp_surveyinviteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_msfp_surveyresponses.item collection
     * @param id Unique identifier of the item
     * @returns a msfp_surveyresponseItemRequestBuilder
     */
    public opportunity_msfp_surveyresponsesById(id: string) : Msfp_surveyresponseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msfp_surveyresponse_activityid"] = id
        return new Msfp_surveyresponseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_OpportunityClose.item collection
     * @param id Unique identifier of the item
     * @returns a opportunitycloseItemRequestBuilder
     */
    public opportunity_OpportunityCloseById(id: string) : i520629720baa72bd1ce4a2002302cb2329cf40265c979fd033c0b9b2871fe778 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["opportunityclose_activityid"] = id
        return new i520629720baa72bd1ce4a2002302cb2329cf40265c979fd033c0b9b2871fe778(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_OpportunityCloses.item collection
     * @param id Unique identifier of the item
     * @returns a opportunitycloseItemRequestBuilder
     */
    public opportunity_OpportunityClosesById(id: string) : idcdd8610cb0ca273bdc5fc29cbbffaa562c22b7541db9a962b969af5b8fb36fd {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["opportunityclose_activityid"] = id
        return new idcdd8610cb0ca273bdc5fc29cbbffaa562c22b7541db9a962b969af5b8fb36fd(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_opportunitysalesprocess.item collection
     * @param id Unique identifier of the item
     * @returns a opportunitysalesprocessItemRequestBuilder
     */
    public opportunity_opportunitysalesprocessById(id: string) : OpportunitysalesprocessItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["opportunitysalesprocess_businessprocessflowinstanceid"] = id
        return new OpportunitysalesprocessItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_OrderCloses.item collection
     * @param id Unique identifier of the item
     * @returns a ordercloseItemRequestBuilder
     */
    public opportunity_OrderClosesById(id: string) : OrdercloseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["orderclose_activityid"] = id
        return new OrdercloseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_Phonecalls.item collection
     * @param id Unique identifier of the item
     * @returns a phonecallItemRequestBuilder
     */
    public opportunity_PhonecallsById(id: string) : PhonecallItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["phonecall_activityid"] = id
        return new PhonecallItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_PostFollows.item collection
     * @param id Unique identifier of the item
     * @returns a postfollowItemRequestBuilder
     */
    public opportunity_PostFollowsById(id: string) : PostfollowItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["postfollow_postfollowid"] = id
        return new PostfollowItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_PostRegardings.item collection
     * @param id Unique identifier of the item
     * @returns a postregardingItemRequestBuilder
     */
    public opportunity_PostRegardingsById(id: string) : PostregardingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["postregarding_postregardingid"] = id
        return new PostregardingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_Posts.item collection
     * @param id Unique identifier of the item
     * @returns a postItemRequestBuilder
     */
    public opportunity_PostsById(id: string) : PostItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["post_postid"] = id
        return new PostItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_principalobjectattributeaccess.item collection
     * @param id Unique identifier of the item
     * @returns a principalobjectattributeaccessItemRequestBuilder
     */
    public opportunity_principalobjectattributeaccessById(id: string) : PrincipalobjectattributeaccessItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["principalobjectattributeaccess_principalobjectattributeaccessid"] = id
        return new PrincipalobjectattributeaccessItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_ProcessSessions.item collection
     * @param id Unique identifier of the item
     * @returns a processsessionItemRequestBuilder
     */
    public opportunity_ProcessSessionsById(id: string) : ProcesssessionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["processsession_processsessionid"] = id
        return new ProcesssessionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_QuoteCloses.item collection
     * @param id Unique identifier of the item
     * @returns a quotecloseItemRequestBuilder
     */
    public opportunity_QuoteClosesById(id: string) : QuotecloseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["quoteclose_activityid"] = id
        return new QuotecloseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_quotes.item collection
     * @param id Unique identifier of the item
     * @returns a quoteItemRequestBuilder
     */
    public opportunity_quotesById(id: string) : QuoteItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["quote_quoteid"] = id
        return new QuoteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_RecurringAppointmentMasters.item collection
     * @param id Unique identifier of the item
     * @returns a recurringappointmentmasterItemRequestBuilder
     */
    public opportunity_RecurringAppointmentMastersById(id: string) : RecurringappointmentmasterItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["recurringappointmentmaster_activityid"] = id
        return new RecurringappointmentmasterItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_sales_orders.item collection
     * @param id Unique identifier of the item
     * @returns a salesorderItemRequestBuilder
     */
    public opportunity_sales_ordersById(id: string) : SalesorderItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["salesorder_salesorderid"] = id
        return new SalesorderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_ServiceAppointments.item collection
     * @param id Unique identifier of the item
     * @returns a serviceappointmentItemRequestBuilder
     */
    public opportunity_ServiceAppointmentsById(id: string) : ServiceappointmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["serviceappointment_activityid"] = id
        return new ServiceappointmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_SharepointDocumentLocation.item collection
     * @param id Unique identifier of the item
     * @returns a sharepointdocumentlocationItemRequestBuilder
     */
    public opportunity_SharepointDocumentLocationById(id: string) : SharepointdocumentlocationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sharepointdocumentlocation_sharepointdocumentlocationid"] = id
        return new SharepointdocumentlocationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_SocialActivities.item collection
     * @param id Unique identifier of the item
     * @returns a socialactivityItemRequestBuilder
     */
    public opportunity_SocialActivitiesById(id: string) : SocialactivityItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["socialactivity_activityid"] = id
        return new SocialactivityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_SyncErrors.item collection
     * @param id Unique identifier of the item
     * @returns a syncerrorItemRequestBuilder
     */
    public opportunity_SyncErrorsById(id: string) : SyncerrorItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["syncerror_syncerrorid"] = id
        return new SyncerrorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.Opportunity_Tasks.item collection
     * @param id Unique identifier of the item
     * @returns a taskItemRequestBuilder
     */
    public opportunity_TasksById(id: string) : TaskItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["task_activityid"] = id
        return new TaskItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunity_Teams.item collection
     * @param id Unique identifier of the item
     * @returns a teamItemRequestBuilder
     */
    public opportunity_TeamsById(id: string) : TeamItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["team_ownerid"] = id
        return new TeamItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.opportunitycompetitors_association.item collection
     * @param id Unique identifier of the item
     * @returns a competitorItemRequestBuilder
     */
    public opportunitycompetitors_associationById(id: string) : CompetitorItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["competitor_competitorid"] = id
        return new CompetitorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in opportunities
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Opportunity | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.product_opportunities.item collection
     * @param id Unique identifier of the item
     * @returns a opportunityproductItemRequestBuilder
     */
    public product_opportunitiesById(id: string) : OpportunityproductItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["opportunityproduct_opportunityproductid"] = id
        return new OpportunityproductItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.opportunities.item.slakpiinstance_opportunity.item collection
     * @param id Unique identifier of the item
     * @returns a slakpiinstanceItemRequestBuilder
     */
    public slakpiinstance_opportunityById(id: string) : SlakpiinstanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["slakpiinstance_slakpiinstanceid"] = id
        return new SlakpiinstanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
