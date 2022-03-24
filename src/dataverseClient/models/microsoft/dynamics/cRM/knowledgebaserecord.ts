import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_incidenttypeFromDiscriminatorValue} from './createMsdyn_incidenttypeFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Bulkoperation, Campaignresponse, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Incident, Incidentresolution, Letter, Msdyn_approval, Msdyn_bookingalert, Msdyn_customerasset, Msdyn_incidenttype, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_workorder, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Organization, Phonecall, Principalobjectattributeaccess, Processsession, Product, Quoteclose, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Knowledgebaserecord extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _knowledgeBaseRecord_ActivityPointers?: Activitypointer[] | undefined;
    private _knowledgeBaseRecord_Annotations?: Annotation[] | undefined;
    private _knowledgeBaseRecord_Appointments?: Appointment[] | undefined;
    private _knowledgeBaseRecord_AsyncOperations?: Asyncoperation[] | undefined;
    private _knowledgeBaseRecord_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _knowledgebaserecord_BulkOperations?: Bulkoperation[] | undefined;
    private _knowledgebaserecord_CampaignResponses?: Campaignresponse[] | undefined;
    private _knowledgeBaseRecord_connections1?: Connection[] | undefined;
    private _knowledgeBaseRecord_connections2?: Connection[] | undefined;
    private _knowledgeBaseRecord_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _knowledgeBaseRecord_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _knowledgeBaseRecord_Emails?: Email[] | undefined;
    private _knowledgeBaseRecord_Faxes?: Fax[] | undefined;
    private _knowledgeBaseRecord_Incident?: Incident[] | undefined;
    private _knowledgebaserecord_IncidentResolutions?: Incidentresolution[] | undefined;
    private _knowledgeBaseRecord_Letters?: Letter[] | undefined;
    private _knowledgebaserecord_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _knowledgebaserecord_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _knowledgebaserecord_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _knowledgebaserecord_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _knowledgebaserecord_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _knowledgebaserecord_msfp_alerts?: Msfp_alert[] | undefined;
    private _knowledgebaserecord_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _knowledgebaserecord_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _knowledgebaserecord_OpportunityCloses?: Opportunityclose[] | undefined;
    private _knowledgebaserecord_OrderCloses?: Orderclose[] | undefined;
    private _knowledgeBaseRecord_PhoneCalls?: Phonecall[] | undefined;
    private _knowledgeBaseRecord_PrincipalObjectAttributeAccess?: Principalobjectattributeaccess[] | undefined;
    private _knowledgeBaseRecord_ProcessSession?: Processsession[] | undefined;
    private _knowledgebaserecord_QuoteCloses?: Quoteclose[] | undefined;
    private _knowledgeBaseRecord_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _knowledgeBaseRecord_ServiceAppointments?: Serviceappointment[] | undefined;
    private _knowledgeBaseRecord_SocialActivities?: Socialactivity[] | undefined;
    private _knowledgeBaseRecord_SyncErrors?: Syncerror[] | undefined;
    private _knowledgeBaseRecord_Tasks?: Task[] | undefined;
    private _knowledgebaserecordid?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_customerasset_knowledgebaserecord?: Msdyn_customerasset[] | undefined;
    private _msdyn_incidenttype_knowledgebaserecord?: Msdyn_incidenttype[] | undefined;
    private _msdyn_ocliveworkitem_knowledgebaserecord?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_workorder_knowledgebaserecord?: Msdyn_workorder[] | undefined;
    private _organizationid?: Organization | undefined;
    private _privateurl?: string | undefined;
    private _product_knowledgebaserecord?: Product[] | undefined;
    private _publicurl?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _title?: string | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _uniqueid?: string | undefined;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new knowledgebaserecord and sets the default values.
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Knowledgebaserecord)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Knowledgebaserecord)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Knowledgebaserecord)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Knowledgebaserecord)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Knowledgebaserecord)._organizationid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Knowledgebaserecord)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Knowledgebaserecord).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Knowledgebaserecord).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Knowledgebaserecord).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Knowledgebaserecord).exchangerate = n.getNumberValue(); },
            "knowledgeBaseRecord_ActivityPointers": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "knowledgeBaseRecord_Annotations": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "knowledgeBaseRecord_Appointments": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "knowledgeBaseRecord_AsyncOperations": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "knowledgeBaseRecord_BulkDeleteFailures": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "knowledgebaserecord_BulkOperations": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_BulkOperations = n.getCollectionOfObjectValues<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "knowledgebaserecord_CampaignResponses": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_CampaignResponses = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "knowledgeBaseRecord_connections1": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "knowledgeBaseRecord_connections2": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "knowledgeBaseRecord_DuplicateBaseRecord": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "knowledgeBaseRecord_DuplicateMatchingRecord": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "knowledgeBaseRecord_Emails": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "knowledgeBaseRecord_Faxes": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "knowledgeBaseRecord_Incident": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_Incident = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "knowledgebaserecord_IncidentResolutions": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_IncidentResolutions = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "knowledgeBaseRecord_Letters": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "knowledgebaserecord_msdyn_approvals": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "knowledgebaserecord_msdyn_bookingalerts": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "knowledgebaserecord_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "knowledgebaserecord_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "knowledgebaserecord_msdyn_ocsessions": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "knowledgebaserecord_msfp_alerts": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "knowledgebaserecord_msfp_surveyinvites": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "knowledgebaserecord_msfp_surveyresponses": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "knowledgebaserecord_OpportunityCloses": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_OpportunityCloses = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "knowledgebaserecord_OrderCloses": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_OrderCloses = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "knowledgeBaseRecord_PhoneCalls": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "knowledgeBaseRecord_PrincipalObjectAttributeAccess": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_PrincipalObjectAttributeAccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "knowledgeBaseRecord_ProcessSession": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "knowledgebaserecord_QuoteCloses": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecord_QuoteCloses = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "knowledgeBaseRecord_RecurringAppointmentMasters": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "knowledgeBaseRecord_ServiceAppointments": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "knowledgeBaseRecord_SocialActivities": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "knowledgeBaseRecord_SyncErrors": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "knowledgeBaseRecord_Tasks": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgeBaseRecord_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "knowledgebaserecordid": (o, n) => { (o as unknown as Knowledgebaserecord).knowledgebaserecordid = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Knowledgebaserecord).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Knowledgebaserecord).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Knowledgebaserecord).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_customerasset_knowledgebaserecord": (o, n) => { (o as unknown as Knowledgebaserecord).msdyn_customerasset_knowledgebaserecord = n.getCollectionOfObjectValues<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_incidenttype_knowledgebaserecord": (o, n) => { (o as unknown as Knowledgebaserecord).msdyn_incidenttype_knowledgebaserecord = n.getCollectionOfObjectValues<Msdyn_incidenttype>(createMsdyn_incidenttypeFromDiscriminatorValue); },
            "msdyn_ocliveworkitem_knowledgebaserecord": (o, n) => { (o as unknown as Knowledgebaserecord).msdyn_ocliveworkitem_knowledgebaserecord = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_workorder_knowledgebaserecord": (o, n) => { (o as unknown as Knowledgebaserecord).msdyn_workorder_knowledgebaserecord = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Knowledgebaserecord).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "privateurl": (o, n) => { (o as unknown as Knowledgebaserecord).privateurl = n.getStringValue(); },
            "product_knowledgebaserecord": (o, n) => { (o as unknown as Knowledgebaserecord).product_knowledgebaserecord = n.getCollectionOfObjectValues<Product>(createProductFromDiscriminatorValue); },
            "publicurl": (o, n) => { (o as unknown as Knowledgebaserecord).publicurl = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Knowledgebaserecord).timezoneruleversionnumber = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Knowledgebaserecord).title = n.getStringValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Knowledgebaserecord).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "uniqueid": (o, n) => { (o as unknown as Knowledgebaserecord).uniqueid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Knowledgebaserecord).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the knowledgeBaseRecord_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get knowledgeBaseRecord_ActivityPointers() {
        return this._knowledgeBaseRecord_ActivityPointers;
    };
    /**
     * Sets the knowledgeBaseRecord_ActivityPointers property value. 
     * @param value Value to set for the KnowledgeBaseRecord_ActivityPointers property.
     */
    public set knowledgeBaseRecord_ActivityPointers(value: Activitypointer[] | undefined) {
        this._knowledgeBaseRecord_ActivityPointers = value;
    };
    /**
     * Gets the knowledgeBaseRecord_Annotations property value. 
     * @returns a annotation
     */
    public get knowledgeBaseRecord_Annotations() {
        return this._knowledgeBaseRecord_Annotations;
    };
    /**
     * Sets the knowledgeBaseRecord_Annotations property value. 
     * @param value Value to set for the KnowledgeBaseRecord_Annotations property.
     */
    public set knowledgeBaseRecord_Annotations(value: Annotation[] | undefined) {
        this._knowledgeBaseRecord_Annotations = value;
    };
    /**
     * Gets the knowledgeBaseRecord_Appointments property value. 
     * @returns a appointment
     */
    public get knowledgeBaseRecord_Appointments() {
        return this._knowledgeBaseRecord_Appointments;
    };
    /**
     * Sets the knowledgeBaseRecord_Appointments property value. 
     * @param value Value to set for the KnowledgeBaseRecord_Appointments property.
     */
    public set knowledgeBaseRecord_Appointments(value: Appointment[] | undefined) {
        this._knowledgeBaseRecord_Appointments = value;
    };
    /**
     * Gets the knowledgeBaseRecord_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get knowledgeBaseRecord_AsyncOperations() {
        return this._knowledgeBaseRecord_AsyncOperations;
    };
    /**
     * Sets the knowledgeBaseRecord_AsyncOperations property value. 
     * @param value Value to set for the KnowledgeBaseRecord_AsyncOperations property.
     */
    public set knowledgeBaseRecord_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._knowledgeBaseRecord_AsyncOperations = value;
    };
    /**
     * Gets the knowledgeBaseRecord_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get knowledgeBaseRecord_BulkDeleteFailures() {
        return this._knowledgeBaseRecord_BulkDeleteFailures;
    };
    /**
     * Sets the knowledgeBaseRecord_BulkDeleteFailures property value. 
     * @param value Value to set for the KnowledgeBaseRecord_BulkDeleteFailures property.
     */
    public set knowledgeBaseRecord_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._knowledgeBaseRecord_BulkDeleteFailures = value;
    };
    /**
     * Gets the knowledgebaserecord_BulkOperations property value. 
     * @returns a bulkoperation
     */
    public get knowledgebaserecord_BulkOperations() {
        return this._knowledgebaserecord_BulkOperations;
    };
    /**
     * Sets the knowledgebaserecord_BulkOperations property value. 
     * @param value Value to set for the knowledgebaserecord_BulkOperations property.
     */
    public set knowledgebaserecord_BulkOperations(value: Bulkoperation[] | undefined) {
        this._knowledgebaserecord_BulkOperations = value;
    };
    /**
     * Gets the knowledgebaserecord_CampaignResponses property value. 
     * @returns a campaignresponse
     */
    public get knowledgebaserecord_CampaignResponses() {
        return this._knowledgebaserecord_CampaignResponses;
    };
    /**
     * Sets the knowledgebaserecord_CampaignResponses property value. 
     * @param value Value to set for the knowledgebaserecord_CampaignResponses property.
     */
    public set knowledgebaserecord_CampaignResponses(value: Campaignresponse[] | undefined) {
        this._knowledgebaserecord_CampaignResponses = value;
    };
    /**
     * Gets the knowledgeBaseRecord_connections1 property value. 
     * @returns a connection
     */
    public get knowledgeBaseRecord_connections1() {
        return this._knowledgeBaseRecord_connections1;
    };
    /**
     * Sets the knowledgeBaseRecord_connections1 property value. 
     * @param value Value to set for the KnowledgeBaseRecord_connections1 property.
     */
    public set knowledgeBaseRecord_connections1(value: Connection[] | undefined) {
        this._knowledgeBaseRecord_connections1 = value;
    };
    /**
     * Gets the knowledgeBaseRecord_connections2 property value. 
     * @returns a connection
     */
    public get knowledgeBaseRecord_connections2() {
        return this._knowledgeBaseRecord_connections2;
    };
    /**
     * Sets the knowledgeBaseRecord_connections2 property value. 
     * @param value Value to set for the KnowledgeBaseRecord_connections2 property.
     */
    public set knowledgeBaseRecord_connections2(value: Connection[] | undefined) {
        this._knowledgeBaseRecord_connections2 = value;
    };
    /**
     * Gets the knowledgeBaseRecord_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get knowledgeBaseRecord_DuplicateBaseRecord() {
        return this._knowledgeBaseRecord_DuplicateBaseRecord;
    };
    /**
     * Sets the knowledgeBaseRecord_DuplicateBaseRecord property value. 
     * @param value Value to set for the KnowledgeBaseRecord_DuplicateBaseRecord property.
     */
    public set knowledgeBaseRecord_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._knowledgeBaseRecord_DuplicateBaseRecord = value;
    };
    /**
     * Gets the knowledgeBaseRecord_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get knowledgeBaseRecord_DuplicateMatchingRecord() {
        return this._knowledgeBaseRecord_DuplicateMatchingRecord;
    };
    /**
     * Sets the knowledgeBaseRecord_DuplicateMatchingRecord property value. 
     * @param value Value to set for the KnowledgeBaseRecord_DuplicateMatchingRecord property.
     */
    public set knowledgeBaseRecord_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._knowledgeBaseRecord_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the knowledgeBaseRecord_Emails property value. 
     * @returns a email
     */
    public get knowledgeBaseRecord_Emails() {
        return this._knowledgeBaseRecord_Emails;
    };
    /**
     * Sets the knowledgeBaseRecord_Emails property value. 
     * @param value Value to set for the KnowledgeBaseRecord_Emails property.
     */
    public set knowledgeBaseRecord_Emails(value: Email[] | undefined) {
        this._knowledgeBaseRecord_Emails = value;
    };
    /**
     * Gets the knowledgeBaseRecord_Faxes property value. 
     * @returns a fax
     */
    public get knowledgeBaseRecord_Faxes() {
        return this._knowledgeBaseRecord_Faxes;
    };
    /**
     * Sets the knowledgeBaseRecord_Faxes property value. 
     * @param value Value to set for the KnowledgeBaseRecord_Faxes property.
     */
    public set knowledgeBaseRecord_Faxes(value: Fax[] | undefined) {
        this._knowledgeBaseRecord_Faxes = value;
    };
    /**
     * Gets the knowledgeBaseRecord_Incident property value. 
     * @returns a incident
     */
    public get knowledgeBaseRecord_Incident() {
        return this._knowledgeBaseRecord_Incident;
    };
    /**
     * Sets the knowledgeBaseRecord_Incident property value. 
     * @param value Value to set for the KnowledgeBaseRecord_Incident property.
     */
    public set knowledgeBaseRecord_Incident(value: Incident[] | undefined) {
        this._knowledgeBaseRecord_Incident = value;
    };
    /**
     * Gets the knowledgebaserecord_IncidentResolutions property value. 
     * @returns a incidentresolution
     */
    public get knowledgebaserecord_IncidentResolutions() {
        return this._knowledgebaserecord_IncidentResolutions;
    };
    /**
     * Sets the knowledgebaserecord_IncidentResolutions property value. 
     * @param value Value to set for the knowledgebaserecord_IncidentResolutions property.
     */
    public set knowledgebaserecord_IncidentResolutions(value: Incidentresolution[] | undefined) {
        this._knowledgebaserecord_IncidentResolutions = value;
    };
    /**
     * Gets the knowledgeBaseRecord_Letters property value. 
     * @returns a letter
     */
    public get knowledgeBaseRecord_Letters() {
        return this._knowledgeBaseRecord_Letters;
    };
    /**
     * Sets the knowledgeBaseRecord_Letters property value. 
     * @param value Value to set for the KnowledgeBaseRecord_Letters property.
     */
    public set knowledgeBaseRecord_Letters(value: Letter[] | undefined) {
        this._knowledgeBaseRecord_Letters = value;
    };
    /**
     * Gets the knowledgebaserecord_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get knowledgebaserecord_msdyn_approvals() {
        return this._knowledgebaserecord_msdyn_approvals;
    };
    /**
     * Sets the knowledgebaserecord_msdyn_approvals property value. 
     * @param value Value to set for the knowledgebaserecord_msdyn_approvals property.
     */
    public set knowledgebaserecord_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._knowledgebaserecord_msdyn_approvals = value;
    };
    /**
     * Gets the knowledgebaserecord_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get knowledgebaserecord_msdyn_bookingalerts() {
        return this._knowledgebaserecord_msdyn_bookingalerts;
    };
    /**
     * Sets the knowledgebaserecord_msdyn_bookingalerts property value. 
     * @param value Value to set for the knowledgebaserecord_msdyn_bookingalerts property.
     */
    public set knowledgebaserecord_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._knowledgebaserecord_msdyn_bookingalerts = value;
    };
    /**
     * Gets the knowledgebaserecord_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get knowledgebaserecord_msdyn_ocliveworkitems() {
        return this._knowledgebaserecord_msdyn_ocliveworkitems;
    };
    /**
     * Sets the knowledgebaserecord_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the knowledgebaserecord_msdyn_ocliveworkitems property.
     */
    public set knowledgebaserecord_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._knowledgebaserecord_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the knowledgebaserecord_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get knowledgebaserecord_msdyn_ocoutboundmessages() {
        return this._knowledgebaserecord_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the knowledgebaserecord_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the knowledgebaserecord_msdyn_ocoutboundmessages property.
     */
    public set knowledgebaserecord_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._knowledgebaserecord_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the knowledgebaserecord_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get knowledgebaserecord_msdyn_ocsessions() {
        return this._knowledgebaserecord_msdyn_ocsessions;
    };
    /**
     * Sets the knowledgebaserecord_msdyn_ocsessions property value. 
     * @param value Value to set for the knowledgebaserecord_msdyn_ocsessions property.
     */
    public set knowledgebaserecord_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._knowledgebaserecord_msdyn_ocsessions = value;
    };
    /**
     * Gets the knowledgebaserecord_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get knowledgebaserecord_msfp_alerts() {
        return this._knowledgebaserecord_msfp_alerts;
    };
    /**
     * Sets the knowledgebaserecord_msfp_alerts property value. 
     * @param value Value to set for the knowledgebaserecord_msfp_alerts property.
     */
    public set knowledgebaserecord_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._knowledgebaserecord_msfp_alerts = value;
    };
    /**
     * Gets the knowledgebaserecord_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get knowledgebaserecord_msfp_surveyinvites() {
        return this._knowledgebaserecord_msfp_surveyinvites;
    };
    /**
     * Sets the knowledgebaserecord_msfp_surveyinvites property value. 
     * @param value Value to set for the knowledgebaserecord_msfp_surveyinvites property.
     */
    public set knowledgebaserecord_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._knowledgebaserecord_msfp_surveyinvites = value;
    };
    /**
     * Gets the knowledgebaserecord_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get knowledgebaserecord_msfp_surveyresponses() {
        return this._knowledgebaserecord_msfp_surveyresponses;
    };
    /**
     * Sets the knowledgebaserecord_msfp_surveyresponses property value. 
     * @param value Value to set for the knowledgebaserecord_msfp_surveyresponses property.
     */
    public set knowledgebaserecord_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._knowledgebaserecord_msfp_surveyresponses = value;
    };
    /**
     * Gets the knowledgebaserecord_OpportunityCloses property value. 
     * @returns a opportunityclose
     */
    public get knowledgebaserecord_OpportunityCloses() {
        return this._knowledgebaserecord_OpportunityCloses;
    };
    /**
     * Sets the knowledgebaserecord_OpportunityCloses property value. 
     * @param value Value to set for the knowledgebaserecord_OpportunityCloses property.
     */
    public set knowledgebaserecord_OpportunityCloses(value: Opportunityclose[] | undefined) {
        this._knowledgebaserecord_OpportunityCloses = value;
    };
    /**
     * Gets the knowledgebaserecord_OrderCloses property value. 
     * @returns a orderclose
     */
    public get knowledgebaserecord_OrderCloses() {
        return this._knowledgebaserecord_OrderCloses;
    };
    /**
     * Sets the knowledgebaserecord_OrderCloses property value. 
     * @param value Value to set for the knowledgebaserecord_OrderCloses property.
     */
    public set knowledgebaserecord_OrderCloses(value: Orderclose[] | undefined) {
        this._knowledgebaserecord_OrderCloses = value;
    };
    /**
     * Gets the knowledgeBaseRecord_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get knowledgeBaseRecord_PhoneCalls() {
        return this._knowledgeBaseRecord_PhoneCalls;
    };
    /**
     * Sets the knowledgeBaseRecord_PhoneCalls property value. 
     * @param value Value to set for the KnowledgeBaseRecord_PhoneCalls property.
     */
    public set knowledgeBaseRecord_PhoneCalls(value: Phonecall[] | undefined) {
        this._knowledgeBaseRecord_PhoneCalls = value;
    };
    /**
     * Gets the knowledgeBaseRecord_PrincipalObjectAttributeAccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get knowledgeBaseRecord_PrincipalObjectAttributeAccess() {
        return this._knowledgeBaseRecord_PrincipalObjectAttributeAccess;
    };
    /**
     * Sets the knowledgeBaseRecord_PrincipalObjectAttributeAccess property value. 
     * @param value Value to set for the KnowledgeBaseRecord_PrincipalObjectAttributeAccess property.
     */
    public set knowledgeBaseRecord_PrincipalObjectAttributeAccess(value: Principalobjectattributeaccess[] | undefined) {
        this._knowledgeBaseRecord_PrincipalObjectAttributeAccess = value;
    };
    /**
     * Gets the knowledgeBaseRecord_ProcessSession property value. 
     * @returns a processsession
     */
    public get knowledgeBaseRecord_ProcessSession() {
        return this._knowledgeBaseRecord_ProcessSession;
    };
    /**
     * Sets the knowledgeBaseRecord_ProcessSession property value. 
     * @param value Value to set for the KnowledgeBaseRecord_ProcessSession property.
     */
    public set knowledgeBaseRecord_ProcessSession(value: Processsession[] | undefined) {
        this._knowledgeBaseRecord_ProcessSession = value;
    };
    /**
     * Gets the knowledgebaserecord_QuoteCloses property value. 
     * @returns a quoteclose
     */
    public get knowledgebaserecord_QuoteCloses() {
        return this._knowledgebaserecord_QuoteCloses;
    };
    /**
     * Sets the knowledgebaserecord_QuoteCloses property value. 
     * @param value Value to set for the knowledgebaserecord_QuoteCloses property.
     */
    public set knowledgebaserecord_QuoteCloses(value: Quoteclose[] | undefined) {
        this._knowledgebaserecord_QuoteCloses = value;
    };
    /**
     * Gets the knowledgeBaseRecord_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get knowledgeBaseRecord_RecurringAppointmentMasters() {
        return this._knowledgeBaseRecord_RecurringAppointmentMasters;
    };
    /**
     * Sets the knowledgeBaseRecord_RecurringAppointmentMasters property value. 
     * @param value Value to set for the KnowledgeBaseRecord_RecurringAppointmentMasters property.
     */
    public set knowledgeBaseRecord_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._knowledgeBaseRecord_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the knowledgeBaseRecord_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get knowledgeBaseRecord_ServiceAppointments() {
        return this._knowledgeBaseRecord_ServiceAppointments;
    };
    /**
     * Sets the knowledgeBaseRecord_ServiceAppointments property value. 
     * @param value Value to set for the KnowledgeBaseRecord_ServiceAppointments property.
     */
    public set knowledgeBaseRecord_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._knowledgeBaseRecord_ServiceAppointments = value;
    };
    /**
     * Gets the knowledgeBaseRecord_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get knowledgeBaseRecord_SocialActivities() {
        return this._knowledgeBaseRecord_SocialActivities;
    };
    /**
     * Sets the knowledgeBaseRecord_SocialActivities property value. 
     * @param value Value to set for the KnowledgeBaseRecord_SocialActivities property.
     */
    public set knowledgeBaseRecord_SocialActivities(value: Socialactivity[] | undefined) {
        this._knowledgeBaseRecord_SocialActivities = value;
    };
    /**
     * Gets the knowledgeBaseRecord_SyncErrors property value. 
     * @returns a syncerror
     */
    public get knowledgeBaseRecord_SyncErrors() {
        return this._knowledgeBaseRecord_SyncErrors;
    };
    /**
     * Sets the knowledgeBaseRecord_SyncErrors property value. 
     * @param value Value to set for the KnowledgeBaseRecord_SyncErrors property.
     */
    public set knowledgeBaseRecord_SyncErrors(value: Syncerror[] | undefined) {
        this._knowledgeBaseRecord_SyncErrors = value;
    };
    /**
     * Gets the knowledgeBaseRecord_Tasks property value. 
     * @returns a task
     */
    public get knowledgeBaseRecord_Tasks() {
        return this._knowledgeBaseRecord_Tasks;
    };
    /**
     * Sets the knowledgeBaseRecord_Tasks property value. 
     * @param value Value to set for the KnowledgeBaseRecord_Tasks property.
     */
    public set knowledgeBaseRecord_Tasks(value: Task[] | undefined) {
        this._knowledgeBaseRecord_Tasks = value;
    };
    /**
     * Gets the knowledgebaserecordid property value. 
     * @returns a string
     */
    public get knowledgebaserecordid() {
        return this._knowledgebaserecordid;
    };
    /**
     * Sets the knowledgebaserecordid property value. 
     * @param value Value to set for the knowledgebaserecordid property.
     */
    public set knowledgebaserecordid(value: string | undefined) {
        this._knowledgebaserecordid = value;
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
     * Gets the msdyn_customerasset_knowledgebaserecord property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_customerasset_knowledgebaserecord() {
        return this._msdyn_customerasset_knowledgebaserecord;
    };
    /**
     * Sets the msdyn_customerasset_knowledgebaserecord property value. 
     * @param value Value to set for the msdyn_customerasset_knowledgebaserecord property.
     */
    public set msdyn_customerasset_knowledgebaserecord(value: Msdyn_customerasset[] | undefined) {
        this._msdyn_customerasset_knowledgebaserecord = value;
    };
    /**
     * Gets the msdyn_incidenttype_knowledgebaserecord property value. 
     * @returns a msdyn_incidenttype
     */
    public get msdyn_incidenttype_knowledgebaserecord() {
        return this._msdyn_incidenttype_knowledgebaserecord;
    };
    /**
     * Sets the msdyn_incidenttype_knowledgebaserecord property value. 
     * @param value Value to set for the msdyn_incidenttype_knowledgebaserecord property.
     */
    public set msdyn_incidenttype_knowledgebaserecord(value: Msdyn_incidenttype[] | undefined) {
        this._msdyn_incidenttype_knowledgebaserecord = value;
    };
    /**
     * Gets the msdyn_ocliveworkitem_knowledgebaserecord property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_ocliveworkitem_knowledgebaserecord() {
        return this._msdyn_ocliveworkitem_knowledgebaserecord;
    };
    /**
     * Sets the msdyn_ocliveworkitem_knowledgebaserecord property value. 
     * @param value Value to set for the msdyn_ocliveworkitem_knowledgebaserecord property.
     */
    public set msdyn_ocliveworkitem_knowledgebaserecord(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_ocliveworkitem_knowledgebaserecord = value;
    };
    /**
     * Gets the msdyn_workorder_knowledgebaserecord property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_workorder_knowledgebaserecord() {
        return this._msdyn_workorder_knowledgebaserecord;
    };
    /**
     * Sets the msdyn_workorder_knowledgebaserecord property value. 
     * @param value Value to set for the msdyn_workorder_knowledgebaserecord property.
     */
    public set msdyn_workorder_knowledgebaserecord(value: Msdyn_workorder[] | undefined) {
        this._msdyn_workorder_knowledgebaserecord = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the privateurl property value. 
     * @returns a string
     */
    public get privateurl() {
        return this._privateurl;
    };
    /**
     * Sets the privateurl property value. 
     * @param value Value to set for the privateurl property.
     */
    public set privateurl(value: string | undefined) {
        this._privateurl = value;
    };
    /**
     * Gets the product_knowledgebaserecord property value. 
     * @returns a product
     */
    public get product_knowledgebaserecord() {
        return this._product_knowledgebaserecord;
    };
    /**
     * Sets the product_knowledgebaserecord property value. 
     * @param value Value to set for the product_knowledgebaserecord property.
     */
    public set product_knowledgebaserecord(value: Product[] | undefined) {
        this._product_knowledgebaserecord = value;
    };
    /**
     * Gets the publicurl property value. 
     * @returns a string
     */
    public get publicurl() {
        return this._publicurl;
    };
    /**
     * Sets the publicurl property value. 
     * @param value Value to set for the publicurl property.
     */
    public set publicurl(value: string | undefined) {
        this._publicurl = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeCollectionOfObjectValues<Activitypointer>("knowledgeBaseRecord_ActivityPointers", this.knowledgeBaseRecord_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("knowledgeBaseRecord_Annotations", this.knowledgeBaseRecord_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("knowledgeBaseRecord_Appointments", this.knowledgeBaseRecord_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("knowledgeBaseRecord_AsyncOperations", this.knowledgeBaseRecord_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("knowledgeBaseRecord_BulkDeleteFailures", this.knowledgeBaseRecord_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Bulkoperation>("knowledgebaserecord_BulkOperations", this.knowledgebaserecord_BulkOperations);
        writer.writeCollectionOfObjectValues<Campaignresponse>("knowledgebaserecord_CampaignResponses", this.knowledgebaserecord_CampaignResponses);
        writer.writeCollectionOfObjectValues<Connection>("knowledgeBaseRecord_connections1", this.knowledgeBaseRecord_connections1);
        writer.writeCollectionOfObjectValues<Connection>("knowledgeBaseRecord_connections2", this.knowledgeBaseRecord_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("knowledgeBaseRecord_DuplicateBaseRecord", this.knowledgeBaseRecord_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("knowledgeBaseRecord_DuplicateMatchingRecord", this.knowledgeBaseRecord_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("knowledgeBaseRecord_Emails", this.knowledgeBaseRecord_Emails);
        writer.writeCollectionOfObjectValues<Fax>("knowledgeBaseRecord_Faxes", this.knowledgeBaseRecord_Faxes);
        writer.writeCollectionOfObjectValues<Incident>("knowledgeBaseRecord_Incident", this.knowledgeBaseRecord_Incident);
        writer.writeCollectionOfObjectValues<Incidentresolution>("knowledgebaserecord_IncidentResolutions", this.knowledgebaserecord_IncidentResolutions);
        writer.writeCollectionOfObjectValues<Letter>("knowledgeBaseRecord_Letters", this.knowledgeBaseRecord_Letters);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("knowledgebaserecord_msdyn_approvals", this.knowledgebaserecord_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("knowledgebaserecord_msdyn_bookingalerts", this.knowledgebaserecord_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("knowledgebaserecord_msdyn_ocliveworkitems", this.knowledgebaserecord_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("knowledgebaserecord_msdyn_ocoutboundmessages", this.knowledgebaserecord_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("knowledgebaserecord_msdyn_ocsessions", this.knowledgebaserecord_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("knowledgebaserecord_msfp_alerts", this.knowledgebaserecord_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("knowledgebaserecord_msfp_surveyinvites", this.knowledgebaserecord_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("knowledgebaserecord_msfp_surveyresponses", this.knowledgebaserecord_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Opportunityclose>("knowledgebaserecord_OpportunityCloses", this.knowledgebaserecord_OpportunityCloses);
        writer.writeCollectionOfObjectValues<Orderclose>("knowledgebaserecord_OrderCloses", this.knowledgebaserecord_OrderCloses);
        writer.writeCollectionOfObjectValues<Phonecall>("knowledgeBaseRecord_PhoneCalls", this.knowledgeBaseRecord_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("knowledgeBaseRecord_PrincipalObjectAttributeAccess", this.knowledgeBaseRecord_PrincipalObjectAttributeAccess);
        writer.writeCollectionOfObjectValues<Processsession>("knowledgeBaseRecord_ProcessSession", this.knowledgeBaseRecord_ProcessSession);
        writer.writeCollectionOfObjectValues<Quoteclose>("knowledgebaserecord_QuoteCloses", this.knowledgebaserecord_QuoteCloses);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("knowledgeBaseRecord_RecurringAppointmentMasters", this.knowledgeBaseRecord_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("knowledgeBaseRecord_ServiceAppointments", this.knowledgeBaseRecord_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("knowledgeBaseRecord_SocialActivities", this.knowledgeBaseRecord_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("knowledgeBaseRecord_SyncErrors", this.knowledgeBaseRecord_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("knowledgeBaseRecord_Tasks", this.knowledgeBaseRecord_Tasks);
        writer.writeStringValue("knowledgebaserecordid", this.knowledgebaserecordid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_customerasset>("msdyn_customerasset_knowledgebaserecord", this.msdyn_customerasset_knowledgebaserecord);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttype>("msdyn_incidenttype_knowledgebaserecord", this.msdyn_incidenttype_knowledgebaserecord);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_ocliveworkitem_knowledgebaserecord", this.msdyn_ocliveworkitem_knowledgebaserecord);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_workorder_knowledgebaserecord", this.msdyn_workorder_knowledgebaserecord);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeStringValue("privateurl", this.privateurl);
        writer.writeCollectionOfObjectValues<Product>("product_knowledgebaserecord", this.product_knowledgebaserecord);
        writer.writeStringValue("publicurl", this.publicurl);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("uniqueid", this.uniqueid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the uniqueid property value. 
     * @returns a string
     */
    public get uniqueid() {
        return this._uniqueid;
    };
    /**
     * Sets the uniqueid property value. 
     * @param value Value to set for the uniqueid property.
     */
    public set uniqueid(value: string | undefined) {
        this._uniqueid = value;
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
