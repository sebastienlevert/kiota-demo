import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
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
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Organization, Phonecall, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_processnotes extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_details?: string | undefined;
    private _msdyn_entity?: string | undefined;
    private _msdyn_entityname?: string | undefined;
    private _msdyn_form?: string | undefined;
    private _msdyn_message?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_processnotes_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_processnotes_Annotations?: Annotation[] | undefined;
    private _msdyn_processnotes_Appointments?: Appointment[] | undefined;
    private _msdyn_processnotes_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_processnotes_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_processnotes_connections1?: Connection[] | undefined;
    private _msdyn_processnotes_connections2?: Connection[] | undefined;
    private _msdyn_processnotes_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_processnotes_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_processnotes_Emails?: Email[] | undefined;
    private _msdyn_processnotes_Faxes?: Fax[] | undefined;
    private _msdyn_processnotes_Letters?: Letter[] | undefined;
    private _msdyn_processnotes_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_processnotes_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_processnotes_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_processnotes_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_processnotes_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_processnotes_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_processnotes_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_processnotes_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_processnotes_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_processnotes_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_processnotes_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_processnotes_ProcessSession?: Processsession[] | undefined;
    private _msdyn_processnotes_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_processnotes_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_processnotes_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_processnotes_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_processnotes_Tasks?: Task[] | undefined;
    private _msdyn_processnotesid?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
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
     * Instantiates a new msdyn_processnotes and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_processnotes)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_processnotes)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_processnotes)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_processnotes)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_processnotes)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_processnotes).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_processnotes).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_processnotes).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_processnotes).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_processnotes).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_processnotes).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_processnotes).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_details": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_details = n.getStringValue(); },
            "msdyn_entity": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_entity = n.getStringValue(); },
            "msdyn_entityname": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_entityname = n.getStringValue(); },
            "msdyn_form": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_form = n.getStringValue(); },
            "msdyn_message": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_message = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_name = n.getStringValue(); },
            "msdyn_processnotes_ActivityPointers": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_processnotes_Annotations": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_processnotes_Appointments": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_processnotes_AsyncOperations": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_processnotes_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_processnotes_connections1": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_processnotes_connections2": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_processnotes_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_processnotes_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_processnotes_Emails": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_processnotes_Faxes": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_processnotes_Letters": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_processnotes_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_processnotes_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_processnotes_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_processnotes_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_processnotes_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_processnotes_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_processnotes_msfp_alerts": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_processnotes_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_processnotes_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_processnotes_PhoneCalls": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_processnotes_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_processnotes_ProcessSession": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_processnotes_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_processnotes_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_processnotes_SocialActivities": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_processnotes_SyncErrors": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_processnotes_Tasks": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotes_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_processnotesid": (o, n) => { (o as unknown as Msdyn_processnotes).msdyn_processnotesid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_processnotes).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_processnotes).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_processnotes).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_processnotes).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_processnotes).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_processnotes).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_processnotes).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_details property value. 
     * @returns a string
     */
    public get msdyn_details() {
        return this._msdyn_details;
    };
    /**
     * Sets the msdyn_details property value. 
     * @param value Value to set for the msdyn_details property.
     */
    public set msdyn_details(value: string | undefined) {
        this._msdyn_details = value;
    };
    /**
     * Gets the msdyn_entity property value. 
     * @returns a string
     */
    public get msdyn_entity() {
        return this._msdyn_entity;
    };
    /**
     * Sets the msdyn_entity property value. 
     * @param value Value to set for the msdyn_entity property.
     */
    public set msdyn_entity(value: string | undefined) {
        this._msdyn_entity = value;
    };
    /**
     * Gets the msdyn_entityname property value. 
     * @returns a string
     */
    public get msdyn_entityname() {
        return this._msdyn_entityname;
    };
    /**
     * Sets the msdyn_entityname property value. 
     * @param value Value to set for the msdyn_entityname property.
     */
    public set msdyn_entityname(value: string | undefined) {
        this._msdyn_entityname = value;
    };
    /**
     * Gets the msdyn_form property value. 
     * @returns a string
     */
    public get msdyn_form() {
        return this._msdyn_form;
    };
    /**
     * Sets the msdyn_form property value. 
     * @param value Value to set for the msdyn_form property.
     */
    public set msdyn_form(value: string | undefined) {
        this._msdyn_form = value;
    };
    /**
     * Gets the msdyn_message property value. 
     * @returns a string
     */
    public get msdyn_message() {
        return this._msdyn_message;
    };
    /**
     * Sets the msdyn_message property value. 
     * @param value Value to set for the msdyn_message property.
     */
    public set msdyn_message(value: string | undefined) {
        this._msdyn_message = value;
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
     * Gets the msdyn_processnotes_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_processnotes_ActivityPointers() {
        return this._msdyn_processnotes_ActivityPointers;
    };
    /**
     * Sets the msdyn_processnotes_ActivityPointers property value. 
     * @param value Value to set for the msdyn_processnotes_ActivityPointers property.
     */
    public set msdyn_processnotes_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_processnotes_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_processnotes_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_processnotes_Annotations() {
        return this._msdyn_processnotes_Annotations;
    };
    /**
     * Sets the msdyn_processnotes_Annotations property value. 
     * @param value Value to set for the msdyn_processnotes_Annotations property.
     */
    public set msdyn_processnotes_Annotations(value: Annotation[] | undefined) {
        this._msdyn_processnotes_Annotations = value;
    };
    /**
     * Gets the msdyn_processnotes_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_processnotes_Appointments() {
        return this._msdyn_processnotes_Appointments;
    };
    /**
     * Sets the msdyn_processnotes_Appointments property value. 
     * @param value Value to set for the msdyn_processnotes_Appointments property.
     */
    public set msdyn_processnotes_Appointments(value: Appointment[] | undefined) {
        this._msdyn_processnotes_Appointments = value;
    };
    /**
     * Gets the msdyn_processnotes_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_processnotes_AsyncOperations() {
        return this._msdyn_processnotes_AsyncOperations;
    };
    /**
     * Sets the msdyn_processnotes_AsyncOperations property value. 
     * @param value Value to set for the msdyn_processnotes_AsyncOperations property.
     */
    public set msdyn_processnotes_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_processnotes_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_processnotes_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_processnotes_BulkDeleteFailures() {
        return this._msdyn_processnotes_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_processnotes_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_processnotes_BulkDeleteFailures property.
     */
    public set msdyn_processnotes_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_processnotes_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_processnotes_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_processnotes_connections1() {
        return this._msdyn_processnotes_connections1;
    };
    /**
     * Sets the msdyn_processnotes_connections1 property value. 
     * @param value Value to set for the msdyn_processnotes_connections1 property.
     */
    public set msdyn_processnotes_connections1(value: Connection[] | undefined) {
        this._msdyn_processnotes_connections1 = value;
    };
    /**
     * Gets the msdyn_processnotes_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_processnotes_connections2() {
        return this._msdyn_processnotes_connections2;
    };
    /**
     * Sets the msdyn_processnotes_connections2 property value. 
     * @param value Value to set for the msdyn_processnotes_connections2 property.
     */
    public set msdyn_processnotes_connections2(value: Connection[] | undefined) {
        this._msdyn_processnotes_connections2 = value;
    };
    /**
     * Gets the msdyn_processnotes_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_processnotes_DuplicateBaseRecord() {
        return this._msdyn_processnotes_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_processnotes_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_processnotes_DuplicateBaseRecord property.
     */
    public set msdyn_processnotes_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_processnotes_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_processnotes_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_processnotes_DuplicateMatchingRecord() {
        return this._msdyn_processnotes_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_processnotes_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_processnotes_DuplicateMatchingRecord property.
     */
    public set msdyn_processnotes_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_processnotes_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_processnotes_Emails property value. 
     * @returns a email
     */
    public get msdyn_processnotes_Emails() {
        return this._msdyn_processnotes_Emails;
    };
    /**
     * Sets the msdyn_processnotes_Emails property value. 
     * @param value Value to set for the msdyn_processnotes_Emails property.
     */
    public set msdyn_processnotes_Emails(value: Email[] | undefined) {
        this._msdyn_processnotes_Emails = value;
    };
    /**
     * Gets the msdyn_processnotes_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_processnotes_Faxes() {
        return this._msdyn_processnotes_Faxes;
    };
    /**
     * Sets the msdyn_processnotes_Faxes property value. 
     * @param value Value to set for the msdyn_processnotes_Faxes property.
     */
    public set msdyn_processnotes_Faxes(value: Fax[] | undefined) {
        this._msdyn_processnotes_Faxes = value;
    };
    /**
     * Gets the msdyn_processnotes_Letters property value. 
     * @returns a letter
     */
    public get msdyn_processnotes_Letters() {
        return this._msdyn_processnotes_Letters;
    };
    /**
     * Sets the msdyn_processnotes_Letters property value. 
     * @param value Value to set for the msdyn_processnotes_Letters property.
     */
    public set msdyn_processnotes_Letters(value: Letter[] | undefined) {
        this._msdyn_processnotes_Letters = value;
    };
    /**
     * Gets the msdyn_processnotes_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_processnotes_MailboxTrackingFolders() {
        return this._msdyn_processnotes_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_processnotes_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_processnotes_MailboxTrackingFolders property.
     */
    public set msdyn_processnotes_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_processnotes_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_processnotes_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_processnotes_msdyn_approvals() {
        return this._msdyn_processnotes_msdyn_approvals;
    };
    /**
     * Sets the msdyn_processnotes_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_processnotes_msdyn_approvals property.
     */
    public set msdyn_processnotes_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_processnotes_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_processnotes_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_processnotes_msdyn_bookingalerts() {
        return this._msdyn_processnotes_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_processnotes_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_processnotes_msdyn_bookingalerts property.
     */
    public set msdyn_processnotes_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_processnotes_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_processnotes_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_processnotes_msdyn_ocliveworkitems() {
        return this._msdyn_processnotes_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_processnotes_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_processnotes_msdyn_ocliveworkitems property.
     */
    public set msdyn_processnotes_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_processnotes_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_processnotes_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_processnotes_msdyn_ocoutboundmessages() {
        return this._msdyn_processnotes_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_processnotes_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_processnotes_msdyn_ocoutboundmessages property.
     */
    public set msdyn_processnotes_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_processnotes_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_processnotes_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_processnotes_msdyn_ocsessions() {
        return this._msdyn_processnotes_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_processnotes_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_processnotes_msdyn_ocsessions property.
     */
    public set msdyn_processnotes_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_processnotes_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_processnotes_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_processnotes_msfp_alerts() {
        return this._msdyn_processnotes_msfp_alerts;
    };
    /**
     * Sets the msdyn_processnotes_msfp_alerts property value. 
     * @param value Value to set for the msdyn_processnotes_msfp_alerts property.
     */
    public set msdyn_processnotes_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_processnotes_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_processnotes_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_processnotes_msfp_surveyinvites() {
        return this._msdyn_processnotes_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_processnotes_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_processnotes_msfp_surveyinvites property.
     */
    public set msdyn_processnotes_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_processnotes_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_processnotes_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_processnotes_msfp_surveyresponses() {
        return this._msdyn_processnotes_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_processnotes_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_processnotes_msfp_surveyresponses property.
     */
    public set msdyn_processnotes_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_processnotes_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_processnotes_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_processnotes_PhoneCalls() {
        return this._msdyn_processnotes_PhoneCalls;
    };
    /**
     * Sets the msdyn_processnotes_PhoneCalls property value. 
     * @param value Value to set for the msdyn_processnotes_PhoneCalls property.
     */
    public set msdyn_processnotes_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_processnotes_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_processnotes_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_processnotes_PrincipalObjectAttributeAccesses() {
        return this._msdyn_processnotes_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_processnotes_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_processnotes_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_processnotes_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_processnotes_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_processnotes_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_processnotes_ProcessSession() {
        return this._msdyn_processnotes_ProcessSession;
    };
    /**
     * Sets the msdyn_processnotes_ProcessSession property value. 
     * @param value Value to set for the msdyn_processnotes_ProcessSession property.
     */
    public set msdyn_processnotes_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_processnotes_ProcessSession = value;
    };
    /**
     * Gets the msdyn_processnotes_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_processnotes_RecurringAppointmentMasters() {
        return this._msdyn_processnotes_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_processnotes_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_processnotes_RecurringAppointmentMasters property.
     */
    public set msdyn_processnotes_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_processnotes_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_processnotes_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_processnotes_ServiceAppointments() {
        return this._msdyn_processnotes_ServiceAppointments;
    };
    /**
     * Sets the msdyn_processnotes_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_processnotes_ServiceAppointments property.
     */
    public set msdyn_processnotes_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_processnotes_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_processnotes_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_processnotes_SocialActivities() {
        return this._msdyn_processnotes_SocialActivities;
    };
    /**
     * Sets the msdyn_processnotes_SocialActivities property value. 
     * @param value Value to set for the msdyn_processnotes_SocialActivities property.
     */
    public set msdyn_processnotes_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_processnotes_SocialActivities = value;
    };
    /**
     * Gets the msdyn_processnotes_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_processnotes_SyncErrors() {
        return this._msdyn_processnotes_SyncErrors;
    };
    /**
     * Sets the msdyn_processnotes_SyncErrors property value. 
     * @param value Value to set for the msdyn_processnotes_SyncErrors property.
     */
    public set msdyn_processnotes_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_processnotes_SyncErrors = value;
    };
    /**
     * Gets the msdyn_processnotes_Tasks property value. 
     * @returns a task
     */
    public get msdyn_processnotes_Tasks() {
        return this._msdyn_processnotes_Tasks;
    };
    /**
     * Sets the msdyn_processnotes_Tasks property value. 
     * @param value Value to set for the msdyn_processnotes_Tasks property.
     */
    public set msdyn_processnotes_Tasks(value: Task[] | undefined) {
        this._msdyn_processnotes_Tasks = value;
    };
    /**
     * Gets the msdyn_processnotesid property value. 
     * @returns a string
     */
    public get msdyn_processnotesid() {
        return this._msdyn_processnotesid;
    };
    /**
     * Sets the msdyn_processnotesid property value. 
     * @param value Value to set for the msdyn_processnotesid property.
     */
    public set msdyn_processnotesid(value: string | undefined) {
        this._msdyn_processnotesid = value;
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
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_details", this.msdyn_details);
        writer.writeStringValue("msdyn_entity", this.msdyn_entity);
        writer.writeStringValue("msdyn_entityname", this.msdyn_entityname);
        writer.writeStringValue("msdyn_form", this.msdyn_form);
        writer.writeStringValue("msdyn_message", this.msdyn_message);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_processnotes_ActivityPointers", this.msdyn_processnotes_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_processnotes_Annotations", this.msdyn_processnotes_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_processnotes_Appointments", this.msdyn_processnotes_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_processnotes_AsyncOperations", this.msdyn_processnotes_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_processnotes_BulkDeleteFailures", this.msdyn_processnotes_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_processnotes_connections1", this.msdyn_processnotes_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_processnotes_connections2", this.msdyn_processnotes_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_processnotes_DuplicateBaseRecord", this.msdyn_processnotes_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_processnotes_DuplicateMatchingRecord", this.msdyn_processnotes_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_processnotes_Emails", this.msdyn_processnotes_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_processnotes_Faxes", this.msdyn_processnotes_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_processnotes_Letters", this.msdyn_processnotes_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_processnotes_MailboxTrackingFolders", this.msdyn_processnotes_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_processnotes_msdyn_approvals", this.msdyn_processnotes_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_processnotes_msdyn_bookingalerts", this.msdyn_processnotes_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_processnotes_msdyn_ocliveworkitems", this.msdyn_processnotes_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_processnotes_msdyn_ocoutboundmessages", this.msdyn_processnotes_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_processnotes_msdyn_ocsessions", this.msdyn_processnotes_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_processnotes_msfp_alerts", this.msdyn_processnotes_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_processnotes_msfp_surveyinvites", this.msdyn_processnotes_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_processnotes_msfp_surveyresponses", this.msdyn_processnotes_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_processnotes_PhoneCalls", this.msdyn_processnotes_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_processnotes_PrincipalObjectAttributeAccesses", this.msdyn_processnotes_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_processnotes_ProcessSession", this.msdyn_processnotes_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_processnotes_RecurringAppointmentMasters", this.msdyn_processnotes_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_processnotes_ServiceAppointments", this.msdyn_processnotes_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_processnotes_SocialActivities", this.msdyn_processnotes_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_processnotes_SyncErrors", this.msdyn_processnotes_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_processnotes_Tasks", this.msdyn_processnotes_Tasks);
        writer.writeStringValue("msdyn_processnotesid", this.msdyn_processnotesid);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
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
