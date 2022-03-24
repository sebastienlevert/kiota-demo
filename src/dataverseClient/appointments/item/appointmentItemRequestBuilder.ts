import {Appointment} from '../../models/microsoft/dynamics/cRM/';
import {createAppointmentFromDiscriminatorValue} from '../../models/microsoft/dynamics/cRM/createAppointmentFromDiscriminatorValue';
import {ODataError} from '../../models/microsoft/dynamics/cRM/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/microsoft/dynamics/cRM/oDataErrors/createODataErrorFromDiscriminatorValue';
import {Activityid_activitypointerRequestBuilder} from './activityid_activitypointer/activityid_activitypointerRequestBuilder';
import {AddRecurrenceRequestBuilder} from './addRecurrence/addRecurrenceRequestBuilder';
import {Appointment_actioncardRequestBuilder} from './appointment_actioncard/appointment_actioncardRequestBuilder';
import {ActioncardItemRequestBuilder} from './appointment_actioncard/item/actioncardItemRequestBuilder';
import {Appointment_activity_mime_attachmentRequestBuilder} from './appointment_activity_mime_attachment/appointment_activity_mime_attachmentRequestBuilder';
import {ActivitymimeattachmentItemRequestBuilder} from './appointment_activity_mime_attachment/item/activitymimeattachmentItemRequestBuilder';
import {Appointment_activity_partiesRequestBuilder} from './appointment_activity_parties/appointment_activity_partiesRequestBuilder';
import {ActivitypartyItemRequestBuilder} from './appointment_activity_parties/item/activitypartyItemRequestBuilder';
import {Appointment_AnnotationRequestBuilder} from './appointment_Annotation/appointment_AnnotationRequestBuilder';
import {AnnotationItemRequestBuilder} from './appointment_Annotation/item/annotationItemRequestBuilder';
import {Appointment_AsyncOperationsRequestBuilder} from './appointment_AsyncOperations/appointment_AsyncOperationsRequestBuilder';
import {AsyncoperationItemRequestBuilder} from './appointment_AsyncOperations/item/asyncoperationItemRequestBuilder';
import {Appointment_BulkDeleteFailuresRequestBuilder} from './appointment_BulkDeleteFailures/appointment_BulkDeleteFailuresRequestBuilder';
import {BulkdeletefailureItemRequestBuilder} from './appointment_BulkDeleteFailures/item/bulkdeletefailureItemRequestBuilder';
import {Appointment_campaignresponseRequestBuilder} from './appointment_campaignresponse/appointment_campaignresponseRequestBuilder';
import {CampaignresponseItemRequestBuilder} from './appointment_campaignresponse/item/campaignresponseItemRequestBuilder';
import {Appointment_connections1RequestBuilder} from './appointment_connections1/appointment_connections1RequestBuilder';
import {ConnectionItemRequestBuilder as ie4ed8cc9b9d8470e492cfb3b97824b0855b2a216edc1f185c9b49a0aac457037} from './appointment_connections1/item/connectionItemRequestBuilder';
import {Appointment_connections2RequestBuilder} from './appointment_connections2/appointment_connections2RequestBuilder';
import {ConnectionItemRequestBuilder as i28d33e01f8a4ec41b2b1d9e31b22ac7ee9850a1a9e58900b3bac8922f8117874} from './appointment_connections2/item/connectionItemRequestBuilder';
import {Appointment_DuplicateBaseRecordRequestBuilder} from './appointment_DuplicateBaseRecord/appointment_DuplicateBaseRecordRequestBuilder';
import {DuplicaterecordItemRequestBuilder as i711b5747f7095e0ea9825c80168f7f88857adf2b421b3b6ca506546edd460a23} from './appointment_DuplicateBaseRecord/item/duplicaterecordItemRequestBuilder';
import {Appointment_DuplicateMatchingRecordRequestBuilder} from './appointment_DuplicateMatchingRecord/appointment_DuplicateMatchingRecordRequestBuilder';
import {DuplicaterecordItemRequestBuilder as i06929966b8297a66e962125dffc56812917d8412e0b094b15bbc4eab6906d611} from './appointment_DuplicateMatchingRecord/item/duplicaterecordItemRequestBuilder';
import {Appointment_PostFollowsRequestBuilder} from './appointment_PostFollows/appointment_PostFollowsRequestBuilder';
import {PostfollowItemRequestBuilder} from './appointment_PostFollows/item/postfollowItemRequestBuilder';
import {Appointment_PostRegardingsRequestBuilder} from './appointment_PostRegardings/appointment_PostRegardingsRequestBuilder';
import {PostregardingItemRequestBuilder} from './appointment_PostRegardings/item/postregardingItemRequestBuilder';
import {Appointment_principalobjectattributeaccessRequestBuilder} from './appointment_principalobjectattributeaccess/appointment_principalobjectattributeaccessRequestBuilder';
import {PrincipalobjectattributeaccessItemRequestBuilder} from './appointment_principalobjectattributeaccess/item/principalobjectattributeaccessItemRequestBuilder';
import {Appointment_ProcessSessionsRequestBuilder} from './appointment_ProcessSessions/appointment_ProcessSessionsRequestBuilder';
import {ProcesssessionItemRequestBuilder} from './appointment_ProcessSessions/item/processsessionItemRequestBuilder';
import {Appointment_QueueItemRequestBuilder} from './appointment_QueueItem/appointment_QueueItemRequestBuilder';
import {QueueitemItemRequestBuilder} from './appointment_QueueItem/item/queueitemItemRequestBuilder';
import {Appointment_SyncErrorsRequestBuilder} from './appointment_SyncErrors/appointment_SyncErrorsRequestBuilder';
import {SyncerrorItemRequestBuilder} from './appointment_SyncErrors/item/syncerrorItemRequestBuilder';
import {Createdby_appointmentRequestBuilder} from './createdby_appointment/createdby_appointmentRequestBuilder';
import {Createdonbehalfby_appointmentRequestBuilder} from './createdonbehalfby_appointment/createdonbehalfby_appointmentRequestBuilder';
import {Modifiedby_appointmentRequestBuilder} from './modifiedby_appointment/modifiedby_appointmentRequestBuilder';
import {Modifiedonbehalfby_appointmentRequestBuilder} from './modifiedonbehalfby_appointment/modifiedonbehalfby_appointmentRequestBuilder';
import {BookableresourcebookingItemRequestBuilder} from './msdyn_appointment_bookableresourcebooking/item/bookableresourcebookingItemRequestBuilder';
import {Msdyn_appointment_bookableresourcebookingRequestBuilder} from './msdyn_appointment_bookableresourcebooking/msdyn_appointment_bookableresourcebookingRequestBuilder';
import {Msdyn_recordingItemRequestBuilder} from './msdyn_appointment_msdyn_recording_appointment_activity/item/msdyn_recordingItemRequestBuilder';
import {Msdyn_appointment_msdyn_recording_appointment_activityRequestBuilder} from './msdyn_appointment_msdyn_recording_appointment_activity/msdyn_appointment_msdyn_recording_appointment_activityRequestBuilder';
import {Msdyn_resourcerequirementItemRequestBuilder} from './msdyn_appointment_msdyn_resourcerequirement/item/msdyn_resourcerequirementItemRequestBuilder';
import {Msdyn_appointment_msdyn_resourcerequirementRequestBuilder} from './msdyn_appointment_msdyn_resourcerequirement/msdyn_appointment_msdyn_resourcerequirementRequestBuilder';
import {Ownerid_appointmentRequestBuilder} from './ownerid_appointment/ownerid_appointmentRequestBuilder';
import {Owningbusinessunit_appointmentRequestBuilder} from './owningbusinessunit_appointment/owningbusinessunit_appointmentRequestBuilder';
import {Owningteam_appointmentRequestBuilder} from './owningteam_appointment/owningteam_appointmentRequestBuilder';
import {Owninguser_appointmentRequestBuilder} from './owninguser_appointment/owninguser_appointmentRequestBuilder';
import {Regardingobjectid_account_appointmentRequestBuilder} from './regardingobjectid_account_appointment/regardingobjectid_account_appointmentRequestBuilder';
import {Regardingobjectid_bookableresourcebooking_appointmentRequestBuilder} from './regardingobjectid_bookableresourcebooking_appointment/regardingobjectid_bookableresourcebooking_appointmentRequestBuilder';
import {Regardingobjectid_bookableresourcebookingheader_appointmentRequestBuilder} from './regardingobjectid_bookableresourcebookingheader_appointment/regardingobjectid_bookableresourcebookingheader_appointmentRequestBuilder';
import {Regardingobjectid_bulkoperation_appointmentRequestBuilder} from './regardingobjectid_bulkoperation_appointment/regardingobjectid_bulkoperation_appointmentRequestBuilder';
import {Regardingobjectid_campaign_appointmentRequestBuilder} from './regardingobjectid_campaign_appointment/regardingobjectid_campaign_appointmentRequestBuilder';
import {Regardingobjectid_campaignactivity_appointmentRequestBuilder} from './regardingobjectid_campaignactivity_appointment/regardingobjectid_campaignactivity_appointmentRequestBuilder';
import {Regardingobjectid_contact_appointmentRequestBuilder} from './regardingobjectid_contact_appointment/regardingobjectid_contact_appointmentRequestBuilder';
import {Regardingobjectid_contract_appointmentRequestBuilder} from './regardingobjectid_contract_appointment/regardingobjectid_contract_appointmentRequestBuilder';
import {Regardingobjectid_entitlement_appointmentRequestBuilder} from './regardingobjectid_entitlement_appointment/regardingobjectid_entitlement_appointmentRequestBuilder';
import {Regardingobjectid_entitlementtemplate_appointmentRequestBuilder} from './regardingobjectid_entitlementtemplate_appointment/regardingobjectid_entitlementtemplate_appointmentRequestBuilder';
import {Regardingobjectid_incident_appointmentRequestBuilder} from './regardingobjectid_incident_appointment/regardingobjectid_incident_appointmentRequestBuilder';
import {Regardingobjectid_invoice_appointmentRequestBuilder} from './regardingobjectid_invoice_appointment/regardingobjectid_invoice_appointmentRequestBuilder';
import {Regardingobjectid_knowledgearticle_appointmentRequestBuilder} from './regardingobjectid_knowledgearticle_appointment/regardingobjectid_knowledgearticle_appointmentRequestBuilder';
import {Regardingobjectid_knowledgebaserecord_appointmentRequestBuilder} from './regardingobjectid_knowledgebaserecord_appointment/regardingobjectid_knowledgebaserecord_appointmentRequestBuilder';
import {Regardingobjectid_lead_appointmentRequestBuilder} from './regardingobjectid_lead_appointment/regardingobjectid_lead_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_agreement_appointmentRequestBuilder} from './regardingobjectid_msdyn_agreement_appointment/regardingobjectid_msdyn_agreement_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_agreementbookingdate_appointmentRequestBuilder} from './regardingobjectid_msdyn_agreementbookingdate_appointment/regardingobjectid_msdyn_agreementbookingdate_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_agreementbookingincident_appointmentRequestBuilder} from './regardingobjectid_msdyn_agreementbookingincident_appointment/regardingobjectid_msdyn_agreementbookingincident_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_agreementbookingproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_agreementbookingproduct_appointment/regardingobjectid_msdyn_agreementbookingproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_agreementbookingservice_appointmentRequestBuilder} from './regardingobjectid_msdyn_agreementbookingservice_appointment/regardingobjectid_msdyn_agreementbookingservice_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_agreementbookingservicetask_appointmentRequestBuilder} from './regardingobjectid_msdyn_agreementbookingservicetask_appointment/regardingobjectid_msdyn_agreementbookingservicetask_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_agreementbookingsetup_appointmentRequestBuilder} from './regardingobjectid_msdyn_agreementbookingsetup_appointment/regardingobjectid_msdyn_agreementbookingsetup_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_agreementinvoicedate_appointmentRequestBuilder} from './regardingobjectid_msdyn_agreementinvoicedate_appointment/regardingobjectid_msdyn_agreementinvoicedate_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_agreementinvoiceproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_agreementinvoiceproduct_appointment/regardingobjectid_msdyn_agreementinvoiceproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_agreementinvoicesetup_appointmentRequestBuilder} from './regardingobjectid_msdyn_agreementinvoicesetup_appointment/regardingobjectid_msdyn_agreementinvoicesetup_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_bookingalertstatus_appointmentRequestBuilder} from './regardingobjectid_msdyn_bookingalertstatus_appointment/regardingobjectid_msdyn_bookingalertstatus_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_bookingrule_appointmentRequestBuilder} from './regardingobjectid_msdyn_bookingrule_appointment/regardingobjectid_msdyn_bookingrule_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_bookingtimestamp_appointmentRequestBuilder} from './regardingobjectid_msdyn_bookingtimestamp_appointment/regardingobjectid_msdyn_bookingtimestamp_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_customerasset_appointmentRequestBuilder} from './regardingobjectid_msdyn_customerasset_appointment/regardingobjectid_msdyn_customerasset_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_fieldservicesetting_appointmentRequestBuilder} from './regardingobjectid_msdyn_fieldservicesetting_appointment/regardingobjectid_msdyn_fieldservicesetting_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_incidenttypecharacteristic_appointmentRequestBuilder} from './regardingobjectid_msdyn_incidenttypecharacteristic_appointment/regardingobjectid_msdyn_incidenttypecharacteristic_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_incidenttypeproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_incidenttypeproduct_appointment/regardingobjectid_msdyn_incidenttypeproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_incidenttypeservice_appointmentRequestBuilder} from './regardingobjectid_msdyn_incidenttypeservice_appointment/regardingobjectid_msdyn_incidenttypeservice_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_inventoryadjustment_appointmentRequestBuilder} from './regardingobjectid_msdyn_inventoryadjustment_appointment/regardingobjectid_msdyn_inventoryadjustment_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_inventoryadjustmentproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_inventoryadjustmentproduct_appointment/regardingobjectid_msdyn_inventoryadjustmentproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_inventoryjournal_appointmentRequestBuilder} from './regardingobjectid_msdyn_inventoryjournal_appointment/regardingobjectid_msdyn_inventoryjournal_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_inventorytransfer_appointmentRequestBuilder} from './regardingobjectid_msdyn_inventorytransfer_appointment/regardingobjectid_msdyn_inventorytransfer_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_payment_appointmentRequestBuilder} from './regardingobjectid_msdyn_payment_appointment/regardingobjectid_msdyn_payment_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_paymentdetail_appointmentRequestBuilder} from './regardingobjectid_msdyn_paymentdetail_appointment/regardingobjectid_msdyn_paymentdetail_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_paymentmethod_appointmentRequestBuilder} from './regardingobjectid_msdyn_paymentmethod_appointment/regardingobjectid_msdyn_paymentmethod_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_paymentterm_appointmentRequestBuilder} from './regardingobjectid_msdyn_paymentterm_appointment/regardingobjectid_msdyn_paymentterm_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_playbookinstance_appointmentRequestBuilder} from './regardingobjectid_msdyn_playbookinstance_appointment/regardingobjectid_msdyn_playbookinstance_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_postalbum_appointmentRequestBuilder} from './regardingobjectid_msdyn_postalbum_appointment/regardingobjectid_msdyn_postalbum_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_postalcode_appointmentRequestBuilder} from './regardingobjectid_msdyn_postalcode_appointment/regardingobjectid_msdyn_postalcode_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_processnotes_appointmentRequestBuilder} from './regardingobjectid_msdyn_processnotes_appointment/regardingobjectid_msdyn_processnotes_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_productinventory_appointmentRequestBuilder} from './regardingobjectid_msdyn_productinventory_appointment/regardingobjectid_msdyn_productinventory_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_projectteam_appointmentRequestBuilder} from './regardingobjectid_msdyn_projectteam_appointment/regardingobjectid_msdyn_projectteam_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_purchaseorder_appointmentRequestBuilder} from './regardingobjectid_msdyn_purchaseorder_appointment/regardingobjectid_msdyn_purchaseorder_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_purchaseorderbill_appointmentRequestBuilder} from './regardingobjectid_msdyn_purchaseorderbill_appointment/regardingobjectid_msdyn_purchaseorderbill_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_purchaseorderproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_purchaseorderproduct_appointment/regardingobjectid_msdyn_purchaseorderproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_purchaseorderreceipt_appointmentRequestBuilder} from './regardingobjectid_msdyn_purchaseorderreceipt_appointment/regardingobjectid_msdyn_purchaseorderreceipt_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_purchaseorderreceiptproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_purchaseorderreceiptproduct_appointment/regardingobjectid_msdyn_purchaseorderreceiptproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_purchaseordersubstatus_appointmentRequestBuilder} from './regardingobjectid_msdyn_purchaseordersubstatus_appointment/regardingobjectid_msdyn_purchaseordersubstatus_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_quotebookingincident_appointmentRequestBuilder} from './regardingobjectid_msdyn_quotebookingincident_appointment/regardingobjectid_msdyn_quotebookingincident_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_quotebookingproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_quotebookingproduct_appointment/regardingobjectid_msdyn_quotebookingproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_quotebookingservice_appointmentRequestBuilder} from './regardingobjectid_msdyn_quotebookingservice_appointment/regardingobjectid_msdyn_quotebookingservice_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_quotebookingservicetask_appointmentRequestBuilder} from './regardingobjectid_msdyn_quotebookingservicetask_appointment/regardingobjectid_msdyn_quotebookingservicetask_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_resourceterritory_appointmentRequestBuilder} from './regardingobjectid_msdyn_resourceterritory_appointment/regardingobjectid_msdyn_resourceterritory_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_rma_appointmentRequestBuilder} from './regardingobjectid_msdyn_rma_appointment/regardingobjectid_msdyn_rma_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_rmaproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_rmaproduct_appointment/regardingobjectid_msdyn_rmaproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_rmareceipt_appointmentRequestBuilder} from './regardingobjectid_msdyn_rmareceipt_appointment/regardingobjectid_msdyn_rmareceipt_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_rmareceiptproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_rmareceiptproduct_appointment/regardingobjectid_msdyn_rmareceiptproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_rmasubstatus_appointmentRequestBuilder} from './regardingobjectid_msdyn_rmasubstatus_appointment/regardingobjectid_msdyn_rmasubstatus_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_rtv_appointmentRequestBuilder} from './regardingobjectid_msdyn_rtv_appointment/regardingobjectid_msdyn_rtv_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_rtvproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_rtvproduct_appointment/regardingobjectid_msdyn_rtvproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_rtvsubstatus_appointmentRequestBuilder} from './regardingobjectid_msdyn_rtvsubstatus_appointment/regardingobjectid_msdyn_rtvsubstatus_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_salessuggestion_appointmentRequestBuilder} from './regardingobjectid_msdyn_salessuggestion_appointment/regardingobjectid_msdyn_salessuggestion_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_shipvia_appointmentRequestBuilder} from './regardingobjectid_msdyn_shipvia_appointment/regardingobjectid_msdyn_shipvia_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_systemuserschedulersetting_appointmentRequestBuilder} from './regardingobjectid_msdyn_systemuserschedulersetting_appointment/regardingobjectid_msdyn_systemuserschedulersetting_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_timegroup_appointmentRequestBuilder} from './regardingobjectid_msdyn_timegroup_appointment/regardingobjectid_msdyn_timegroup_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_timegroupdetail_appointmentRequestBuilder} from './regardingobjectid_msdyn_timegroupdetail_appointment/regardingobjectid_msdyn_timegroupdetail_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_timeoffrequest_appointmentRequestBuilder} from './regardingobjectid_msdyn_timeoffrequest_appointment/regardingobjectid_msdyn_timeoffrequest_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_warehouse_appointmentRequestBuilder} from './regardingobjectid_msdyn_warehouse_appointment/regardingobjectid_msdyn_warehouse_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_workorder_appointmentRequestBuilder} from './regardingobjectid_msdyn_workorder_appointment/regardingobjectid_msdyn_workorder_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_workordercharacteristic_appointmentRequestBuilder} from './regardingobjectid_msdyn_workordercharacteristic_appointment/regardingobjectid_msdyn_workordercharacteristic_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_workorderincident_appointmentRequestBuilder} from './regardingobjectid_msdyn_workorderincident_appointment/regardingobjectid_msdyn_workorderincident_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_workorderproduct_appointmentRequestBuilder} from './regardingobjectid_msdyn_workorderproduct_appointment/regardingobjectid_msdyn_workorderproduct_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_workorderresourcerestriction_appointmentRequestBuilder} from './regardingobjectid_msdyn_workorderresourcerestriction_appointment/regardingobjectid_msdyn_workorderresourcerestriction_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_workorderservice_appointmentRequestBuilder} from './regardingobjectid_msdyn_workorderservice_appointment/regardingobjectid_msdyn_workorderservice_appointmentRequestBuilder';
import {Regardingobjectid_msdyn_workorderservicetask_appointmentRequestBuilder} from './regardingobjectid_msdyn_workorderservicetask_appointment/regardingobjectid_msdyn_workorderservicetask_appointmentRequestBuilder';
import {Regardingobjectid_opportunity_appointmentRequestBuilder} from './regardingobjectid_opportunity_appointment/regardingobjectid_opportunity_appointmentRequestBuilder';
import {Regardingobjectid_quote_appointmentRequestBuilder} from './regardingobjectid_quote_appointment/regardingobjectid_quote_appointmentRequestBuilder';
import {Regardingobjectid_salesorder_appointmentRequestBuilder} from './regardingobjectid_salesorder_appointment/regardingobjectid_salesorder_appointmentRequestBuilder';
import {Regardingobjectid_site_appointmentRequestBuilder} from './regardingobjectid_site_appointment/regardingobjectid_site_appointmentRequestBuilder';
import {Regardingobjectid_uii_action_appointmentRequestBuilder} from './regardingobjectid_uii_action_appointment/regardingobjectid_uii_action_appointmentRequestBuilder';
import {Regardingobjectid_uii_hostedapplication_appointmentRequestBuilder} from './regardingobjectid_uii_hostedapplication_appointment/regardingobjectid_uii_hostedapplication_appointmentRequestBuilder';
import {Regardingobjectid_uii_nonhostedapplication_appointmentRequestBuilder} from './regardingobjectid_uii_nonhostedapplication_appointment/regardingobjectid_uii_nonhostedapplication_appointmentRequestBuilder';
import {Regardingobjectid_uii_option_appointmentRequestBuilder} from './regardingobjectid_uii_option_appointment/regardingobjectid_uii_option_appointmentRequestBuilder';
import {Regardingobjectid_uii_savedsession_appointmentRequestBuilder} from './regardingobjectid_uii_savedsession_appointment/regardingobjectid_uii_savedsession_appointmentRequestBuilder';
import {Regardingobjectid_uii_workflow_appointmentRequestBuilder} from './regardingobjectid_uii_workflow_appointment/regardingobjectid_uii_workflow_appointmentRequestBuilder';
import {Regardingobjectid_uii_workflow_workflowstep_mapping_appointmentRequestBuilder} from './regardingobjectid_uii_workflow_workflowstep_mapping_appointment/regardingobjectid_uii_workflow_workflowstep_mapping_appointmentRequestBuilder';
import {Regardingobjectid_uii_workflowstep_appointmentRequestBuilder} from './regardingobjectid_uii_workflowstep_appointment/regardingobjectid_uii_workflowstep_appointmentRequestBuilder';
import {Seriesid_recurringappointmentmasterRequestBuilder} from './seriesid_recurringappointmentmaster/seriesid_recurringappointmentmasterRequestBuilder';
import {Serviceid_appointmentRequestBuilder} from './serviceid_appointment/serviceid_appointmentRequestBuilder';
import {Sla_appointment_slaRequestBuilder} from './sla_appointment_sla/sla_appointment_slaRequestBuilder';
import {Slainvokedid_appointment_slaRequestBuilder} from './slainvokedid_appointment_sla/slainvokedid_appointment_slaRequestBuilder';
import {SlakpiinstanceItemRequestBuilder} from './slakpiinstance_appointment/item/slakpiinstanceItemRequestBuilder';
import {Slakpiinstance_appointmentRequestBuilder} from './slakpiinstance_appointment/slakpiinstance_appointmentRequestBuilder';
import {Stageid_processstageRequestBuilder} from './stageid_processstage/stageid_processstageRequestBuilder';
import {Transactioncurrencyid_appointmentRequestBuilder} from './transactioncurrencyid_appointment/transactioncurrencyid_appointmentRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of appointment entities.  */
export class AppointmentItemRequestBuilder {
    public get activityid_activitypointer(): Activityid_activitypointerRequestBuilder {
        return new Activityid_activitypointerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get addRecurrence(): AddRecurrenceRequestBuilder {
        return new AddRecurrenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_actioncard(): Appointment_actioncardRequestBuilder {
        return new Appointment_actioncardRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_activity_mime_attachment(): Appointment_activity_mime_attachmentRequestBuilder {
        return new Appointment_activity_mime_attachmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_activity_parties(): Appointment_activity_partiesRequestBuilder {
        return new Appointment_activity_partiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_Annotation(): Appointment_AnnotationRequestBuilder {
        return new Appointment_AnnotationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_AsyncOperations(): Appointment_AsyncOperationsRequestBuilder {
        return new Appointment_AsyncOperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_BulkDeleteFailures(): Appointment_BulkDeleteFailuresRequestBuilder {
        return new Appointment_BulkDeleteFailuresRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_campaignresponse(): Appointment_campaignresponseRequestBuilder {
        return new Appointment_campaignresponseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_connections1(): Appointment_connections1RequestBuilder {
        return new Appointment_connections1RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_connections2(): Appointment_connections2RequestBuilder {
        return new Appointment_connections2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_DuplicateBaseRecord(): Appointment_DuplicateBaseRecordRequestBuilder {
        return new Appointment_DuplicateBaseRecordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_DuplicateMatchingRecord(): Appointment_DuplicateMatchingRecordRequestBuilder {
        return new Appointment_DuplicateMatchingRecordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_PostFollows(): Appointment_PostFollowsRequestBuilder {
        return new Appointment_PostFollowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_PostRegardings(): Appointment_PostRegardingsRequestBuilder {
        return new Appointment_PostRegardingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_principalobjectattributeaccess(): Appointment_principalobjectattributeaccessRequestBuilder {
        return new Appointment_principalobjectattributeaccessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_ProcessSessions(): Appointment_ProcessSessionsRequestBuilder {
        return new Appointment_ProcessSessionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_QueueItem(): Appointment_QueueItemRequestBuilder {
        return new Appointment_QueueItemRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get appointment_SyncErrors(): Appointment_SyncErrorsRequestBuilder {
        return new Appointment_SyncErrorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createdby_appointment(): Createdby_appointmentRequestBuilder {
        return new Createdby_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createdonbehalfby_appointment(): Createdonbehalfby_appointmentRequestBuilder {
        return new Createdonbehalfby_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get modifiedby_appointment(): Modifiedby_appointmentRequestBuilder {
        return new Modifiedby_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get modifiedonbehalfby_appointment(): Modifiedonbehalfby_appointmentRequestBuilder {
        return new Modifiedonbehalfby_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_appointment_bookableresourcebooking(): Msdyn_appointment_bookableresourcebookingRequestBuilder {
        return new Msdyn_appointment_bookableresourcebookingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_appointment_msdyn_recording_appointment_activity(): Msdyn_appointment_msdyn_recording_appointment_activityRequestBuilder {
        return new Msdyn_appointment_msdyn_recording_appointment_activityRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get msdyn_appointment_msdyn_resourcerequirement(): Msdyn_appointment_msdyn_resourcerequirementRequestBuilder {
        return new Msdyn_appointment_msdyn_resourcerequirementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ownerid_appointment(): Ownerid_appointmentRequestBuilder {
        return new Ownerid_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get owningbusinessunit_appointment(): Owningbusinessunit_appointmentRequestBuilder {
        return new Owningbusinessunit_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get owningteam_appointment(): Owningteam_appointmentRequestBuilder {
        return new Owningteam_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get owninguser_appointment(): Owninguser_appointmentRequestBuilder {
        return new Owninguser_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get regardingobjectid_account_appointment(): Regardingobjectid_account_appointmentRequestBuilder {
        return new Regardingobjectid_account_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_bookableresourcebooking_appointment(): Regardingobjectid_bookableresourcebooking_appointmentRequestBuilder {
        return new Regardingobjectid_bookableresourcebooking_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_bookableresourcebookingheader_appointment(): Regardingobjectid_bookableresourcebookingheader_appointmentRequestBuilder {
        return new Regardingobjectid_bookableresourcebookingheader_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_bulkoperation_appointment(): Regardingobjectid_bulkoperation_appointmentRequestBuilder {
        return new Regardingobjectid_bulkoperation_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_campaign_appointment(): Regardingobjectid_campaign_appointmentRequestBuilder {
        return new Regardingobjectid_campaign_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_campaignactivity_appointment(): Regardingobjectid_campaignactivity_appointmentRequestBuilder {
        return new Regardingobjectid_campaignactivity_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_contact_appointment(): Regardingobjectid_contact_appointmentRequestBuilder {
        return new Regardingobjectid_contact_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_contract_appointment(): Regardingobjectid_contract_appointmentRequestBuilder {
        return new Regardingobjectid_contract_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_entitlement_appointment(): Regardingobjectid_entitlement_appointmentRequestBuilder {
        return new Regardingobjectid_entitlement_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_entitlementtemplate_appointment(): Regardingobjectid_entitlementtemplate_appointmentRequestBuilder {
        return new Regardingobjectid_entitlementtemplate_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_incident_appointment(): Regardingobjectid_incident_appointmentRequestBuilder {
        return new Regardingobjectid_incident_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_invoice_appointment(): Regardingobjectid_invoice_appointmentRequestBuilder {
        return new Regardingobjectid_invoice_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_knowledgearticle_appointment(): Regardingobjectid_knowledgearticle_appointmentRequestBuilder {
        return new Regardingobjectid_knowledgearticle_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_knowledgebaserecord_appointment(): Regardingobjectid_knowledgebaserecord_appointmentRequestBuilder {
        return new Regardingobjectid_knowledgebaserecord_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_lead_appointment(): Regardingobjectid_lead_appointmentRequestBuilder {
        return new Regardingobjectid_lead_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_agreement_appointment(): Regardingobjectid_msdyn_agreement_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_agreement_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_agreementbookingdate_appointment(): Regardingobjectid_msdyn_agreementbookingdate_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_agreementbookingdate_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_agreementbookingincident_appointment(): Regardingobjectid_msdyn_agreementbookingincident_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_agreementbookingincident_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_agreementbookingproduct_appointment(): Regardingobjectid_msdyn_agreementbookingproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_agreementbookingproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_agreementbookingservice_appointment(): Regardingobjectid_msdyn_agreementbookingservice_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_agreementbookingservice_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_agreementbookingservicetask_appointment(): Regardingobjectid_msdyn_agreementbookingservicetask_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_agreementbookingservicetask_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_agreementbookingsetup_appointment(): Regardingobjectid_msdyn_agreementbookingsetup_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_agreementbookingsetup_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_agreementinvoicedate_appointment(): Regardingobjectid_msdyn_agreementinvoicedate_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_agreementinvoicedate_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_agreementinvoiceproduct_appointment(): Regardingobjectid_msdyn_agreementinvoiceproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_agreementinvoiceproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_agreementinvoicesetup_appointment(): Regardingobjectid_msdyn_agreementinvoicesetup_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_agreementinvoicesetup_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_bookingalertstatus_appointment(): Regardingobjectid_msdyn_bookingalertstatus_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_bookingalertstatus_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_bookingrule_appointment(): Regardingobjectid_msdyn_bookingrule_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_bookingrule_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_bookingtimestamp_appointment(): Regardingobjectid_msdyn_bookingtimestamp_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_bookingtimestamp_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_customerasset_appointment(): Regardingobjectid_msdyn_customerasset_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_customerasset_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_fieldservicesetting_appointment(): Regardingobjectid_msdyn_fieldservicesetting_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_fieldservicesetting_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_incidenttypecharacteristic_appointment(): Regardingobjectid_msdyn_incidenttypecharacteristic_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_incidenttypecharacteristic_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_incidenttypeproduct_appointment(): Regardingobjectid_msdyn_incidenttypeproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_incidenttypeproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_incidenttypeservice_appointment(): Regardingobjectid_msdyn_incidenttypeservice_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_incidenttypeservice_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_inventoryadjustment_appointment(): Regardingobjectid_msdyn_inventoryadjustment_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_inventoryadjustment_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_inventoryadjustmentproduct_appointment(): Regardingobjectid_msdyn_inventoryadjustmentproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_inventoryadjustmentproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_inventoryjournal_appointment(): Regardingobjectid_msdyn_inventoryjournal_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_inventoryjournal_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_inventorytransfer_appointment(): Regardingobjectid_msdyn_inventorytransfer_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_inventorytransfer_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_payment_appointment(): Regardingobjectid_msdyn_payment_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_payment_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_paymentdetail_appointment(): Regardingobjectid_msdyn_paymentdetail_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_paymentdetail_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_paymentmethod_appointment(): Regardingobjectid_msdyn_paymentmethod_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_paymentmethod_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_paymentterm_appointment(): Regardingobjectid_msdyn_paymentterm_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_paymentterm_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_playbookinstance_appointment(): Regardingobjectid_msdyn_playbookinstance_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_playbookinstance_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_postalbum_appointment(): Regardingobjectid_msdyn_postalbum_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_postalbum_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_postalcode_appointment(): Regardingobjectid_msdyn_postalcode_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_postalcode_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_processnotes_appointment(): Regardingobjectid_msdyn_processnotes_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_processnotes_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_productinventory_appointment(): Regardingobjectid_msdyn_productinventory_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_productinventory_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_projectteam_appointment(): Regardingobjectid_msdyn_projectteam_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_projectteam_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_purchaseorder_appointment(): Regardingobjectid_msdyn_purchaseorder_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_purchaseorder_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_purchaseorderbill_appointment(): Regardingobjectid_msdyn_purchaseorderbill_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_purchaseorderbill_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_purchaseorderproduct_appointment(): Regardingobjectid_msdyn_purchaseorderproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_purchaseorderproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_purchaseorderreceipt_appointment(): Regardingobjectid_msdyn_purchaseorderreceipt_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_purchaseorderreceipt_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_purchaseorderreceiptproduct_appointment(): Regardingobjectid_msdyn_purchaseorderreceiptproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_purchaseorderreceiptproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_purchaseordersubstatus_appointment(): Regardingobjectid_msdyn_purchaseordersubstatus_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_purchaseordersubstatus_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_quotebookingincident_appointment(): Regardingobjectid_msdyn_quotebookingincident_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_quotebookingincident_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_quotebookingproduct_appointment(): Regardingobjectid_msdyn_quotebookingproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_quotebookingproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_quotebookingservice_appointment(): Regardingobjectid_msdyn_quotebookingservice_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_quotebookingservice_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_quotebookingservicetask_appointment(): Regardingobjectid_msdyn_quotebookingservicetask_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_quotebookingservicetask_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_resourceterritory_appointment(): Regardingobjectid_msdyn_resourceterritory_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_resourceterritory_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_rma_appointment(): Regardingobjectid_msdyn_rma_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_rma_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_rmaproduct_appointment(): Regardingobjectid_msdyn_rmaproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_rmaproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_rmareceipt_appointment(): Regardingobjectid_msdyn_rmareceipt_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_rmareceipt_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_rmareceiptproduct_appointment(): Regardingobjectid_msdyn_rmareceiptproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_rmareceiptproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_rmasubstatus_appointment(): Regardingobjectid_msdyn_rmasubstatus_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_rmasubstatus_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_rtv_appointment(): Regardingobjectid_msdyn_rtv_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_rtv_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_rtvproduct_appointment(): Regardingobjectid_msdyn_rtvproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_rtvproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_rtvsubstatus_appointment(): Regardingobjectid_msdyn_rtvsubstatus_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_rtvsubstatus_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_salessuggestion_appointment(): Regardingobjectid_msdyn_salessuggestion_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_salessuggestion_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_shipvia_appointment(): Regardingobjectid_msdyn_shipvia_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_shipvia_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_systemuserschedulersetting_appointment(): Regardingobjectid_msdyn_systemuserschedulersetting_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_systemuserschedulersetting_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_timegroup_appointment(): Regardingobjectid_msdyn_timegroup_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_timegroup_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_timegroupdetail_appointment(): Regardingobjectid_msdyn_timegroupdetail_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_timegroupdetail_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_timeoffrequest_appointment(): Regardingobjectid_msdyn_timeoffrequest_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_timeoffrequest_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_warehouse_appointment(): Regardingobjectid_msdyn_warehouse_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_warehouse_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_workorder_appointment(): Regardingobjectid_msdyn_workorder_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_workorder_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_workordercharacteristic_appointment(): Regardingobjectid_msdyn_workordercharacteristic_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_workordercharacteristic_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_workorderincident_appointment(): Regardingobjectid_msdyn_workorderincident_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_workorderincident_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_workorderproduct_appointment(): Regardingobjectid_msdyn_workorderproduct_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_workorderproduct_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_workorderresourcerestriction_appointment(): Regardingobjectid_msdyn_workorderresourcerestriction_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_workorderresourcerestriction_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_workorderservice_appointment(): Regardingobjectid_msdyn_workorderservice_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_workorderservice_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_msdyn_workorderservicetask_appointment(): Regardingobjectid_msdyn_workorderservicetask_appointmentRequestBuilder {
        return new Regardingobjectid_msdyn_workorderservicetask_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_opportunity_appointment(): Regardingobjectid_opportunity_appointmentRequestBuilder {
        return new Regardingobjectid_opportunity_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_quote_appointment(): Regardingobjectid_quote_appointmentRequestBuilder {
        return new Regardingobjectid_quote_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_salesorder_appointment(): Regardingobjectid_salesorder_appointmentRequestBuilder {
        return new Regardingobjectid_salesorder_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_site_appointment(): Regardingobjectid_site_appointmentRequestBuilder {
        return new Regardingobjectid_site_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_uii_action_appointment(): Regardingobjectid_uii_action_appointmentRequestBuilder {
        return new Regardingobjectid_uii_action_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_uii_hostedapplication_appointment(): Regardingobjectid_uii_hostedapplication_appointmentRequestBuilder {
        return new Regardingobjectid_uii_hostedapplication_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_uii_nonhostedapplication_appointment(): Regardingobjectid_uii_nonhostedapplication_appointmentRequestBuilder {
        return new Regardingobjectid_uii_nonhostedapplication_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_uii_option_appointment(): Regardingobjectid_uii_option_appointmentRequestBuilder {
        return new Regardingobjectid_uii_option_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_uii_savedsession_appointment(): Regardingobjectid_uii_savedsession_appointmentRequestBuilder {
        return new Regardingobjectid_uii_savedsession_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_uii_workflow_appointment(): Regardingobjectid_uii_workflow_appointmentRequestBuilder {
        return new Regardingobjectid_uii_workflow_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_uii_workflow_workflowstep_mapping_appointment(): Regardingobjectid_uii_workflow_workflowstep_mapping_appointmentRequestBuilder {
        return new Regardingobjectid_uii_workflow_workflowstep_mapping_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get regardingobjectid_uii_workflowstep_appointment(): Regardingobjectid_uii_workflowstep_appointmentRequestBuilder {
        return new Regardingobjectid_uii_workflowstep_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get seriesid_recurringappointmentmaster(): Seriesid_recurringappointmentmasterRequestBuilder {
        return new Seriesid_recurringappointmentmasterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get serviceid_appointment(): Serviceid_appointmentRequestBuilder {
        return new Serviceid_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sla_appointment_sla(): Sla_appointment_slaRequestBuilder {
        return new Sla_appointment_slaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get slainvokedid_appointment_sla(): Slainvokedid_appointment_slaRequestBuilder {
        return new Slainvokedid_appointment_slaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get slakpiinstance_appointment(): Slakpiinstance_appointmentRequestBuilder {
        return new Slakpiinstance_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get stageid_processstage(): Stageid_processstageRequestBuilder {
        return new Stageid_processstageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get transactioncurrencyid_appointment(): Transactioncurrencyid_appointmentRequestBuilder {
        return new Transactioncurrencyid_appointmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the ApiSdk.appointments.item.appointment_actioncard.item collection
     * @param id Unique identifier of the item
     * @returns a actioncardItemRequestBuilder
     */
    public appointment_actioncardById(id: string) : ActioncardItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["actioncard_actioncardid"] = id
        return new ActioncardItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.appointment_activity_mime_attachment.item collection
     * @param id Unique identifier of the item
     * @returns a activitymimeattachmentItemRequestBuilder
     */
    public appointment_activity_mime_attachmentById(id: string) : ActivitymimeattachmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["activitymimeattachment_activitymimeattachmentid"] = id
        return new ActivitymimeattachmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.appointment_activity_parties.item collection
     * @param id Unique identifier of the item
     * @returns a activitypartyItemRequestBuilder
     */
    public appointment_activity_partiesById(id: string) : ActivitypartyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["activityparty_activitypartyid"] = id
        return new ActivitypartyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.Appointment_Annotation.item collection
     * @param id Unique identifier of the item
     * @returns a annotationItemRequestBuilder
     */
    public appointment_AnnotationById(id: string) : AnnotationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["annotation_annotationid"] = id
        return new AnnotationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.Appointment_AsyncOperations.item collection
     * @param id Unique identifier of the item
     * @returns a asyncoperationItemRequestBuilder
     */
    public appointment_AsyncOperationsById(id: string) : AsyncoperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["asyncoperation_asyncoperationid"] = id
        return new AsyncoperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.Appointment_BulkDeleteFailures.item collection
     * @param id Unique identifier of the item
     * @returns a bulkdeletefailureItemRequestBuilder
     */
    public appointment_BulkDeleteFailuresById(id: string) : BulkdeletefailureItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bulkdeletefailure_bulkdeletefailureid"] = id
        return new BulkdeletefailureItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.appointment_campaignresponse.item collection
     * @param id Unique identifier of the item
     * @returns a campaignresponseItemRequestBuilder
     */
    public appointment_campaignresponseById(id: string) : CampaignresponseItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["campaignresponse_activityid"] = id
        return new CampaignresponseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.appointment_connections1.item collection
     * @param id Unique identifier of the item
     * @returns a connectionItemRequestBuilder
     */
    public appointment_connections1ById(id: string) : ie4ed8cc9b9d8470e492cfb3b97824b0855b2a216edc1f185c9b49a0aac457037 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["connection_connectionid"] = id
        return new ie4ed8cc9b9d8470e492cfb3b97824b0855b2a216edc1f185c9b49a0aac457037(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.appointment_connections2.item collection
     * @param id Unique identifier of the item
     * @returns a connectionItemRequestBuilder
     */
    public appointment_connections2ById(id: string) : i28d33e01f8a4ec41b2b1d9e31b22ac7ee9850a1a9e58900b3bac8922f8117874 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["connection_connectionid"] = id
        return new i28d33e01f8a4ec41b2b1d9e31b22ac7ee9850a1a9e58900b3bac8922f8117874(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.Appointment_DuplicateBaseRecord.item collection
     * @param id Unique identifier of the item
     * @returns a duplicaterecordItemRequestBuilder
     */
    public appointment_DuplicateBaseRecordById(id: string) : i711b5747f7095e0ea9825c80168f7f88857adf2b421b3b6ca506546edd460a23 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["duplicaterecord_duplicateid"] = id
        return new i711b5747f7095e0ea9825c80168f7f88857adf2b421b3b6ca506546edd460a23(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.Appointment_DuplicateMatchingRecord.item collection
     * @param id Unique identifier of the item
     * @returns a duplicaterecordItemRequestBuilder
     */
    public appointment_DuplicateMatchingRecordById(id: string) : i06929966b8297a66e962125dffc56812917d8412e0b094b15bbc4eab6906d611 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["duplicaterecord_duplicateid"] = id
        return new i06929966b8297a66e962125dffc56812917d8412e0b094b15bbc4eab6906d611(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.appointment_PostFollows.item collection
     * @param id Unique identifier of the item
     * @returns a postfollowItemRequestBuilder
     */
    public appointment_PostFollowsById(id: string) : PostfollowItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["postfollow_postfollowid"] = id
        return new PostfollowItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.appointment_PostRegardings.item collection
     * @param id Unique identifier of the item
     * @returns a postregardingItemRequestBuilder
     */
    public appointment_PostRegardingsById(id: string) : PostregardingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["postregarding_postregardingid"] = id
        return new PostregardingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.appointment_principalobjectattributeaccess.item collection
     * @param id Unique identifier of the item
     * @returns a principalobjectattributeaccessItemRequestBuilder
     */
    public appointment_principalobjectattributeaccessById(id: string) : PrincipalobjectattributeaccessItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["principalobjectattributeaccess_principalobjectattributeaccessid"] = id
        return new PrincipalobjectattributeaccessItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.Appointment_ProcessSessions.item collection
     * @param id Unique identifier of the item
     * @returns a processsessionItemRequestBuilder
     */
    public appointment_ProcessSessionsById(id: string) : ProcesssessionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["processsession_processsessionid"] = id
        return new ProcesssessionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.Appointment_QueueItem.item collection
     * @param id Unique identifier of the item
     * @returns a queueitemItemRequestBuilder
     */
    public appointment_QueueItemById(id: string) : QueueitemItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["queueitem_queueitemid"] = id
        return new QueueitemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.Appointment_SyncErrors.item collection
     * @param id Unique identifier of the item
     * @returns a syncerrorItemRequestBuilder
     */
    public appointment_SyncErrorsById(id: string) : SyncerrorItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["syncerror_syncerrorid"] = id
        return new SyncerrorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AppointmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/appointments/{appointment_activityid}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from appointments
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
     * Get entity from appointments by key
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
     * Update entity in appointments
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Appointment | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
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
     * Delete entity from appointments
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
     * Get entity from appointments by key
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Appointment
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Appointment | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Appointment>(requestInfo, createAppointmentFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.msdyn_appointment_bookableresourcebooking.item collection
     * @param id Unique identifier of the item
     * @returns a bookableresourcebookingItemRequestBuilder
     */
    public msdyn_appointment_bookableresourcebookingById(id: string) : BookableresourcebookingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookableresourcebooking_bookableresourcebookingid"] = id
        return new BookableresourcebookingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.msdyn_appointment_msdyn_recording_appointment_activity.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_recordingItemRequestBuilder
     */
    public msdyn_appointment_msdyn_recording_appointment_activityById(id: string) : Msdyn_recordingItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_recording_msdyn_recordingid"] = id
        return new Msdyn_recordingItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.appointments.item.msdyn_appointment_msdyn_resourcerequirement.item collection
     * @param id Unique identifier of the item
     * @returns a msdyn_resourcerequirementItemRequestBuilder
     */
    public msdyn_appointment_msdyn_resourcerequirementById(id: string) : Msdyn_resourcerequirementItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["msdyn_resourcerequirement_msdyn_resourcerequirementid"] = id
        return new Msdyn_resourcerequirementItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in appointments
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Appointment | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the ApiSdk.appointments.item.slakpiinstance_appointment.item collection
     * @param id Unique identifier of the item
     * @returns a slakpiinstanceItemRequestBuilder
     */
    public slakpiinstance_appointmentById(id: string) : SlakpiinstanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["slakpiinstance_slakpiinstanceid"] = id
        return new SlakpiinstanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
