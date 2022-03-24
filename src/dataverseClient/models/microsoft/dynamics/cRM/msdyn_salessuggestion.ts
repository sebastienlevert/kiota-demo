import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypartyFromDiscriminatorValue} from './createActivitypartyFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunity, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_salessuggestion extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_qualifiedrecord_value?: string | undefined;
    private __msdyn_relatedrecord_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _emailaddress?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_customdata?: string | undefined;
    private _msdyn_expirydate?: Date | undefined;
    private _msdyn_feedbackreason?: string | undefined;
    private _msdyn_insight?: string | undefined;
    private _msdyn_modelid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_potentialrevenue?: number | undefined;
    private _msdyn_potentialrevenue_base?: number | undefined;
    private _msdyn_qualifiedrecord?: Opportunity | undefined;
    private _msdyn_relatedrecord?: Account | undefined;
    private _msdyn_salesmotion?: number | undefined;
    private _msdyn_salesplay?: number | undefined;
    private _msdyn_salessuggestion_ActivityParties?: Activityparty[] | undefined;
    private _msdyn_salessuggestion_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_salessuggestion_Annotations?: Annotation[] | undefined;
    private _msdyn_salessuggestion_Appointments?: Appointment[] | undefined;
    private _msdyn_salessuggestion_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_salessuggestion_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_salessuggestion_connections1?: Connection[] | undefined;
    private _msdyn_salessuggestion_connections2?: Connection[] | undefined;
    private _msdyn_salessuggestion_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_salessuggestion_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_salessuggestion_Emails?: Email[] | undefined;
    private _msdyn_salessuggestion_Faxes?: Fax[] | undefined;
    private _msdyn_salessuggestion_Letters?: Letter[] | undefined;
    private _msdyn_salessuggestion_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_salessuggestion_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_salessuggestion_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_salessuggestion_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_salessuggestion_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_salessuggestion_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_salessuggestion_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_salessuggestion_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_salessuggestion_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_salessuggestion_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_salessuggestion_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_salessuggestion_ProcessSession?: Processsession[] | undefined;
    private _msdyn_salessuggestion_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_salessuggestion_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_salessuggestion_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_salessuggestion_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_salessuggestion_Tasks?: Task[] | undefined;
    private _msdyn_salessuggestionid?: string | undefined;
    private _msdyn_score?: number | undefined;
    private _msdyn_solutionarea?: number | undefined;
    private _msdyn_suggesteddate?: Date | undefined;
    private _msdyn_suggestionreason?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _msdyn_qualifiedrecord_value property value. 
     * @returns a string
     */
    public get _msdyn_qualifiedrecord_value() {
        return this.__msdyn_qualifiedrecord_value;
    };
    /**
     * Sets the _msdyn_qualifiedrecord_value property value. 
     * @param value Value to set for the _msdyn_qualifiedrecord_value property.
     */
    public set _msdyn_qualifiedrecord_value(value: string | undefined) {
        this.__msdyn_qualifiedrecord_value = value;
    };
    /**
     * Gets the _msdyn_relatedrecord_value property value. 
     * @returns a string
     */
    public get _msdyn_relatedrecord_value() {
        return this.__msdyn_relatedrecord_value;
    };
    /**
     * Sets the _msdyn_relatedrecord_value property value. 
     * @param value Value to set for the _msdyn_relatedrecord_value property.
     */
    public set _msdyn_relatedrecord_value(value: string | undefined) {
        this.__msdyn_relatedrecord_value = value;
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
     * Instantiates a new msdyn_salessuggestion and sets the default values.
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
     * Gets the emailaddress property value. 
     * @returns a string
     */
    public get emailaddress() {
        return this._emailaddress;
    };
    /**
     * Sets the emailaddress property value. 
     * @param value Value to set for the emailaddress property.
     */
    public set emailaddress(value: string | undefined) {
        this._emailaddress = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_qualifiedrecord_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._msdyn_qualifiedrecord_value = n.getStringValue(); },
            "_msdyn_relatedrecord_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._msdyn_relatedrecord_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_salessuggestion)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_salessuggestion).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_salessuggestion).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_salessuggestion).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "emailaddress": (o, n) => { (o as unknown as Msdyn_salessuggestion).emailaddress = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_salessuggestion).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_salessuggestion).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_salessuggestion).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_salessuggestion).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_salessuggestion).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_customdata": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_customdata = n.getStringValue(); },
            "msdyn_expirydate": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_expirydate = n.getDateValue(); },
            "msdyn_feedbackreason": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_feedbackreason = n.getStringValue(); },
            "msdyn_insight": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_insight = n.getStringValue(); },
            "msdyn_modelid": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_modelid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_name = n.getStringValue(); },
            "msdyn_potentialrevenue": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_potentialrevenue = n.getNumberValue(); },
            "msdyn_potentialrevenue_base": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_potentialrevenue_base = n.getNumberValue(); },
            "msdyn_qualifiedrecord": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_qualifiedrecord = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "msdyn_relatedrecord": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_relatedrecord = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_salesmotion": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salesmotion = n.getNumberValue(); },
            "msdyn_salesplay": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salesplay = n.getNumberValue(); },
            "msdyn_salessuggestion_ActivityParties": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_ActivityParties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "msdyn_salessuggestion_ActivityPointers": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_salessuggestion_Annotations": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_salessuggestion_Appointments": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_salessuggestion_AsyncOperations": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_salessuggestion_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_salessuggestion_connections1": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_salessuggestion_connections2": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_salessuggestion_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_salessuggestion_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_salessuggestion_Emails": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_salessuggestion_Faxes": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_salessuggestion_Letters": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_salessuggestion_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_salessuggestion_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_salessuggestion_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_salessuggestion_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_salessuggestion_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_salessuggestion_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_salessuggestion_msfp_alerts": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_salessuggestion_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_salessuggestion_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_salessuggestion_PhoneCalls": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_salessuggestion_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_salessuggestion_ProcessSession": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_salessuggestion_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_salessuggestion_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_salessuggestion_SocialActivities": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_salessuggestion_SyncErrors": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_salessuggestion_Tasks": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestion_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_salessuggestionid": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_salessuggestionid = n.getStringValue(); },
            "msdyn_score": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_score = n.getNumberValue(); },
            "msdyn_solutionarea": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_solutionarea = n.getNumberValue(); },
            "msdyn_suggesteddate": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_suggesteddate = n.getDateValue(); },
            "msdyn_suggestionreason": (o, n) => { (o as unknown as Msdyn_salessuggestion).msdyn_suggestionreason = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_salessuggestion).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_salessuggestion).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_salessuggestion).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_salessuggestion).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_salessuggestion).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_salessuggestion).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_salessuggestion).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_salessuggestion).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_salessuggestion).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_salessuggestion).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_salessuggestion).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_customdata property value. 
     * @returns a string
     */
    public get msdyn_customdata() {
        return this._msdyn_customdata;
    };
    /**
     * Sets the msdyn_customdata property value. 
     * @param value Value to set for the msdyn_customdata property.
     */
    public set msdyn_customdata(value: string | undefined) {
        this._msdyn_customdata = value;
    };
    /**
     * Gets the msdyn_expirydate property value. 
     * @returns a Date
     */
    public get msdyn_expirydate() {
        return this._msdyn_expirydate;
    };
    /**
     * Sets the msdyn_expirydate property value. 
     * @param value Value to set for the msdyn_expirydate property.
     */
    public set msdyn_expirydate(value: Date | undefined) {
        this._msdyn_expirydate = value;
    };
    /**
     * Gets the msdyn_feedbackreason property value. 
     * @returns a string
     */
    public get msdyn_feedbackreason() {
        return this._msdyn_feedbackreason;
    };
    /**
     * Sets the msdyn_feedbackreason property value. 
     * @param value Value to set for the msdyn_feedbackreason property.
     */
    public set msdyn_feedbackreason(value: string | undefined) {
        this._msdyn_feedbackreason = value;
    };
    /**
     * Gets the msdyn_insight property value. 
     * @returns a string
     */
    public get msdyn_insight() {
        return this._msdyn_insight;
    };
    /**
     * Sets the msdyn_insight property value. 
     * @param value Value to set for the msdyn_insight property.
     */
    public set msdyn_insight(value: string | undefined) {
        this._msdyn_insight = value;
    };
    /**
     * Gets the msdyn_modelid property value. 
     * @returns a string
     */
    public get msdyn_modelid() {
        return this._msdyn_modelid;
    };
    /**
     * Sets the msdyn_modelid property value. 
     * @param value Value to set for the msdyn_modelid property.
     */
    public set msdyn_modelid(value: string | undefined) {
        this._msdyn_modelid = value;
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
     * Gets the msdyn_potentialrevenue property value. 
     * @returns a int64
     */
    public get msdyn_potentialrevenue() {
        return this._msdyn_potentialrevenue;
    };
    /**
     * Sets the msdyn_potentialrevenue property value. 
     * @param value Value to set for the msdyn_potentialrevenue property.
     */
    public set msdyn_potentialrevenue(value: number | undefined) {
        this._msdyn_potentialrevenue = value;
    };
    /**
     * Gets the msdyn_potentialrevenue_base property value. 
     * @returns a int64
     */
    public get msdyn_potentialrevenue_base() {
        return this._msdyn_potentialrevenue_base;
    };
    /**
     * Sets the msdyn_potentialrevenue_base property value. 
     * @param value Value to set for the msdyn_potentialrevenue_base property.
     */
    public set msdyn_potentialrevenue_base(value: number | undefined) {
        this._msdyn_potentialrevenue_base = value;
    };
    /**
     * Gets the msdyn_qualifiedrecord property value. 
     * @returns a opportunity
     */
    public get msdyn_qualifiedrecord() {
        return this._msdyn_qualifiedrecord;
    };
    /**
     * Sets the msdyn_qualifiedrecord property value. 
     * @param value Value to set for the msdyn_qualifiedrecord property.
     */
    public set msdyn_qualifiedrecord(value: Opportunity | undefined) {
        this._msdyn_qualifiedrecord = value;
    };
    /**
     * Gets the msdyn_relatedrecord property value. 
     * @returns a account
     */
    public get msdyn_relatedrecord() {
        return this._msdyn_relatedrecord;
    };
    /**
     * Sets the msdyn_relatedrecord property value. 
     * @param value Value to set for the msdyn_relatedrecord property.
     */
    public set msdyn_relatedrecord(value: Account | undefined) {
        this._msdyn_relatedrecord = value;
    };
    /**
     * Gets the msdyn_salesmotion property value. 
     * @returns a integer
     */
    public get msdyn_salesmotion() {
        return this._msdyn_salesmotion;
    };
    /**
     * Sets the msdyn_salesmotion property value. 
     * @param value Value to set for the msdyn_salesmotion property.
     */
    public set msdyn_salesmotion(value: number | undefined) {
        this._msdyn_salesmotion = value;
    };
    /**
     * Gets the msdyn_salesplay property value. 
     * @returns a integer
     */
    public get msdyn_salesplay() {
        return this._msdyn_salesplay;
    };
    /**
     * Sets the msdyn_salesplay property value. 
     * @param value Value to set for the msdyn_salesplay property.
     */
    public set msdyn_salesplay(value: number | undefined) {
        this._msdyn_salesplay = value;
    };
    /**
     * Gets the msdyn_salessuggestion_ActivityParties property value. 
     * @returns a activityparty
     */
    public get msdyn_salessuggestion_ActivityParties() {
        return this._msdyn_salessuggestion_ActivityParties;
    };
    /**
     * Sets the msdyn_salessuggestion_ActivityParties property value. 
     * @param value Value to set for the msdyn_salessuggestion_ActivityParties property.
     */
    public set msdyn_salessuggestion_ActivityParties(value: Activityparty[] | undefined) {
        this._msdyn_salessuggestion_ActivityParties = value;
    };
    /**
     * Gets the msdyn_salessuggestion_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_salessuggestion_ActivityPointers() {
        return this._msdyn_salessuggestion_ActivityPointers;
    };
    /**
     * Sets the msdyn_salessuggestion_ActivityPointers property value. 
     * @param value Value to set for the msdyn_salessuggestion_ActivityPointers property.
     */
    public set msdyn_salessuggestion_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_salessuggestion_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_salessuggestion_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_salessuggestion_Annotations() {
        return this._msdyn_salessuggestion_Annotations;
    };
    /**
     * Sets the msdyn_salessuggestion_Annotations property value. 
     * @param value Value to set for the msdyn_salessuggestion_Annotations property.
     */
    public set msdyn_salessuggestion_Annotations(value: Annotation[] | undefined) {
        this._msdyn_salessuggestion_Annotations = value;
    };
    /**
     * Gets the msdyn_salessuggestion_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_salessuggestion_Appointments() {
        return this._msdyn_salessuggestion_Appointments;
    };
    /**
     * Sets the msdyn_salessuggestion_Appointments property value. 
     * @param value Value to set for the msdyn_salessuggestion_Appointments property.
     */
    public set msdyn_salessuggestion_Appointments(value: Appointment[] | undefined) {
        this._msdyn_salessuggestion_Appointments = value;
    };
    /**
     * Gets the msdyn_salessuggestion_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_salessuggestion_AsyncOperations() {
        return this._msdyn_salessuggestion_AsyncOperations;
    };
    /**
     * Sets the msdyn_salessuggestion_AsyncOperations property value. 
     * @param value Value to set for the msdyn_salessuggestion_AsyncOperations property.
     */
    public set msdyn_salessuggestion_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_salessuggestion_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_salessuggestion_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_salessuggestion_BulkDeleteFailures() {
        return this._msdyn_salessuggestion_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_salessuggestion_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_salessuggestion_BulkDeleteFailures property.
     */
    public set msdyn_salessuggestion_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_salessuggestion_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_salessuggestion_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_salessuggestion_connections1() {
        return this._msdyn_salessuggestion_connections1;
    };
    /**
     * Sets the msdyn_salessuggestion_connections1 property value. 
     * @param value Value to set for the msdyn_salessuggestion_connections1 property.
     */
    public set msdyn_salessuggestion_connections1(value: Connection[] | undefined) {
        this._msdyn_salessuggestion_connections1 = value;
    };
    /**
     * Gets the msdyn_salessuggestion_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_salessuggestion_connections2() {
        return this._msdyn_salessuggestion_connections2;
    };
    /**
     * Sets the msdyn_salessuggestion_connections2 property value. 
     * @param value Value to set for the msdyn_salessuggestion_connections2 property.
     */
    public set msdyn_salessuggestion_connections2(value: Connection[] | undefined) {
        this._msdyn_salessuggestion_connections2 = value;
    };
    /**
     * Gets the msdyn_salessuggestion_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_salessuggestion_DuplicateBaseRecord() {
        return this._msdyn_salessuggestion_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_salessuggestion_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_salessuggestion_DuplicateBaseRecord property.
     */
    public set msdyn_salessuggestion_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_salessuggestion_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_salessuggestion_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_salessuggestion_DuplicateMatchingRecord() {
        return this._msdyn_salessuggestion_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_salessuggestion_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_salessuggestion_DuplicateMatchingRecord property.
     */
    public set msdyn_salessuggestion_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_salessuggestion_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_salessuggestion_Emails property value. 
     * @returns a email
     */
    public get msdyn_salessuggestion_Emails() {
        return this._msdyn_salessuggestion_Emails;
    };
    /**
     * Sets the msdyn_salessuggestion_Emails property value. 
     * @param value Value to set for the msdyn_salessuggestion_Emails property.
     */
    public set msdyn_salessuggestion_Emails(value: Email[] | undefined) {
        this._msdyn_salessuggestion_Emails = value;
    };
    /**
     * Gets the msdyn_salessuggestion_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_salessuggestion_Faxes() {
        return this._msdyn_salessuggestion_Faxes;
    };
    /**
     * Sets the msdyn_salessuggestion_Faxes property value. 
     * @param value Value to set for the msdyn_salessuggestion_Faxes property.
     */
    public set msdyn_salessuggestion_Faxes(value: Fax[] | undefined) {
        this._msdyn_salessuggestion_Faxes = value;
    };
    /**
     * Gets the msdyn_salessuggestion_Letters property value. 
     * @returns a letter
     */
    public get msdyn_salessuggestion_Letters() {
        return this._msdyn_salessuggestion_Letters;
    };
    /**
     * Sets the msdyn_salessuggestion_Letters property value. 
     * @param value Value to set for the msdyn_salessuggestion_Letters property.
     */
    public set msdyn_salessuggestion_Letters(value: Letter[] | undefined) {
        this._msdyn_salessuggestion_Letters = value;
    };
    /**
     * Gets the msdyn_salessuggestion_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_salessuggestion_MailboxTrackingFolders() {
        return this._msdyn_salessuggestion_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_salessuggestion_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_salessuggestion_MailboxTrackingFolders property.
     */
    public set msdyn_salessuggestion_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_salessuggestion_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_salessuggestion_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_salessuggestion_msdyn_approvals() {
        return this._msdyn_salessuggestion_msdyn_approvals;
    };
    /**
     * Sets the msdyn_salessuggestion_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_salessuggestion_msdyn_approvals property.
     */
    public set msdyn_salessuggestion_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_salessuggestion_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_salessuggestion_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_salessuggestion_msdyn_bookingalerts() {
        return this._msdyn_salessuggestion_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_salessuggestion_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_salessuggestion_msdyn_bookingalerts property.
     */
    public set msdyn_salessuggestion_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_salessuggestion_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_salessuggestion_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_salessuggestion_msdyn_ocliveworkitems() {
        return this._msdyn_salessuggestion_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_salessuggestion_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_salessuggestion_msdyn_ocliveworkitems property.
     */
    public set msdyn_salessuggestion_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_salessuggestion_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_salessuggestion_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_salessuggestion_msdyn_ocoutboundmessages() {
        return this._msdyn_salessuggestion_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_salessuggestion_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_salessuggestion_msdyn_ocoutboundmessages property.
     */
    public set msdyn_salessuggestion_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_salessuggestion_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_salessuggestion_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_salessuggestion_msdyn_ocsessions() {
        return this._msdyn_salessuggestion_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_salessuggestion_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_salessuggestion_msdyn_ocsessions property.
     */
    public set msdyn_salessuggestion_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_salessuggestion_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_salessuggestion_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_salessuggestion_msfp_alerts() {
        return this._msdyn_salessuggestion_msfp_alerts;
    };
    /**
     * Sets the msdyn_salessuggestion_msfp_alerts property value. 
     * @param value Value to set for the msdyn_salessuggestion_msfp_alerts property.
     */
    public set msdyn_salessuggestion_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_salessuggestion_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_salessuggestion_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_salessuggestion_msfp_surveyinvites() {
        return this._msdyn_salessuggestion_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_salessuggestion_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_salessuggestion_msfp_surveyinvites property.
     */
    public set msdyn_salessuggestion_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_salessuggestion_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_salessuggestion_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_salessuggestion_msfp_surveyresponses() {
        return this._msdyn_salessuggestion_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_salessuggestion_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_salessuggestion_msfp_surveyresponses property.
     */
    public set msdyn_salessuggestion_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_salessuggestion_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_salessuggestion_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_salessuggestion_PhoneCalls() {
        return this._msdyn_salessuggestion_PhoneCalls;
    };
    /**
     * Sets the msdyn_salessuggestion_PhoneCalls property value. 
     * @param value Value to set for the msdyn_salessuggestion_PhoneCalls property.
     */
    public set msdyn_salessuggestion_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_salessuggestion_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_salessuggestion_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_salessuggestion_PrincipalObjectAttributeAccesses() {
        return this._msdyn_salessuggestion_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_salessuggestion_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_salessuggestion_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_salessuggestion_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_salessuggestion_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_salessuggestion_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_salessuggestion_ProcessSession() {
        return this._msdyn_salessuggestion_ProcessSession;
    };
    /**
     * Sets the msdyn_salessuggestion_ProcessSession property value. 
     * @param value Value to set for the msdyn_salessuggestion_ProcessSession property.
     */
    public set msdyn_salessuggestion_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_salessuggestion_ProcessSession = value;
    };
    /**
     * Gets the msdyn_salessuggestion_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_salessuggestion_RecurringAppointmentMasters() {
        return this._msdyn_salessuggestion_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_salessuggestion_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_salessuggestion_RecurringAppointmentMasters property.
     */
    public set msdyn_salessuggestion_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_salessuggestion_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_salessuggestion_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_salessuggestion_ServiceAppointments() {
        return this._msdyn_salessuggestion_ServiceAppointments;
    };
    /**
     * Sets the msdyn_salessuggestion_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_salessuggestion_ServiceAppointments property.
     */
    public set msdyn_salessuggestion_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_salessuggestion_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_salessuggestion_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_salessuggestion_SocialActivities() {
        return this._msdyn_salessuggestion_SocialActivities;
    };
    /**
     * Sets the msdyn_salessuggestion_SocialActivities property value. 
     * @param value Value to set for the msdyn_salessuggestion_SocialActivities property.
     */
    public set msdyn_salessuggestion_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_salessuggestion_SocialActivities = value;
    };
    /**
     * Gets the msdyn_salessuggestion_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_salessuggestion_SyncErrors() {
        return this._msdyn_salessuggestion_SyncErrors;
    };
    /**
     * Sets the msdyn_salessuggestion_SyncErrors property value. 
     * @param value Value to set for the msdyn_salessuggestion_SyncErrors property.
     */
    public set msdyn_salessuggestion_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_salessuggestion_SyncErrors = value;
    };
    /**
     * Gets the msdyn_salessuggestion_Tasks property value. 
     * @returns a task
     */
    public get msdyn_salessuggestion_Tasks() {
        return this._msdyn_salessuggestion_Tasks;
    };
    /**
     * Sets the msdyn_salessuggestion_Tasks property value. 
     * @param value Value to set for the msdyn_salessuggestion_Tasks property.
     */
    public set msdyn_salessuggestion_Tasks(value: Task[] | undefined) {
        this._msdyn_salessuggestion_Tasks = value;
    };
    /**
     * Gets the msdyn_salessuggestionid property value. 
     * @returns a string
     */
    public get msdyn_salessuggestionid() {
        return this._msdyn_salessuggestionid;
    };
    /**
     * Sets the msdyn_salessuggestionid property value. 
     * @param value Value to set for the msdyn_salessuggestionid property.
     */
    public set msdyn_salessuggestionid(value: string | undefined) {
        this._msdyn_salessuggestionid = value;
    };
    /**
     * Gets the msdyn_score property value. 
     * @returns a integer
     */
    public get msdyn_score() {
        return this._msdyn_score;
    };
    /**
     * Sets the msdyn_score property value. 
     * @param value Value to set for the msdyn_score property.
     */
    public set msdyn_score(value: number | undefined) {
        this._msdyn_score = value;
    };
    /**
     * Gets the msdyn_solutionarea property value. 
     * @returns a integer
     */
    public get msdyn_solutionarea() {
        return this._msdyn_solutionarea;
    };
    /**
     * Sets the msdyn_solutionarea property value. 
     * @param value Value to set for the msdyn_solutionarea property.
     */
    public set msdyn_solutionarea(value: number | undefined) {
        this._msdyn_solutionarea = value;
    };
    /**
     * Gets the msdyn_suggesteddate property value. 
     * @returns a Date
     */
    public get msdyn_suggesteddate() {
        return this._msdyn_suggesteddate;
    };
    /**
     * Sets the msdyn_suggesteddate property value. 
     * @param value Value to set for the msdyn_suggesteddate property.
     */
    public set msdyn_suggesteddate(value: Date | undefined) {
        this._msdyn_suggesteddate = value;
    };
    /**
     * Gets the msdyn_suggestionreason property value. 
     * @returns a string
     */
    public get msdyn_suggestionreason() {
        return this._msdyn_suggestionreason;
    };
    /**
     * Sets the msdyn_suggestionreason property value. 
     * @param value Value to set for the msdyn_suggestionreason property.
     */
    public set msdyn_suggestionreason(value: string | undefined) {
        this._msdyn_suggestionreason = value;
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
        writer.writeStringValue("_msdyn_qualifiedrecord_value", this._msdyn_qualifiedrecord_value);
        writer.writeStringValue("_msdyn_relatedrecord_value", this._msdyn_relatedrecord_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_customdata", this.msdyn_customdata);
        writer.writeDateValue("msdyn_expirydate", this.msdyn_expirydate);
        writer.writeStringValue("msdyn_feedbackreason", this.msdyn_feedbackreason);
        writer.writeStringValue("msdyn_insight", this.msdyn_insight);
        writer.writeStringValue("msdyn_modelid", this.msdyn_modelid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_potentialrevenue", this.msdyn_potentialrevenue);
        writer.writeNumberValue("msdyn_potentialrevenue_base", this.msdyn_potentialrevenue_base);
        writer.writeObjectValue<Opportunity>("msdyn_qualifiedrecord", this.msdyn_qualifiedrecord);
        writer.writeObjectValue<Account>("msdyn_relatedrecord", this.msdyn_relatedrecord);
        writer.writeNumberValue("msdyn_salesmotion", this.msdyn_salesmotion);
        writer.writeNumberValue("msdyn_salesplay", this.msdyn_salesplay);
        writer.writeCollectionOfObjectValues<Activityparty>("msdyn_salessuggestion_ActivityParties", this.msdyn_salessuggestion_ActivityParties);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_salessuggestion_ActivityPointers", this.msdyn_salessuggestion_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_salessuggestion_Annotations", this.msdyn_salessuggestion_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_salessuggestion_Appointments", this.msdyn_salessuggestion_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_salessuggestion_AsyncOperations", this.msdyn_salessuggestion_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_salessuggestion_BulkDeleteFailures", this.msdyn_salessuggestion_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_salessuggestion_connections1", this.msdyn_salessuggestion_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_salessuggestion_connections2", this.msdyn_salessuggestion_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_salessuggestion_DuplicateBaseRecord", this.msdyn_salessuggestion_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_salessuggestion_DuplicateMatchingRecord", this.msdyn_salessuggestion_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_salessuggestion_Emails", this.msdyn_salessuggestion_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_salessuggestion_Faxes", this.msdyn_salessuggestion_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_salessuggestion_Letters", this.msdyn_salessuggestion_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_salessuggestion_MailboxTrackingFolders", this.msdyn_salessuggestion_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_salessuggestion_msdyn_approvals", this.msdyn_salessuggestion_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_salessuggestion_msdyn_bookingalerts", this.msdyn_salessuggestion_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_salessuggestion_msdyn_ocliveworkitems", this.msdyn_salessuggestion_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_salessuggestion_msdyn_ocoutboundmessages", this.msdyn_salessuggestion_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_salessuggestion_msdyn_ocsessions", this.msdyn_salessuggestion_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_salessuggestion_msfp_alerts", this.msdyn_salessuggestion_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_salessuggestion_msfp_surveyinvites", this.msdyn_salessuggestion_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_salessuggestion_msfp_surveyresponses", this.msdyn_salessuggestion_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_salessuggestion_PhoneCalls", this.msdyn_salessuggestion_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_salessuggestion_PrincipalObjectAttributeAccesses", this.msdyn_salessuggestion_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_salessuggestion_ProcessSession", this.msdyn_salessuggestion_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_salessuggestion_RecurringAppointmentMasters", this.msdyn_salessuggestion_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_salessuggestion_ServiceAppointments", this.msdyn_salessuggestion_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_salessuggestion_SocialActivities", this.msdyn_salessuggestion_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_salessuggestion_SyncErrors", this.msdyn_salessuggestion_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_salessuggestion_Tasks", this.msdyn_salessuggestion_Tasks);
        writer.writeStringValue("msdyn_salessuggestionid", this.msdyn_salessuggestionid);
        writer.writeNumberValue("msdyn_score", this.msdyn_score);
        writer.writeNumberValue("msdyn_solutionarea", this.msdyn_solutionarea);
        writer.writeDateValue("msdyn_suggesteddate", this.msdyn_suggesteddate);
        writer.writeStringValue("msdyn_suggestionreason", this.msdyn_suggestionreason);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
