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
import {createMsdyn_paymentFromDiscriminatorValue} from './createMsdyn_paymentFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
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
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_payment, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_paymentmethod extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod?: Msdyn_payment[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_paymentmethod_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_paymentmethod_Annotations?: Annotation[] | undefined;
    private _msdyn_paymentmethod_Appointments?: Appointment[] | undefined;
    private _msdyn_paymentmethod_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_paymentmethod_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_paymentmethod_connections1?: Connection[] | undefined;
    private _msdyn_paymentmethod_connections2?: Connection[] | undefined;
    private _msdyn_paymentmethod_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_paymentmethod_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_paymentmethod_Emails?: Email[] | undefined;
    private _msdyn_paymentmethod_Faxes?: Fax[] | undefined;
    private _msdyn_paymentmethod_Letters?: Letter[] | undefined;
    private _msdyn_paymentmethod_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_paymentmethod_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_paymentmethod_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_paymentmethod_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_paymentmethod_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_paymentmethod_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_paymentmethod_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_paymentmethod_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_paymentmethod_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_paymentmethod_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_paymentmethod_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_paymentmethod_ProcessSession?: Processsession[] | undefined;
    private _msdyn_paymentmethod_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_paymentmethod_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_paymentmethod_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_paymentmethod_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_paymentmethod_Tasks?: Task[] | undefined;
    private _msdyn_paymentmethodid?: string | undefined;
    private _msdyn_paymenttype?: number | undefined;
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
     * Instantiates a new msdyn_paymentmethod and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_paymentmethod)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_paymentmethod)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_paymentmethod)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_paymentmethod)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_paymentmethod)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_paymentmethod)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_paymentmethod)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_paymentmethod)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_paymentmethod).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_paymentmethod).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_paymentmethod).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_paymentmethod).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_paymentmethod).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_paymentmethod).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_paymentmethod).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod = n.getCollectionOfObjectValues<Msdyn_payment>(createMsdyn_paymentFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_name = n.getStringValue(); },
            "msdyn_paymentmethod_ActivityPointers": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_paymentmethod_Annotations": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_paymentmethod_Appointments": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_paymentmethod_AsyncOperations": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_paymentmethod_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_paymentmethod_connections1": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_paymentmethod_connections2": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_paymentmethod_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_paymentmethod_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_paymentmethod_Emails": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_paymentmethod_Faxes": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_paymentmethod_Letters": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_paymentmethod_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_paymentmethod_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_paymentmethod_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_paymentmethod_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_paymentmethod_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_paymentmethod_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_paymentmethod_msfp_alerts": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_paymentmethod_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_paymentmethod_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_paymentmethod_PhoneCalls": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_paymentmethod_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_paymentmethod_ProcessSession": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_paymentmethod_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_paymentmethod_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_paymentmethod_SocialActivities": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_paymentmethod_SyncErrors": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_paymentmethod_Tasks": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethod_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_paymentmethodid": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymentmethodid = n.getStringValue(); },
            "msdyn_paymenttype": (o, n) => { (o as unknown as Msdyn_paymentmethod).msdyn_paymenttype = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_paymentmethod).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_paymentmethod).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_paymentmethod).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_paymentmethod).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_paymentmethod).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_paymentmethod).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_paymentmethod).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_paymentmethod).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_paymentmethod).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_paymentmethod).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod property value. 
     * @returns a msdyn_payment
     */
    public get msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod() {
        return this._msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod;
    };
    /**
     * Sets the msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod property value. 
     * @param value Value to set for the msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod property.
     */
    public set msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod(value: Msdyn_payment[] | undefined) {
        this._msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod = value;
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
     * Gets the msdyn_paymentmethod_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_paymentmethod_ActivityPointers() {
        return this._msdyn_paymentmethod_ActivityPointers;
    };
    /**
     * Sets the msdyn_paymentmethod_ActivityPointers property value. 
     * @param value Value to set for the msdyn_paymentmethod_ActivityPointers property.
     */
    public set msdyn_paymentmethod_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_paymentmethod_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_paymentmethod_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_paymentmethod_Annotations() {
        return this._msdyn_paymentmethod_Annotations;
    };
    /**
     * Sets the msdyn_paymentmethod_Annotations property value. 
     * @param value Value to set for the msdyn_paymentmethod_Annotations property.
     */
    public set msdyn_paymentmethod_Annotations(value: Annotation[] | undefined) {
        this._msdyn_paymentmethod_Annotations = value;
    };
    /**
     * Gets the msdyn_paymentmethod_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_paymentmethod_Appointments() {
        return this._msdyn_paymentmethod_Appointments;
    };
    /**
     * Sets the msdyn_paymentmethod_Appointments property value. 
     * @param value Value to set for the msdyn_paymentmethod_Appointments property.
     */
    public set msdyn_paymentmethod_Appointments(value: Appointment[] | undefined) {
        this._msdyn_paymentmethod_Appointments = value;
    };
    /**
     * Gets the msdyn_paymentmethod_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_paymentmethod_AsyncOperations() {
        return this._msdyn_paymentmethod_AsyncOperations;
    };
    /**
     * Sets the msdyn_paymentmethod_AsyncOperations property value. 
     * @param value Value to set for the msdyn_paymentmethod_AsyncOperations property.
     */
    public set msdyn_paymentmethod_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_paymentmethod_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_paymentmethod_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_paymentmethod_BulkDeleteFailures() {
        return this._msdyn_paymentmethod_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_paymentmethod_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_paymentmethod_BulkDeleteFailures property.
     */
    public set msdyn_paymentmethod_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_paymentmethod_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_paymentmethod_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_paymentmethod_connections1() {
        return this._msdyn_paymentmethod_connections1;
    };
    /**
     * Sets the msdyn_paymentmethod_connections1 property value. 
     * @param value Value to set for the msdyn_paymentmethod_connections1 property.
     */
    public set msdyn_paymentmethod_connections1(value: Connection[] | undefined) {
        this._msdyn_paymentmethod_connections1 = value;
    };
    /**
     * Gets the msdyn_paymentmethod_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_paymentmethod_connections2() {
        return this._msdyn_paymentmethod_connections2;
    };
    /**
     * Sets the msdyn_paymentmethod_connections2 property value. 
     * @param value Value to set for the msdyn_paymentmethod_connections2 property.
     */
    public set msdyn_paymentmethod_connections2(value: Connection[] | undefined) {
        this._msdyn_paymentmethod_connections2 = value;
    };
    /**
     * Gets the msdyn_paymentmethod_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_paymentmethod_DuplicateBaseRecord() {
        return this._msdyn_paymentmethod_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_paymentmethod_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_paymentmethod_DuplicateBaseRecord property.
     */
    public set msdyn_paymentmethod_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_paymentmethod_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_paymentmethod_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_paymentmethod_DuplicateMatchingRecord() {
        return this._msdyn_paymentmethod_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_paymentmethod_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_paymentmethod_DuplicateMatchingRecord property.
     */
    public set msdyn_paymentmethod_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_paymentmethod_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_paymentmethod_Emails property value. 
     * @returns a email
     */
    public get msdyn_paymentmethod_Emails() {
        return this._msdyn_paymentmethod_Emails;
    };
    /**
     * Sets the msdyn_paymentmethod_Emails property value. 
     * @param value Value to set for the msdyn_paymentmethod_Emails property.
     */
    public set msdyn_paymentmethod_Emails(value: Email[] | undefined) {
        this._msdyn_paymentmethod_Emails = value;
    };
    /**
     * Gets the msdyn_paymentmethod_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_paymentmethod_Faxes() {
        return this._msdyn_paymentmethod_Faxes;
    };
    /**
     * Sets the msdyn_paymentmethod_Faxes property value. 
     * @param value Value to set for the msdyn_paymentmethod_Faxes property.
     */
    public set msdyn_paymentmethod_Faxes(value: Fax[] | undefined) {
        this._msdyn_paymentmethod_Faxes = value;
    };
    /**
     * Gets the msdyn_paymentmethod_Letters property value. 
     * @returns a letter
     */
    public get msdyn_paymentmethod_Letters() {
        return this._msdyn_paymentmethod_Letters;
    };
    /**
     * Sets the msdyn_paymentmethod_Letters property value. 
     * @param value Value to set for the msdyn_paymentmethod_Letters property.
     */
    public set msdyn_paymentmethod_Letters(value: Letter[] | undefined) {
        this._msdyn_paymentmethod_Letters = value;
    };
    /**
     * Gets the msdyn_paymentmethod_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_paymentmethod_MailboxTrackingFolders() {
        return this._msdyn_paymentmethod_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_paymentmethod_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_paymentmethod_MailboxTrackingFolders property.
     */
    public set msdyn_paymentmethod_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_paymentmethod_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_paymentmethod_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_paymentmethod_msdyn_approvals() {
        return this._msdyn_paymentmethod_msdyn_approvals;
    };
    /**
     * Sets the msdyn_paymentmethod_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_paymentmethod_msdyn_approvals property.
     */
    public set msdyn_paymentmethod_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_paymentmethod_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_paymentmethod_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_paymentmethod_msdyn_bookingalerts() {
        return this._msdyn_paymentmethod_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_paymentmethod_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_paymentmethod_msdyn_bookingalerts property.
     */
    public set msdyn_paymentmethod_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_paymentmethod_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_paymentmethod_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_paymentmethod_msdyn_ocliveworkitems() {
        return this._msdyn_paymentmethod_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_paymentmethod_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_paymentmethod_msdyn_ocliveworkitems property.
     */
    public set msdyn_paymentmethod_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_paymentmethod_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_paymentmethod_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_paymentmethod_msdyn_ocoutboundmessages() {
        return this._msdyn_paymentmethod_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_paymentmethod_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_paymentmethod_msdyn_ocoutboundmessages property.
     */
    public set msdyn_paymentmethod_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_paymentmethod_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_paymentmethod_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_paymentmethod_msdyn_ocsessions() {
        return this._msdyn_paymentmethod_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_paymentmethod_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_paymentmethod_msdyn_ocsessions property.
     */
    public set msdyn_paymentmethod_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_paymentmethod_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_paymentmethod_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_paymentmethod_msfp_alerts() {
        return this._msdyn_paymentmethod_msfp_alerts;
    };
    /**
     * Sets the msdyn_paymentmethod_msfp_alerts property value. 
     * @param value Value to set for the msdyn_paymentmethod_msfp_alerts property.
     */
    public set msdyn_paymentmethod_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_paymentmethod_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_paymentmethod_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_paymentmethod_msfp_surveyinvites() {
        return this._msdyn_paymentmethod_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_paymentmethod_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_paymentmethod_msfp_surveyinvites property.
     */
    public set msdyn_paymentmethod_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_paymentmethod_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_paymentmethod_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_paymentmethod_msfp_surveyresponses() {
        return this._msdyn_paymentmethod_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_paymentmethod_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_paymentmethod_msfp_surveyresponses property.
     */
    public set msdyn_paymentmethod_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_paymentmethod_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_paymentmethod_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_paymentmethod_PhoneCalls() {
        return this._msdyn_paymentmethod_PhoneCalls;
    };
    /**
     * Sets the msdyn_paymentmethod_PhoneCalls property value. 
     * @param value Value to set for the msdyn_paymentmethod_PhoneCalls property.
     */
    public set msdyn_paymentmethod_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_paymentmethod_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_paymentmethod_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_paymentmethod_PrincipalObjectAttributeAccesses() {
        return this._msdyn_paymentmethod_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_paymentmethod_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_paymentmethod_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_paymentmethod_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_paymentmethod_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_paymentmethod_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_paymentmethod_ProcessSession() {
        return this._msdyn_paymentmethod_ProcessSession;
    };
    /**
     * Sets the msdyn_paymentmethod_ProcessSession property value. 
     * @param value Value to set for the msdyn_paymentmethod_ProcessSession property.
     */
    public set msdyn_paymentmethod_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_paymentmethod_ProcessSession = value;
    };
    /**
     * Gets the msdyn_paymentmethod_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_paymentmethod_RecurringAppointmentMasters() {
        return this._msdyn_paymentmethod_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_paymentmethod_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_paymentmethod_RecurringAppointmentMasters property.
     */
    public set msdyn_paymentmethod_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_paymentmethod_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_paymentmethod_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_paymentmethod_ServiceAppointments() {
        return this._msdyn_paymentmethod_ServiceAppointments;
    };
    /**
     * Sets the msdyn_paymentmethod_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_paymentmethod_ServiceAppointments property.
     */
    public set msdyn_paymentmethod_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_paymentmethod_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_paymentmethod_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_paymentmethod_SocialActivities() {
        return this._msdyn_paymentmethod_SocialActivities;
    };
    /**
     * Sets the msdyn_paymentmethod_SocialActivities property value. 
     * @param value Value to set for the msdyn_paymentmethod_SocialActivities property.
     */
    public set msdyn_paymentmethod_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_paymentmethod_SocialActivities = value;
    };
    /**
     * Gets the msdyn_paymentmethod_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_paymentmethod_SyncErrors() {
        return this._msdyn_paymentmethod_SyncErrors;
    };
    /**
     * Sets the msdyn_paymentmethod_SyncErrors property value. 
     * @param value Value to set for the msdyn_paymentmethod_SyncErrors property.
     */
    public set msdyn_paymentmethod_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_paymentmethod_SyncErrors = value;
    };
    /**
     * Gets the msdyn_paymentmethod_Tasks property value. 
     * @returns a task
     */
    public get msdyn_paymentmethod_Tasks() {
        return this._msdyn_paymentmethod_Tasks;
    };
    /**
     * Sets the msdyn_paymentmethod_Tasks property value. 
     * @param value Value to set for the msdyn_paymentmethod_Tasks property.
     */
    public set msdyn_paymentmethod_Tasks(value: Task[] | undefined) {
        this._msdyn_paymentmethod_Tasks = value;
    };
    /**
     * Gets the msdyn_paymentmethodid property value. 
     * @returns a string
     */
    public get msdyn_paymentmethodid() {
        return this._msdyn_paymentmethodid;
    };
    /**
     * Sets the msdyn_paymentmethodid property value. 
     * @param value Value to set for the msdyn_paymentmethodid property.
     */
    public set msdyn_paymentmethodid(value: string | undefined) {
        this._msdyn_paymentmethodid = value;
    };
    /**
     * Gets the msdyn_paymenttype property value. 
     * @returns a integer
     */
    public get msdyn_paymenttype() {
        return this._msdyn_paymenttype;
    };
    /**
     * Sets the msdyn_paymenttype property value. 
     * @param value Value to set for the msdyn_paymenttype property.
     */
    public set msdyn_paymenttype(value: number | undefined) {
        this._msdyn_paymenttype = value;
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
        writer.writeCollectionOfObjectValues<Msdyn_payment>("msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod", this.msdyn_msdyn_paymentmethod_msdyn_payment_PaymentMethod);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_paymentmethod_ActivityPointers", this.msdyn_paymentmethod_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_paymentmethod_Annotations", this.msdyn_paymentmethod_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_paymentmethod_Appointments", this.msdyn_paymentmethod_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_paymentmethod_AsyncOperations", this.msdyn_paymentmethod_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_paymentmethod_BulkDeleteFailures", this.msdyn_paymentmethod_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_paymentmethod_connections1", this.msdyn_paymentmethod_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_paymentmethod_connections2", this.msdyn_paymentmethod_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_paymentmethod_DuplicateBaseRecord", this.msdyn_paymentmethod_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_paymentmethod_DuplicateMatchingRecord", this.msdyn_paymentmethod_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_paymentmethod_Emails", this.msdyn_paymentmethod_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_paymentmethod_Faxes", this.msdyn_paymentmethod_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_paymentmethod_Letters", this.msdyn_paymentmethod_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_paymentmethod_MailboxTrackingFolders", this.msdyn_paymentmethod_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_paymentmethod_msdyn_approvals", this.msdyn_paymentmethod_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_paymentmethod_msdyn_bookingalerts", this.msdyn_paymentmethod_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_paymentmethod_msdyn_ocliveworkitems", this.msdyn_paymentmethod_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_paymentmethod_msdyn_ocoutboundmessages", this.msdyn_paymentmethod_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_paymentmethod_msdyn_ocsessions", this.msdyn_paymentmethod_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_paymentmethod_msfp_alerts", this.msdyn_paymentmethod_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_paymentmethod_msfp_surveyinvites", this.msdyn_paymentmethod_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_paymentmethod_msfp_surveyresponses", this.msdyn_paymentmethod_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_paymentmethod_PhoneCalls", this.msdyn_paymentmethod_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_paymentmethod_PrincipalObjectAttributeAccesses", this.msdyn_paymentmethod_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_paymentmethod_ProcessSession", this.msdyn_paymentmethod_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_paymentmethod_RecurringAppointmentMasters", this.msdyn_paymentmethod_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_paymentmethod_ServiceAppointments", this.msdyn_paymentmethod_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_paymentmethod_SocialActivities", this.msdyn_paymentmethod_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_paymentmethod_SyncErrors", this.msdyn_paymentmethod_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_paymentmethod_Tasks", this.msdyn_paymentmethod_Tasks);
        writer.writeStringValue("msdyn_paymentmethodid", this.msdyn_paymentmethodid);
        writer.writeNumberValue("msdyn_paymenttype", this.msdyn_paymenttype);
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
