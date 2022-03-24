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
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_quotebookingincidentFromDiscriminatorValue} from './createMsdyn_quotebookingincidentFromDiscriminatorValue';
import {createMsdyn_quotebookingsetupFromDiscriminatorValue} from './createMsdyn_quotebookingsetupFromDiscriminatorValue';
import {createMsdyn_servicetasktypeFromDiscriminatorValue} from './createMsdyn_servicetasktypeFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_customerasset, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_quotebookingincident, Msdyn_quotebookingsetup, Msdyn_servicetasktype, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Quote, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_quotebookingservicetask extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_customerasset_value?: string | undefined;
    private __msdyn_quote_value?: string | undefined;
    private __msdyn_quotebookingincident_value?: string | undefined;
    private __msdyn_quotebookingsetup_value?: string | undefined;
    private __msdyn_tasktype_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_customerasset?: Msdyn_customerasset | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_estimatedduration?: number | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_iscopied?: boolean | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_quote?: Quote | undefined;
    private _msdyn_quotebookingincident?: Msdyn_quotebookingincident | undefined;
    private _msdyn_quotebookingservicetask_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_quotebookingservicetask_Annotations?: Annotation[] | undefined;
    private _msdyn_quotebookingservicetask_Appointments?: Appointment[] | undefined;
    private _msdyn_quotebookingservicetask_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_quotebookingservicetask_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_quotebookingservicetask_connections1?: Connection[] | undefined;
    private _msdyn_quotebookingservicetask_connections2?: Connection[] | undefined;
    private _msdyn_quotebookingservicetask_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotebookingservicetask_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotebookingservicetask_Emails?: Email[] | undefined;
    private _msdyn_quotebookingservicetask_Faxes?: Fax[] | undefined;
    private _msdyn_quotebookingservicetask_Letters?: Letter[] | undefined;
    private _msdyn_quotebookingservicetask_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_quotebookingservicetask_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_quotebookingservicetask_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_quotebookingservicetask_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_quotebookingservicetask_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_quotebookingservicetask_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_quotebookingservicetask_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_quotebookingservicetask_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_quotebookingservicetask_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_quotebookingservicetask_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_quotebookingservicetask_ProcessSession?: Processsession[] | undefined;
    private _msdyn_quotebookingservicetask_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_quotebookingservicetask_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_quotebookingservicetask_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_quotebookingservicetask_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_quotebookingservicetask_Tasks?: Task[] | undefined;
    private _msdyn_quotebookingservicetaskid?: string | undefined;
    private _msdyn_QuoteBookingSetup?: Msdyn_quotebookingsetup | undefined;
    private _msdyn_TaskType?: Msdyn_servicetasktype | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyn_customerasset_value property value. 
     * @returns a string
     */
    public get _msdyn_customerasset_value() {
        return this.__msdyn_customerasset_value;
    };
    /**
     * Sets the _msdyn_customerasset_value property value. 
     * @param value Value to set for the _msdyn_customerasset_value property.
     */
    public set _msdyn_customerasset_value(value: string | undefined) {
        this.__msdyn_customerasset_value = value;
    };
    /**
     * Gets the _msdyn_quote_value property value. 
     * @returns a string
     */
    public get _msdyn_quote_value() {
        return this.__msdyn_quote_value;
    };
    /**
     * Sets the _msdyn_quote_value property value. 
     * @param value Value to set for the _msdyn_quote_value property.
     */
    public set _msdyn_quote_value(value: string | undefined) {
        this.__msdyn_quote_value = value;
    };
    /**
     * Gets the _msdyn_quotebookingincident_value property value. 
     * @returns a string
     */
    public get _msdyn_quotebookingincident_value() {
        return this.__msdyn_quotebookingincident_value;
    };
    /**
     * Sets the _msdyn_quotebookingincident_value property value. 
     * @param value Value to set for the _msdyn_quotebookingincident_value property.
     */
    public set _msdyn_quotebookingincident_value(value: string | undefined) {
        this.__msdyn_quotebookingincident_value = value;
    };
    /**
     * Gets the _msdyn_quotebookingsetup_value property value. 
     * @returns a string
     */
    public get _msdyn_quotebookingsetup_value() {
        return this.__msdyn_quotebookingsetup_value;
    };
    /**
     * Sets the _msdyn_quotebookingsetup_value property value. 
     * @param value Value to set for the _msdyn_quotebookingsetup_value property.
     */
    public set _msdyn_quotebookingsetup_value(value: string | undefined) {
        this.__msdyn_quotebookingsetup_value = value;
    };
    /**
     * Gets the _msdyn_tasktype_value property value. 
     * @returns a string
     */
    public get _msdyn_tasktype_value() {
        return this.__msdyn_tasktype_value;
    };
    /**
     * Sets the _msdyn_tasktype_value property value. 
     * @param value Value to set for the _msdyn_tasktype_value property.
     */
    public set _msdyn_tasktype_value(value: string | undefined) {
        this.__msdyn_tasktype_value = value;
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
     * Instantiates a new msdyn_quotebookingservicetask and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_customerasset_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._msdyn_customerasset_value = n.getStringValue(); },
            "_msdyn_quote_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._msdyn_quote_value = n.getStringValue(); },
            "_msdyn_quotebookingincident_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._msdyn_quotebookingincident_value = n.getStringValue(); },
            "_msdyn_quotebookingsetup_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._msdyn_quotebookingsetup_value = n.getStringValue(); },
            "_msdyn_tasktype_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._msdyn_tasktype_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_customerasset": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_customerasset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_description = n.getStringValue(); },
            "msdyn_estimatedduration": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_estimatedduration = n.getNumberValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_internalflags = n.getStringValue(); },
            "msdyn_iscopied": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_iscopied = n.getBooleanValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_name = n.getStringValue(); },
            "msdyn_quote": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quote = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "msdyn_quotebookingincident": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingincident = n.getObjectValue<Msdyn_quotebookingincident>(createMsdyn_quotebookingincidentFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_ActivityPointers": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_Annotations": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_Appointments": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_AsyncOperations": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_connections1": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_connections2": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_Emails": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_Faxes": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_Letters": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_msfp_alerts": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_PhoneCalls": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_ProcessSession": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_SocialActivities": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_SyncErrors": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_quotebookingservicetask_Tasks": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetask_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_quotebookingservicetaskid": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_quotebookingservicetaskid = n.getStringValue(); },
            "msdyn_QuoteBookingSetup": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_QuoteBookingSetup = n.getObjectValue<Msdyn_quotebookingsetup>(createMsdyn_quotebookingsetupFromDiscriminatorValue); },
            "msdyn_TaskType": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).msdyn_TaskType = n.getObjectValue<Msdyn_servicetasktype>(createMsdyn_servicetasktypeFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_quotebookingservicetask).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_customerasset property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_customerasset() {
        return this._msdyn_customerasset;
    };
    /**
     * Sets the msdyn_customerasset property value. 
     * @param value Value to set for the msdyn_customerasset property.
     */
    public set msdyn_customerasset(value: Msdyn_customerasset | undefined) {
        this._msdyn_customerasset = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_estimatedduration property value. 
     * @returns a integer
     */
    public get msdyn_estimatedduration() {
        return this._msdyn_estimatedduration;
    };
    /**
     * Sets the msdyn_estimatedduration property value. 
     * @param value Value to set for the msdyn_estimatedduration property.
     */
    public set msdyn_estimatedduration(value: number | undefined) {
        this._msdyn_estimatedduration = value;
    };
    /**
     * Gets the msdyn_internalflags property value. 
     * @returns a string
     */
    public get msdyn_internalflags() {
        return this._msdyn_internalflags;
    };
    /**
     * Sets the msdyn_internalflags property value. 
     * @param value Value to set for the msdyn_internalflags property.
     */
    public set msdyn_internalflags(value: string | undefined) {
        this._msdyn_internalflags = value;
    };
    /**
     * Gets the msdyn_iscopied property value. 
     * @returns a boolean
     */
    public get msdyn_iscopied() {
        return this._msdyn_iscopied;
    };
    /**
     * Sets the msdyn_iscopied property value. 
     * @param value Value to set for the msdyn_iscopied property.
     */
    public set msdyn_iscopied(value: boolean | undefined) {
        this._msdyn_iscopied = value;
    };
    /**
     * Gets the msdyn_lineorder property value. 
     * @returns a integer
     */
    public get msdyn_lineorder() {
        return this._msdyn_lineorder;
    };
    /**
     * Sets the msdyn_lineorder property value. 
     * @param value Value to set for the msdyn_lineorder property.
     */
    public set msdyn_lineorder(value: number | undefined) {
        this._msdyn_lineorder = value;
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
     * Gets the msdyn_quote property value. 
     * @returns a quote
     */
    public get msdyn_quote() {
        return this._msdyn_quote;
    };
    /**
     * Sets the msdyn_quote property value. 
     * @param value Value to set for the msdyn_quote property.
     */
    public set msdyn_quote(value: Quote | undefined) {
        this._msdyn_quote = value;
    };
    /**
     * Gets the msdyn_quotebookingincident property value. 
     * @returns a msdyn_quotebookingincident
     */
    public get msdyn_quotebookingincident() {
        return this._msdyn_quotebookingincident;
    };
    /**
     * Sets the msdyn_quotebookingincident property value. 
     * @param value Value to set for the msdyn_quotebookingincident property.
     */
    public set msdyn_quotebookingincident(value: Msdyn_quotebookingincident | undefined) {
        this._msdyn_quotebookingincident = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_quotebookingservicetask_ActivityPointers() {
        return this._msdyn_quotebookingservicetask_ActivityPointers;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_ActivityPointers property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_ActivityPointers property.
     */
    public set msdyn_quotebookingservicetask_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_quotebookingservicetask_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_quotebookingservicetask_Annotations() {
        return this._msdyn_quotebookingservicetask_Annotations;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_Annotations property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_Annotations property.
     */
    public set msdyn_quotebookingservicetask_Annotations(value: Annotation[] | undefined) {
        this._msdyn_quotebookingservicetask_Annotations = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_quotebookingservicetask_Appointments() {
        return this._msdyn_quotebookingservicetask_Appointments;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_Appointments property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_Appointments property.
     */
    public set msdyn_quotebookingservicetask_Appointments(value: Appointment[] | undefined) {
        this._msdyn_quotebookingservicetask_Appointments = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_quotebookingservicetask_AsyncOperations() {
        return this._msdyn_quotebookingservicetask_AsyncOperations;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_AsyncOperations property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_AsyncOperations property.
     */
    public set msdyn_quotebookingservicetask_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_quotebookingservicetask_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_quotebookingservicetask_BulkDeleteFailures() {
        return this._msdyn_quotebookingservicetask_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_BulkDeleteFailures property.
     */
    public set msdyn_quotebookingservicetask_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_quotebookingservicetask_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_quotebookingservicetask_connections1() {
        return this._msdyn_quotebookingservicetask_connections1;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_connections1 property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_connections1 property.
     */
    public set msdyn_quotebookingservicetask_connections1(value: Connection[] | undefined) {
        this._msdyn_quotebookingservicetask_connections1 = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_quotebookingservicetask_connections2() {
        return this._msdyn_quotebookingservicetask_connections2;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_connections2 property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_connections2 property.
     */
    public set msdyn_quotebookingservicetask_connections2(value: Connection[] | undefined) {
        this._msdyn_quotebookingservicetask_connections2 = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotebookingservicetask_DuplicateBaseRecord() {
        return this._msdyn_quotebookingservicetask_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_DuplicateBaseRecord property.
     */
    public set msdyn_quotebookingservicetask_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotebookingservicetask_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotebookingservicetask_DuplicateMatchingRecord() {
        return this._msdyn_quotebookingservicetask_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_DuplicateMatchingRecord property.
     */
    public set msdyn_quotebookingservicetask_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotebookingservicetask_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_Emails property value. 
     * @returns a email
     */
    public get msdyn_quotebookingservicetask_Emails() {
        return this._msdyn_quotebookingservicetask_Emails;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_Emails property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_Emails property.
     */
    public set msdyn_quotebookingservicetask_Emails(value: Email[] | undefined) {
        this._msdyn_quotebookingservicetask_Emails = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_quotebookingservicetask_Faxes() {
        return this._msdyn_quotebookingservicetask_Faxes;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_Faxes property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_Faxes property.
     */
    public set msdyn_quotebookingservicetask_Faxes(value: Fax[] | undefined) {
        this._msdyn_quotebookingservicetask_Faxes = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_Letters property value. 
     * @returns a letter
     */
    public get msdyn_quotebookingservicetask_Letters() {
        return this._msdyn_quotebookingservicetask_Letters;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_Letters property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_Letters property.
     */
    public set msdyn_quotebookingservicetask_Letters(value: Letter[] | undefined) {
        this._msdyn_quotebookingservicetask_Letters = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_quotebookingservicetask_MailboxTrackingFolders() {
        return this._msdyn_quotebookingservicetask_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_MailboxTrackingFolders property.
     */
    public set msdyn_quotebookingservicetask_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_quotebookingservicetask_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_quotebookingservicetask_msdyn_approvals() {
        return this._msdyn_quotebookingservicetask_msdyn_approvals;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_msdyn_approvals property.
     */
    public set msdyn_quotebookingservicetask_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_quotebookingservicetask_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_quotebookingservicetask_msdyn_bookingalerts() {
        return this._msdyn_quotebookingservicetask_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_msdyn_bookingalerts property.
     */
    public set msdyn_quotebookingservicetask_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_quotebookingservicetask_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_quotebookingservicetask_msdyn_ocliveworkitems() {
        return this._msdyn_quotebookingservicetask_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_msdyn_ocliveworkitems property.
     */
    public set msdyn_quotebookingservicetask_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_quotebookingservicetask_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_quotebookingservicetask_msdyn_ocoutboundmessages() {
        return this._msdyn_quotebookingservicetask_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_msdyn_ocoutboundmessages property.
     */
    public set msdyn_quotebookingservicetask_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_quotebookingservicetask_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_quotebookingservicetask_msdyn_ocsessions() {
        return this._msdyn_quotebookingservicetask_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_msdyn_ocsessions property.
     */
    public set msdyn_quotebookingservicetask_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_quotebookingservicetask_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_quotebookingservicetask_msfp_alerts() {
        return this._msdyn_quotebookingservicetask_msfp_alerts;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_msfp_alerts property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_msfp_alerts property.
     */
    public set msdyn_quotebookingservicetask_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_quotebookingservicetask_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_quotebookingservicetask_msfp_surveyinvites() {
        return this._msdyn_quotebookingservicetask_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_msfp_surveyinvites property.
     */
    public set msdyn_quotebookingservicetask_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_quotebookingservicetask_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_quotebookingservicetask_msfp_surveyresponses() {
        return this._msdyn_quotebookingservicetask_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_msfp_surveyresponses property.
     */
    public set msdyn_quotebookingservicetask_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_quotebookingservicetask_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_quotebookingservicetask_PhoneCalls() {
        return this._msdyn_quotebookingservicetask_PhoneCalls;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_PhoneCalls property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_PhoneCalls property.
     */
    public set msdyn_quotebookingservicetask_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_quotebookingservicetask_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses() {
        return this._msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_quotebookingservicetask_ProcessSession() {
        return this._msdyn_quotebookingservicetask_ProcessSession;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_ProcessSession property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_ProcessSession property.
     */
    public set msdyn_quotebookingservicetask_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_quotebookingservicetask_ProcessSession = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_quotebookingservicetask_RecurringAppointmentMasters() {
        return this._msdyn_quotebookingservicetask_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_RecurringAppointmentMasters property.
     */
    public set msdyn_quotebookingservicetask_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_quotebookingservicetask_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_quotebookingservicetask_ServiceAppointments() {
        return this._msdyn_quotebookingservicetask_ServiceAppointments;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_ServiceAppointments property.
     */
    public set msdyn_quotebookingservicetask_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_quotebookingservicetask_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_quotebookingservicetask_SocialActivities() {
        return this._msdyn_quotebookingservicetask_SocialActivities;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_SocialActivities property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_SocialActivities property.
     */
    public set msdyn_quotebookingservicetask_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_quotebookingservicetask_SocialActivities = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_quotebookingservicetask_SyncErrors() {
        return this._msdyn_quotebookingservicetask_SyncErrors;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_SyncErrors property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_SyncErrors property.
     */
    public set msdyn_quotebookingservicetask_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_quotebookingservicetask_SyncErrors = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetask_Tasks property value. 
     * @returns a task
     */
    public get msdyn_quotebookingservicetask_Tasks() {
        return this._msdyn_quotebookingservicetask_Tasks;
    };
    /**
     * Sets the msdyn_quotebookingservicetask_Tasks property value. 
     * @param value Value to set for the msdyn_quotebookingservicetask_Tasks property.
     */
    public set msdyn_quotebookingservicetask_Tasks(value: Task[] | undefined) {
        this._msdyn_quotebookingservicetask_Tasks = value;
    };
    /**
     * Gets the msdyn_quotebookingservicetaskid property value. 
     * @returns a string
     */
    public get msdyn_quotebookingservicetaskid() {
        return this._msdyn_quotebookingservicetaskid;
    };
    /**
     * Sets the msdyn_quotebookingservicetaskid property value. 
     * @param value Value to set for the msdyn_quotebookingservicetaskid property.
     */
    public set msdyn_quotebookingservicetaskid(value: string | undefined) {
        this._msdyn_quotebookingservicetaskid = value;
    };
    /**
     * Gets the msdyn_QuoteBookingSetup property value. 
     * @returns a msdyn_quotebookingsetup
     */
    public get msdyn_QuoteBookingSetup() {
        return this._msdyn_QuoteBookingSetup;
    };
    /**
     * Sets the msdyn_QuoteBookingSetup property value. 
     * @param value Value to set for the msdyn_QuoteBookingSetup property.
     */
    public set msdyn_QuoteBookingSetup(value: Msdyn_quotebookingsetup | undefined) {
        this._msdyn_QuoteBookingSetup = value;
    };
    /**
     * Gets the msdyn_TaskType property value. 
     * @returns a msdyn_servicetasktype
     */
    public get msdyn_TaskType() {
        return this._msdyn_TaskType;
    };
    /**
     * Sets the msdyn_TaskType property value. 
     * @param value Value to set for the msdyn_TaskType property.
     */
    public set msdyn_TaskType(value: Msdyn_servicetasktype | undefined) {
        this._msdyn_TaskType = value;
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
        writer.writeStringValue("_msdyn_customerasset_value", this._msdyn_customerasset_value);
        writer.writeStringValue("_msdyn_quote_value", this._msdyn_quote_value);
        writer.writeStringValue("_msdyn_quotebookingincident_value", this._msdyn_quotebookingincident_value);
        writer.writeStringValue("_msdyn_quotebookingsetup_value", this._msdyn_quotebookingsetup_value);
        writer.writeStringValue("_msdyn_tasktype_value", this._msdyn_tasktype_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_customerasset", this.msdyn_customerasset);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_estimatedduration", this.msdyn_estimatedduration);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeBooleanValue("msdyn_iscopied", this.msdyn_iscopied);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Quote>("msdyn_quote", this.msdyn_quote);
        writer.writeObjectValue<Msdyn_quotebookingincident>("msdyn_quotebookingincident", this.msdyn_quotebookingincident);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_quotebookingservicetask_ActivityPointers", this.msdyn_quotebookingservicetask_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_quotebookingservicetask_Annotations", this.msdyn_quotebookingservicetask_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_quotebookingservicetask_Appointments", this.msdyn_quotebookingservicetask_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_quotebookingservicetask_AsyncOperations", this.msdyn_quotebookingservicetask_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_quotebookingservicetask_BulkDeleteFailures", this.msdyn_quotebookingservicetask_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_quotebookingservicetask_connections1", this.msdyn_quotebookingservicetask_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_quotebookingservicetask_connections2", this.msdyn_quotebookingservicetask_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotebookingservicetask_DuplicateBaseRecord", this.msdyn_quotebookingservicetask_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotebookingservicetask_DuplicateMatchingRecord", this.msdyn_quotebookingservicetask_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_quotebookingservicetask_Emails", this.msdyn_quotebookingservicetask_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_quotebookingservicetask_Faxes", this.msdyn_quotebookingservicetask_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_quotebookingservicetask_Letters", this.msdyn_quotebookingservicetask_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_quotebookingservicetask_MailboxTrackingFolders", this.msdyn_quotebookingservicetask_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_quotebookingservicetask_msdyn_approvals", this.msdyn_quotebookingservicetask_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_quotebookingservicetask_msdyn_bookingalerts", this.msdyn_quotebookingservicetask_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_quotebookingservicetask_msdyn_ocliveworkitems", this.msdyn_quotebookingservicetask_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_quotebookingservicetask_msdyn_ocoutboundmessages", this.msdyn_quotebookingservicetask_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_quotebookingservicetask_msdyn_ocsessions", this.msdyn_quotebookingservicetask_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_quotebookingservicetask_msfp_alerts", this.msdyn_quotebookingservicetask_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_quotebookingservicetask_msfp_surveyinvites", this.msdyn_quotebookingservicetask_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_quotebookingservicetask_msfp_surveyresponses", this.msdyn_quotebookingservicetask_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_quotebookingservicetask_PhoneCalls", this.msdyn_quotebookingservicetask_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses", this.msdyn_quotebookingservicetask_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_quotebookingservicetask_ProcessSession", this.msdyn_quotebookingservicetask_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_quotebookingservicetask_RecurringAppointmentMasters", this.msdyn_quotebookingservicetask_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_quotebookingservicetask_ServiceAppointments", this.msdyn_quotebookingservicetask_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_quotebookingservicetask_SocialActivities", this.msdyn_quotebookingservicetask_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_quotebookingservicetask_SyncErrors", this.msdyn_quotebookingservicetask_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_quotebookingservicetask_Tasks", this.msdyn_quotebookingservicetask_Tasks);
        writer.writeStringValue("msdyn_quotebookingservicetaskid", this.msdyn_quotebookingservicetaskid);
        writer.writeObjectValue<Msdyn_quotebookingsetup>("msdyn_QuoteBookingSetup", this.msdyn_QuoteBookingSetup);
        writer.writeObjectValue<Msdyn_servicetasktype>("msdyn_TaskType", this.msdyn_TaskType);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
