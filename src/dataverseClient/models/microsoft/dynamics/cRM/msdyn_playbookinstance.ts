import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createInvoiceFromDiscriminatorValue} from './createInvoiceFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_playbookcategoryFromDiscriminatorValue} from './createMsdyn_playbookcategoryFromDiscriminatorValue';
import {createMsdyn_playbooktemplateFromDiscriminatorValue} from './createMsdyn_playbooktemplateFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Account, Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Contact, Crmbaseentity, Duplicaterecord, Email, Fax, Invoice, Lead, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_playbookcategory, Msdyn_playbooktemplate, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunity, Opportunityclose, Orderclose, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Quote, Quoteclose, Recurringappointmentmaster, Salesorder, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_playbookinstance extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_categoryid_value?: string | undefined;
    private __msdyn_playbooktemplateid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __regarding_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_activitiesassociated?: number | undefined;
    private _msdyn_activitiesclosed?: number | undefined;
    private _msdyn_categoryid?: Msdyn_playbookcategory | undefined;
    private _msdyn_estimatedclose?: Date | undefined;
    private _msdyn_evaluateactivityclosure?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_playbookinstance_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_playbookinstance_Annotations?: Annotation[] | undefined;
    private _msdyn_playbookinstance_Appointments?: Appointment[] | undefined;
    private _msdyn_playbookinstance_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_playbookinstance_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_playbookinstance_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_playbookinstance_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_playbookinstance_Emails?: Email[] | undefined;
    private _msdyn_playbookinstance_Faxes?: Fax[] | undefined;
    private _msdyn_playbookinstance_Letters?: Letter[] | undefined;
    private _msdyn_playbookinstance_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_playbookinstance_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_playbookinstance_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_playbookinstance_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_playbookinstance_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_playbookinstance_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_playbookinstance_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_playbookinstance_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_playbookinstance_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_playbookinstance_OpportunityCloses?: Opportunityclose[] | undefined;
    private _msdyn_playbookinstance_OrderCloses?: Orderclose[] | undefined;
    private _msdyn_playbookinstance_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_playbookinstance_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_playbookinstance_ProcessSession?: Processsession[] | undefined;
    private _msdyn_playbookinstance_QuoteCloses?: Quoteclose[] | undefined;
    private _msdyn_playbookinstance_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_playbookinstance_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_playbookinstance_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_playbookinstance_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_playbookinstance_Tasks?: Task[] | undefined;
    private _msdyn_playbookinstanceid?: string | undefined;
    private _msdyn_playbooktemplateid?: Msdyn_playbooktemplate | undefined;
    private _msdyn_trackprogress?: boolean | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _regarding_account?: Account | undefined;
    private _regarding_contact?: Contact | undefined;
    private _regarding_invoice?: Invoice | undefined;
    private _regarding_lead?: Lead | undefined;
    private _regarding_opportunity?: Opportunity | undefined;
    private _regarding_quote?: Quote | undefined;
    private _regarding_salesorder?: Salesorder | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyn_categoryid_value property value. 
     * @returns a string
     */
    public get _msdyn_categoryid_value() {
        return this.__msdyn_categoryid_value;
    };
    /**
     * Sets the _msdyn_categoryid_value property value. 
     * @param value Value to set for the _msdyn_categoryid_value property.
     */
    public set _msdyn_categoryid_value(value: string | undefined) {
        this.__msdyn_categoryid_value = value;
    };
    /**
     * Gets the _msdyn_playbooktemplateid_value property value. 
     * @returns a string
     */
    public get _msdyn_playbooktemplateid_value() {
        return this.__msdyn_playbooktemplateid_value;
    };
    /**
     * Sets the _msdyn_playbooktemplateid_value property value. 
     * @param value Value to set for the _msdyn_playbooktemplateid_value property.
     */
    public set _msdyn_playbooktemplateid_value(value: string | undefined) {
        this.__msdyn_playbooktemplateid_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _regarding_value property value. 
     * @returns a string
     */
    public get _regarding_value() {
        return this.__regarding_value;
    };
    /**
     * Sets the _regarding_value property value. 
     * @param value Value to set for the _regarding_value property.
     */
    public set _regarding_value(value: string | undefined) {
        this.__regarding_value = value;
    };
    /**
     * Instantiates a new msdyn_playbookinstance and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_categoryid_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._msdyn_categoryid_value = n.getStringValue(); },
            "_msdyn_playbooktemplateid_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._msdyn_playbooktemplateid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._owninguser_value = n.getStringValue(); },
            "_regarding_value": (o, n) => { (o as unknown as Msdyn_playbookinstance)._regarding_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_playbookinstance).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_playbookinstance).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_playbookinstance).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_playbookinstance).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_playbookinstance).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_playbookinstance).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_playbookinstance).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_activitiesassociated": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_activitiesassociated = n.getNumberValue(); },
            "msdyn_activitiesclosed": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_activitiesclosed = n.getNumberValue(); },
            "msdyn_categoryid": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_categoryid = n.getObjectValue<Msdyn_playbookcategory>(createMsdyn_playbookcategoryFromDiscriminatorValue); },
            "msdyn_estimatedclose": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_estimatedclose = n.getDateValue(); },
            "msdyn_evaluateactivityclosure": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_evaluateactivityclosure = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_name = n.getStringValue(); },
            "msdyn_playbookinstance_ActivityPointers": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_playbookinstance_Annotations": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_playbookinstance_Appointments": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_playbookinstance_AsyncOperations": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_playbookinstance_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_playbookinstance_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_playbookinstance_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_playbookinstance_Emails": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_playbookinstance_Faxes": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_playbookinstance_Letters": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_playbookinstance_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_playbookinstance_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_playbookinstance_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_playbookinstance_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_playbookinstance_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_playbookinstance_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_playbookinstance_msfp_alerts": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_playbookinstance_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_playbookinstance_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_playbookinstance_OpportunityCloses": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_OpportunityCloses = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "msdyn_playbookinstance_OrderCloses": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_OrderCloses = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "msdyn_playbookinstance_PhoneCalls": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_playbookinstance_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_playbookinstance_ProcessSession": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_playbookinstance_QuoteCloses": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_QuoteCloses = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "msdyn_playbookinstance_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_playbookinstance_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_playbookinstance_SocialActivities": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_playbookinstance_SyncErrors": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_playbookinstance_Tasks": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstance_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_playbookinstanceid": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbookinstanceid = n.getStringValue(); },
            "msdyn_playbooktemplateid": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_playbooktemplateid = n.getObjectValue<Msdyn_playbooktemplate>(createMsdyn_playbooktemplateFromDiscriminatorValue); },
            "msdyn_trackprogress": (o, n) => { (o as unknown as Msdyn_playbookinstance).msdyn_trackprogress = n.getBooleanValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_playbookinstance).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_playbookinstance).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_playbookinstance).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_playbookinstance).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_playbookinstance).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "regarding_account": (o, n) => { (o as unknown as Msdyn_playbookinstance).regarding_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regarding_contact": (o, n) => { (o as unknown as Msdyn_playbookinstance).regarding_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "regarding_invoice": (o, n) => { (o as unknown as Msdyn_playbookinstance).regarding_invoice = n.getObjectValue<Invoice>(createInvoiceFromDiscriminatorValue); },
            "regarding_lead": (o, n) => { (o as unknown as Msdyn_playbookinstance).regarding_lead = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regarding_opportunity": (o, n) => { (o as unknown as Msdyn_playbookinstance).regarding_opportunity = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "regarding_quote": (o, n) => { (o as unknown as Msdyn_playbookinstance).regarding_quote = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "regarding_salesorder": (o, n) => { (o as unknown as Msdyn_playbookinstance).regarding_salesorder = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_playbookinstance).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_playbookinstance).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_playbookinstance).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_playbookinstance).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_playbookinstance).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_activitiesassociated property value. 
     * @returns a integer
     */
    public get msdyn_activitiesassociated() {
        return this._msdyn_activitiesassociated;
    };
    /**
     * Sets the msdyn_activitiesassociated property value. 
     * @param value Value to set for the msdyn_activitiesassociated property.
     */
    public set msdyn_activitiesassociated(value: number | undefined) {
        this._msdyn_activitiesassociated = value;
    };
    /**
     * Gets the msdyn_activitiesclosed property value. 
     * @returns a integer
     */
    public get msdyn_activitiesclosed() {
        return this._msdyn_activitiesclosed;
    };
    /**
     * Sets the msdyn_activitiesclosed property value. 
     * @param value Value to set for the msdyn_activitiesclosed property.
     */
    public set msdyn_activitiesclosed(value: number | undefined) {
        this._msdyn_activitiesclosed = value;
    };
    /**
     * Gets the msdyn_categoryid property value. 
     * @returns a msdyn_playbookcategory
     */
    public get msdyn_categoryid() {
        return this._msdyn_categoryid;
    };
    /**
     * Sets the msdyn_categoryid property value. 
     * @param value Value to set for the msdyn_categoryid property.
     */
    public set msdyn_categoryid(value: Msdyn_playbookcategory | undefined) {
        this._msdyn_categoryid = value;
    };
    /**
     * Gets the msdyn_estimatedclose property value. 
     * @returns a Date
     */
    public get msdyn_estimatedclose() {
        return this._msdyn_estimatedclose;
    };
    /**
     * Sets the msdyn_estimatedclose property value. 
     * @param value Value to set for the msdyn_estimatedclose property.
     */
    public set msdyn_estimatedclose(value: Date | undefined) {
        this._msdyn_estimatedclose = value;
    };
    /**
     * Gets the msdyn_evaluateactivityclosure property value. 
     * @returns a boolean
     */
    public get msdyn_evaluateactivityclosure() {
        return this._msdyn_evaluateactivityclosure;
    };
    /**
     * Sets the msdyn_evaluateactivityclosure property value. 
     * @param value Value to set for the msdyn_evaluateactivityclosure property.
     */
    public set msdyn_evaluateactivityclosure(value: boolean | undefined) {
        this._msdyn_evaluateactivityclosure = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_playbookinstance_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_playbookinstance_ActivityPointers() {
        return this._msdyn_playbookinstance_ActivityPointers;
    };
    /**
     * Sets the msdyn_playbookinstance_ActivityPointers property value. 
     * @param value Value to set for the msdyn_playbookinstance_ActivityPointers property.
     */
    public set msdyn_playbookinstance_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_playbookinstance_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_playbookinstance_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_playbookinstance_Annotations() {
        return this._msdyn_playbookinstance_Annotations;
    };
    /**
     * Sets the msdyn_playbookinstance_Annotations property value. 
     * @param value Value to set for the msdyn_playbookinstance_Annotations property.
     */
    public set msdyn_playbookinstance_Annotations(value: Annotation[] | undefined) {
        this._msdyn_playbookinstance_Annotations = value;
    };
    /**
     * Gets the msdyn_playbookinstance_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_playbookinstance_Appointments() {
        return this._msdyn_playbookinstance_Appointments;
    };
    /**
     * Sets the msdyn_playbookinstance_Appointments property value. 
     * @param value Value to set for the msdyn_playbookinstance_Appointments property.
     */
    public set msdyn_playbookinstance_Appointments(value: Appointment[] | undefined) {
        this._msdyn_playbookinstance_Appointments = value;
    };
    /**
     * Gets the msdyn_playbookinstance_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_playbookinstance_AsyncOperations() {
        return this._msdyn_playbookinstance_AsyncOperations;
    };
    /**
     * Sets the msdyn_playbookinstance_AsyncOperations property value. 
     * @param value Value to set for the msdyn_playbookinstance_AsyncOperations property.
     */
    public set msdyn_playbookinstance_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_playbookinstance_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_playbookinstance_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_playbookinstance_BulkDeleteFailures() {
        return this._msdyn_playbookinstance_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_playbookinstance_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_playbookinstance_BulkDeleteFailures property.
     */
    public set msdyn_playbookinstance_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_playbookinstance_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_playbookinstance_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_playbookinstance_DuplicateBaseRecord() {
        return this._msdyn_playbookinstance_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_playbookinstance_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_playbookinstance_DuplicateBaseRecord property.
     */
    public set msdyn_playbookinstance_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_playbookinstance_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_playbookinstance_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_playbookinstance_DuplicateMatchingRecord() {
        return this._msdyn_playbookinstance_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_playbookinstance_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_playbookinstance_DuplicateMatchingRecord property.
     */
    public set msdyn_playbookinstance_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_playbookinstance_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_playbookinstance_Emails property value. 
     * @returns a email
     */
    public get msdyn_playbookinstance_Emails() {
        return this._msdyn_playbookinstance_Emails;
    };
    /**
     * Sets the msdyn_playbookinstance_Emails property value. 
     * @param value Value to set for the msdyn_playbookinstance_Emails property.
     */
    public set msdyn_playbookinstance_Emails(value: Email[] | undefined) {
        this._msdyn_playbookinstance_Emails = value;
    };
    /**
     * Gets the msdyn_playbookinstance_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_playbookinstance_Faxes() {
        return this._msdyn_playbookinstance_Faxes;
    };
    /**
     * Sets the msdyn_playbookinstance_Faxes property value. 
     * @param value Value to set for the msdyn_playbookinstance_Faxes property.
     */
    public set msdyn_playbookinstance_Faxes(value: Fax[] | undefined) {
        this._msdyn_playbookinstance_Faxes = value;
    };
    /**
     * Gets the msdyn_playbookinstance_Letters property value. 
     * @returns a letter
     */
    public get msdyn_playbookinstance_Letters() {
        return this._msdyn_playbookinstance_Letters;
    };
    /**
     * Sets the msdyn_playbookinstance_Letters property value. 
     * @param value Value to set for the msdyn_playbookinstance_Letters property.
     */
    public set msdyn_playbookinstance_Letters(value: Letter[] | undefined) {
        this._msdyn_playbookinstance_Letters = value;
    };
    /**
     * Gets the msdyn_playbookinstance_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_playbookinstance_MailboxTrackingFolders() {
        return this._msdyn_playbookinstance_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_playbookinstance_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_playbookinstance_MailboxTrackingFolders property.
     */
    public set msdyn_playbookinstance_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_playbookinstance_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_playbookinstance_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_playbookinstance_msdyn_approvals() {
        return this._msdyn_playbookinstance_msdyn_approvals;
    };
    /**
     * Sets the msdyn_playbookinstance_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_playbookinstance_msdyn_approvals property.
     */
    public set msdyn_playbookinstance_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_playbookinstance_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_playbookinstance_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_playbookinstance_msdyn_bookingalerts() {
        return this._msdyn_playbookinstance_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_playbookinstance_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_playbookinstance_msdyn_bookingalerts property.
     */
    public set msdyn_playbookinstance_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_playbookinstance_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_playbookinstance_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_playbookinstance_msdyn_ocliveworkitems() {
        return this._msdyn_playbookinstance_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_playbookinstance_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_playbookinstance_msdyn_ocliveworkitems property.
     */
    public set msdyn_playbookinstance_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_playbookinstance_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_playbookinstance_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_playbookinstance_msdyn_ocoutboundmessages() {
        return this._msdyn_playbookinstance_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_playbookinstance_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_playbookinstance_msdyn_ocoutboundmessages property.
     */
    public set msdyn_playbookinstance_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_playbookinstance_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_playbookinstance_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_playbookinstance_msdyn_ocsessions() {
        return this._msdyn_playbookinstance_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_playbookinstance_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_playbookinstance_msdyn_ocsessions property.
     */
    public set msdyn_playbookinstance_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_playbookinstance_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_playbookinstance_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_playbookinstance_msfp_alerts() {
        return this._msdyn_playbookinstance_msfp_alerts;
    };
    /**
     * Sets the msdyn_playbookinstance_msfp_alerts property value. 
     * @param value Value to set for the msdyn_playbookinstance_msfp_alerts property.
     */
    public set msdyn_playbookinstance_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_playbookinstance_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_playbookinstance_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_playbookinstance_msfp_surveyinvites() {
        return this._msdyn_playbookinstance_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_playbookinstance_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_playbookinstance_msfp_surveyinvites property.
     */
    public set msdyn_playbookinstance_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_playbookinstance_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_playbookinstance_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_playbookinstance_msfp_surveyresponses() {
        return this._msdyn_playbookinstance_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_playbookinstance_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_playbookinstance_msfp_surveyresponses property.
     */
    public set msdyn_playbookinstance_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_playbookinstance_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_playbookinstance_OpportunityCloses property value. 
     * @returns a opportunityclose
     */
    public get msdyn_playbookinstance_OpportunityCloses() {
        return this._msdyn_playbookinstance_OpportunityCloses;
    };
    /**
     * Sets the msdyn_playbookinstance_OpportunityCloses property value. 
     * @param value Value to set for the msdyn_playbookinstance_OpportunityCloses property.
     */
    public set msdyn_playbookinstance_OpportunityCloses(value: Opportunityclose[] | undefined) {
        this._msdyn_playbookinstance_OpportunityCloses = value;
    };
    /**
     * Gets the msdyn_playbookinstance_OrderCloses property value. 
     * @returns a orderclose
     */
    public get msdyn_playbookinstance_OrderCloses() {
        return this._msdyn_playbookinstance_OrderCloses;
    };
    /**
     * Sets the msdyn_playbookinstance_OrderCloses property value. 
     * @param value Value to set for the msdyn_playbookinstance_OrderCloses property.
     */
    public set msdyn_playbookinstance_OrderCloses(value: Orderclose[] | undefined) {
        this._msdyn_playbookinstance_OrderCloses = value;
    };
    /**
     * Gets the msdyn_playbookinstance_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_playbookinstance_PhoneCalls() {
        return this._msdyn_playbookinstance_PhoneCalls;
    };
    /**
     * Sets the msdyn_playbookinstance_PhoneCalls property value. 
     * @param value Value to set for the msdyn_playbookinstance_PhoneCalls property.
     */
    public set msdyn_playbookinstance_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_playbookinstance_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_playbookinstance_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_playbookinstance_PrincipalObjectAttributeAccesses() {
        return this._msdyn_playbookinstance_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_playbookinstance_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_playbookinstance_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_playbookinstance_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_playbookinstance_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_playbookinstance_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_playbookinstance_ProcessSession() {
        return this._msdyn_playbookinstance_ProcessSession;
    };
    /**
     * Sets the msdyn_playbookinstance_ProcessSession property value. 
     * @param value Value to set for the msdyn_playbookinstance_ProcessSession property.
     */
    public set msdyn_playbookinstance_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_playbookinstance_ProcessSession = value;
    };
    /**
     * Gets the msdyn_playbookinstance_QuoteCloses property value. 
     * @returns a quoteclose
     */
    public get msdyn_playbookinstance_QuoteCloses() {
        return this._msdyn_playbookinstance_QuoteCloses;
    };
    /**
     * Sets the msdyn_playbookinstance_QuoteCloses property value. 
     * @param value Value to set for the msdyn_playbookinstance_QuoteCloses property.
     */
    public set msdyn_playbookinstance_QuoteCloses(value: Quoteclose[] | undefined) {
        this._msdyn_playbookinstance_QuoteCloses = value;
    };
    /**
     * Gets the msdyn_playbookinstance_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_playbookinstance_RecurringAppointmentMasters() {
        return this._msdyn_playbookinstance_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_playbookinstance_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_playbookinstance_RecurringAppointmentMasters property.
     */
    public set msdyn_playbookinstance_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_playbookinstance_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_playbookinstance_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_playbookinstance_ServiceAppointments() {
        return this._msdyn_playbookinstance_ServiceAppointments;
    };
    /**
     * Sets the msdyn_playbookinstance_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_playbookinstance_ServiceAppointments property.
     */
    public set msdyn_playbookinstance_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_playbookinstance_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_playbookinstance_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_playbookinstance_SocialActivities() {
        return this._msdyn_playbookinstance_SocialActivities;
    };
    /**
     * Sets the msdyn_playbookinstance_SocialActivities property value. 
     * @param value Value to set for the msdyn_playbookinstance_SocialActivities property.
     */
    public set msdyn_playbookinstance_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_playbookinstance_SocialActivities = value;
    };
    /**
     * Gets the msdyn_playbookinstance_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_playbookinstance_SyncErrors() {
        return this._msdyn_playbookinstance_SyncErrors;
    };
    /**
     * Sets the msdyn_playbookinstance_SyncErrors property value. 
     * @param value Value to set for the msdyn_playbookinstance_SyncErrors property.
     */
    public set msdyn_playbookinstance_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_playbookinstance_SyncErrors = value;
    };
    /**
     * Gets the msdyn_playbookinstance_Tasks property value. 
     * @returns a task
     */
    public get msdyn_playbookinstance_Tasks() {
        return this._msdyn_playbookinstance_Tasks;
    };
    /**
     * Sets the msdyn_playbookinstance_Tasks property value. 
     * @param value Value to set for the msdyn_playbookinstance_Tasks property.
     */
    public set msdyn_playbookinstance_Tasks(value: Task[] | undefined) {
        this._msdyn_playbookinstance_Tasks = value;
    };
    /**
     * Gets the msdyn_playbookinstanceid property value. 
     * @returns a string
     */
    public get msdyn_playbookinstanceid() {
        return this._msdyn_playbookinstanceid;
    };
    /**
     * Sets the msdyn_playbookinstanceid property value. 
     * @param value Value to set for the msdyn_playbookinstanceid property.
     */
    public set msdyn_playbookinstanceid(value: string | undefined) {
        this._msdyn_playbookinstanceid = value;
    };
    /**
     * Gets the msdyn_playbooktemplateid property value. 
     * @returns a msdyn_playbooktemplate
     */
    public get msdyn_playbooktemplateid() {
        return this._msdyn_playbooktemplateid;
    };
    /**
     * Sets the msdyn_playbooktemplateid property value. 
     * @param value Value to set for the msdyn_playbooktemplateid property.
     */
    public set msdyn_playbooktemplateid(value: Msdyn_playbooktemplate | undefined) {
        this._msdyn_playbooktemplateid = value;
    };
    /**
     * Gets the msdyn_trackprogress property value. 
     * @returns a boolean
     */
    public get msdyn_trackprogress() {
        return this._msdyn_trackprogress;
    };
    /**
     * Sets the msdyn_trackprogress property value. 
     * @param value Value to set for the msdyn_trackprogress property.
     */
    public set msdyn_trackprogress(value: boolean | undefined) {
        this._msdyn_trackprogress = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the regarding_account property value. 
     * @returns a account
     */
    public get regarding_account() {
        return this._regarding_account;
    };
    /**
     * Sets the regarding_account property value. 
     * @param value Value to set for the regarding_account property.
     */
    public set regarding_account(value: Account | undefined) {
        this._regarding_account = value;
    };
    /**
     * Gets the regarding_contact property value. 
     * @returns a contact
     */
    public get regarding_contact() {
        return this._regarding_contact;
    };
    /**
     * Sets the regarding_contact property value. 
     * @param value Value to set for the regarding_contact property.
     */
    public set regarding_contact(value: Contact | undefined) {
        this._regarding_contact = value;
    };
    /**
     * Gets the regarding_invoice property value. 
     * @returns a invoice
     */
    public get regarding_invoice() {
        return this._regarding_invoice;
    };
    /**
     * Sets the regarding_invoice property value. 
     * @param value Value to set for the regarding_invoice property.
     */
    public set regarding_invoice(value: Invoice | undefined) {
        this._regarding_invoice = value;
    };
    /**
     * Gets the regarding_lead property value. 
     * @returns a lead
     */
    public get regarding_lead() {
        return this._regarding_lead;
    };
    /**
     * Sets the regarding_lead property value. 
     * @param value Value to set for the regarding_lead property.
     */
    public set regarding_lead(value: Lead | undefined) {
        this._regarding_lead = value;
    };
    /**
     * Gets the regarding_opportunity property value. 
     * @returns a opportunity
     */
    public get regarding_opportunity() {
        return this._regarding_opportunity;
    };
    /**
     * Sets the regarding_opportunity property value. 
     * @param value Value to set for the regarding_opportunity property.
     */
    public set regarding_opportunity(value: Opportunity | undefined) {
        this._regarding_opportunity = value;
    };
    /**
     * Gets the regarding_quote property value. 
     * @returns a quote
     */
    public get regarding_quote() {
        return this._regarding_quote;
    };
    /**
     * Sets the regarding_quote property value. 
     * @param value Value to set for the regarding_quote property.
     */
    public set regarding_quote(value: Quote | undefined) {
        this._regarding_quote = value;
    };
    /**
     * Gets the regarding_salesorder property value. 
     * @returns a salesorder
     */
    public get regarding_salesorder() {
        return this._regarding_salesorder;
    };
    /**
     * Sets the regarding_salesorder property value. 
     * @param value Value to set for the regarding_salesorder property.
     */
    public set regarding_salesorder(value: Salesorder | undefined) {
        this._regarding_salesorder = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_categoryid_value", this._msdyn_categoryid_value);
        writer.writeStringValue("_msdyn_playbooktemplateid_value", this._msdyn_playbooktemplateid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_regarding_value", this._regarding_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_activitiesassociated", this.msdyn_activitiesassociated);
        writer.writeNumberValue("msdyn_activitiesclosed", this.msdyn_activitiesclosed);
        writer.writeObjectValue<Msdyn_playbookcategory>("msdyn_categoryid", this.msdyn_categoryid);
        writer.writeDateValue("msdyn_estimatedclose", this.msdyn_estimatedclose);
        writer.writeBooleanValue("msdyn_evaluateactivityclosure", this.msdyn_evaluateactivityclosure);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_playbookinstance_ActivityPointers", this.msdyn_playbookinstance_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_playbookinstance_Annotations", this.msdyn_playbookinstance_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_playbookinstance_Appointments", this.msdyn_playbookinstance_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_playbookinstance_AsyncOperations", this.msdyn_playbookinstance_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_playbookinstance_BulkDeleteFailures", this.msdyn_playbookinstance_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_playbookinstance_DuplicateBaseRecord", this.msdyn_playbookinstance_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_playbookinstance_DuplicateMatchingRecord", this.msdyn_playbookinstance_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_playbookinstance_Emails", this.msdyn_playbookinstance_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_playbookinstance_Faxes", this.msdyn_playbookinstance_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_playbookinstance_Letters", this.msdyn_playbookinstance_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_playbookinstance_MailboxTrackingFolders", this.msdyn_playbookinstance_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_playbookinstance_msdyn_approvals", this.msdyn_playbookinstance_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_playbookinstance_msdyn_bookingalerts", this.msdyn_playbookinstance_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_playbookinstance_msdyn_ocliveworkitems", this.msdyn_playbookinstance_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_playbookinstance_msdyn_ocoutboundmessages", this.msdyn_playbookinstance_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_playbookinstance_msdyn_ocsessions", this.msdyn_playbookinstance_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_playbookinstance_msfp_alerts", this.msdyn_playbookinstance_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_playbookinstance_msfp_surveyinvites", this.msdyn_playbookinstance_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_playbookinstance_msfp_surveyresponses", this.msdyn_playbookinstance_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Opportunityclose>("msdyn_playbookinstance_OpportunityCloses", this.msdyn_playbookinstance_OpportunityCloses);
        writer.writeCollectionOfObjectValues<Orderclose>("msdyn_playbookinstance_OrderCloses", this.msdyn_playbookinstance_OrderCloses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_playbookinstance_PhoneCalls", this.msdyn_playbookinstance_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_playbookinstance_PrincipalObjectAttributeAccesses", this.msdyn_playbookinstance_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_playbookinstance_ProcessSession", this.msdyn_playbookinstance_ProcessSession);
        writer.writeCollectionOfObjectValues<Quoteclose>("msdyn_playbookinstance_QuoteCloses", this.msdyn_playbookinstance_QuoteCloses);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_playbookinstance_RecurringAppointmentMasters", this.msdyn_playbookinstance_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_playbookinstance_ServiceAppointments", this.msdyn_playbookinstance_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_playbookinstance_SocialActivities", this.msdyn_playbookinstance_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_playbookinstance_SyncErrors", this.msdyn_playbookinstance_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_playbookinstance_Tasks", this.msdyn_playbookinstance_Tasks);
        writer.writeStringValue("msdyn_playbookinstanceid", this.msdyn_playbookinstanceid);
        writer.writeObjectValue<Msdyn_playbooktemplate>("msdyn_playbooktemplateid", this.msdyn_playbooktemplateid);
        writer.writeBooleanValue("msdyn_trackprogress", this.msdyn_trackprogress);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Account>("regarding_account", this.regarding_account);
        writer.writeObjectValue<Contact>("regarding_contact", this.regarding_contact);
        writer.writeObjectValue<Invoice>("regarding_invoice", this.regarding_invoice);
        writer.writeObjectValue<Lead>("regarding_lead", this.regarding_lead);
        writer.writeObjectValue<Opportunity>("regarding_opportunity", this.regarding_opportunity);
        writer.writeObjectValue<Quote>("regarding_quote", this.regarding_quote);
        writer.writeObjectValue<Salesorder>("regarding_salesorder", this.regarding_salesorder);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
