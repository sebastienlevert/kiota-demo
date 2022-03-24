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
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_agreementinvoicedateFromDiscriminatorValue} from './createMsdyn_agreementinvoicedateFromDiscriminatorValue';
import {createMsdyn_agreementinvoiceproductFromDiscriminatorValue} from './createMsdyn_agreementinvoiceproductFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue} from './createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_agreement, Msdyn_agreementinvoicedate, Msdyn_agreementinvoiceproduct, Msdyn_approval, Msdyn_bookingalert, Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Processstage, Queueitem, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_agreementinvoicesetup extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreement_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __stageid_value?: string | undefined;
    private _bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3?: Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[] | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_agreement?: Msdyn_agreement | undefined;
    private _msdyn_agreementinvoicesetup_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_agreementinvoicesetup_Annotations?: Annotation[] | undefined;
    private _msdyn_agreementinvoicesetup_Appointments?: Appointment[] | undefined;
    private _msdyn_agreementinvoicesetup_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_agreementinvoicesetup_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_agreementinvoicesetup_connections1?: Connection[] | undefined;
    private _msdyn_agreementinvoicesetup_connections2?: Connection[] | undefined;
    private _msdyn_agreementinvoicesetup_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agreementinvoicesetup_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agreementinvoicesetup_Emails?: Email[] | undefined;
    private _msdyn_agreementinvoicesetup_Faxes?: Fax[] | undefined;
    private _msdyn_agreementinvoicesetup_Letters?: Letter[] | undefined;
    private _msdyn_agreementinvoicesetup_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_agreementinvoicesetup_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_agreementinvoicesetup_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_agreementinvoicesetup_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_agreementinvoicesetup_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_agreementinvoicesetup_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_agreementinvoicesetup_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_agreementinvoicesetup_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_agreementinvoicesetup_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_agreementinvoicesetup_ProcessSession?: Processsession[] | undefined;
    private _msdyn_agreementinvoicesetup_QueueItems?: Queueitem[] | undefined;
    private _msdyn_agreementinvoicesetup_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_agreementinvoicesetup_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_agreementinvoicesetup_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_agreementinvoicesetup_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_agreementinvoicesetup_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_agreementinvoicesetup_Tasks?: Task[] | undefined;
    private _msdyn_agreementinvoicesetupid?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup?: Msdyn_agreementinvoicedate[] | undefined;
    private _msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup?: Msdyn_agreementinvoiceproduct[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_postponegenerationuntil?: Date | undefined;
    private _msdyn_processstartedon?: Date | undefined;
    private _msdyn_recurrencesettings?: string | undefined;
    private _msdyn_revision?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _stageid?: Processstage | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _traversedpath?: string | undefined;
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
     * Gets the _msdyn_agreement_value property value. 
     * @returns a string
     */
    public get _msdyn_agreement_value() {
        return this.__msdyn_agreement_value;
    };
    /**
     * Sets the _msdyn_agreement_value property value. 
     * @param value Value to set for the _msdyn_agreement_value property.
     */
    public set _msdyn_agreement_value(value: string | undefined) {
        this.__msdyn_agreement_value = value;
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
     * Gets the _stageid_value property value. 
     * @returns a string
     */
    public get _stageid_value() {
        return this.__stageid_value;
    };
    /**
     * Sets the _stageid_value property value. 
     * @param value Value to set for the _stageid_value property.
     */
    public set _stageid_value(value: string | undefined) {
        this.__stageid_value = value;
    };
    /**
     * Gets the bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 property value. 
     * @returns a msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3
     */
    public get bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3() {
        return this._bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3;
    };
    /**
     * Sets the bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 property value. 
     * @param value Value to set for the bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 property.
     */
    public set bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3(value: Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[] | undefined) {
        this._bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 = value;
    };
    /**
     * Instantiates a new msdyn_agreementinvoicesetup and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreement_value": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup)._msdyn_agreement_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup)._stageid_value = n.getStringValue(); },
            "bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 = n.getCollectionOfObjectValues<Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3>(createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agreement": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreement = n.getObjectValue<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_ActivityPointers": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_Annotations": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_Appointments": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_AsyncOperations": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_connections1": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_connections2": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_Emails": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_Faxes": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_Letters": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_msfp_alerts": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_PhoneCalls": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_ProcessSession": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_QueueItems": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_SocialActivities": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_SyncErrors": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetup_Tasks": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetup_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_agreementinvoicesetupid": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_agreementinvoicesetupid = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_description = n.getStringValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_internalflags = n.getStringValue(); },
            "msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup = n.getCollectionOfObjectValues<Msdyn_agreementinvoicedate>(createMsdyn_agreementinvoicedateFromDiscriminatorValue); },
            "msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup = n.getCollectionOfObjectValues<Msdyn_agreementinvoiceproduct>(createMsdyn_agreementinvoiceproductFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_name = n.getStringValue(); },
            "msdyn_postponegenerationuntil": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_postponegenerationuntil = n.getDateValue(); },
            "msdyn_processstartedon": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_processstartedon = n.getDateValue(); },
            "msdyn_recurrencesettings": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_recurrencesettings = n.getStringValue(); },
            "msdyn_revision": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).msdyn_revision = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).timezoneruleversionnumber = n.getNumberValue(); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_agreementinvoicesetup).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_agreement property value. 
     * @returns a msdyn_agreement
     */
    public get msdyn_agreement() {
        return this._msdyn_agreement;
    };
    /**
     * Sets the msdyn_agreement property value. 
     * @param value Value to set for the msdyn_agreement property.
     */
    public set msdyn_agreement(value: Msdyn_agreement | undefined) {
        this._msdyn_agreement = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_agreementinvoicesetup_ActivityPointers() {
        return this._msdyn_agreementinvoicesetup_ActivityPointers;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_ActivityPointers property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_ActivityPointers property.
     */
    public set msdyn_agreementinvoicesetup_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_agreementinvoicesetup_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_agreementinvoicesetup_Annotations() {
        return this._msdyn_agreementinvoicesetup_Annotations;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_Annotations property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_Annotations property.
     */
    public set msdyn_agreementinvoicesetup_Annotations(value: Annotation[] | undefined) {
        this._msdyn_agreementinvoicesetup_Annotations = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_agreementinvoicesetup_Appointments() {
        return this._msdyn_agreementinvoicesetup_Appointments;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_Appointments property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_Appointments property.
     */
    public set msdyn_agreementinvoicesetup_Appointments(value: Appointment[] | undefined) {
        this._msdyn_agreementinvoicesetup_Appointments = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_agreementinvoicesetup_AsyncOperations() {
        return this._msdyn_agreementinvoicesetup_AsyncOperations;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_AsyncOperations property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_AsyncOperations property.
     */
    public set msdyn_agreementinvoicesetup_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_agreementinvoicesetup_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_agreementinvoicesetup_BulkDeleteFailures() {
        return this._msdyn_agreementinvoicesetup_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_BulkDeleteFailures property.
     */
    public set msdyn_agreementinvoicesetup_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_agreementinvoicesetup_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_agreementinvoicesetup_connections1() {
        return this._msdyn_agreementinvoicesetup_connections1;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_connections1 property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_connections1 property.
     */
    public set msdyn_agreementinvoicesetup_connections1(value: Connection[] | undefined) {
        this._msdyn_agreementinvoicesetup_connections1 = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_agreementinvoicesetup_connections2() {
        return this._msdyn_agreementinvoicesetup_connections2;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_connections2 property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_connections2 property.
     */
    public set msdyn_agreementinvoicesetup_connections2(value: Connection[] | undefined) {
        this._msdyn_agreementinvoicesetup_connections2 = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agreementinvoicesetup_DuplicateBaseRecord() {
        return this._msdyn_agreementinvoicesetup_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_DuplicateBaseRecord property.
     */
    public set msdyn_agreementinvoicesetup_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agreementinvoicesetup_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agreementinvoicesetup_DuplicateMatchingRecord() {
        return this._msdyn_agreementinvoicesetup_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_DuplicateMatchingRecord property.
     */
    public set msdyn_agreementinvoicesetup_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agreementinvoicesetup_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_Emails property value. 
     * @returns a email
     */
    public get msdyn_agreementinvoicesetup_Emails() {
        return this._msdyn_agreementinvoicesetup_Emails;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_Emails property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_Emails property.
     */
    public set msdyn_agreementinvoicesetup_Emails(value: Email[] | undefined) {
        this._msdyn_agreementinvoicesetup_Emails = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_agreementinvoicesetup_Faxes() {
        return this._msdyn_agreementinvoicesetup_Faxes;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_Faxes property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_Faxes property.
     */
    public set msdyn_agreementinvoicesetup_Faxes(value: Fax[] | undefined) {
        this._msdyn_agreementinvoicesetup_Faxes = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_Letters property value. 
     * @returns a letter
     */
    public get msdyn_agreementinvoicesetup_Letters() {
        return this._msdyn_agreementinvoicesetup_Letters;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_Letters property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_Letters property.
     */
    public set msdyn_agreementinvoicesetup_Letters(value: Letter[] | undefined) {
        this._msdyn_agreementinvoicesetup_Letters = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_agreementinvoicesetup_MailboxTrackingFolders() {
        return this._msdyn_agreementinvoicesetup_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_MailboxTrackingFolders property.
     */
    public set msdyn_agreementinvoicesetup_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_agreementinvoicesetup_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_agreementinvoicesetup_msdyn_approvals() {
        return this._msdyn_agreementinvoicesetup_msdyn_approvals;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_msdyn_approvals property.
     */
    public set msdyn_agreementinvoicesetup_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_agreementinvoicesetup_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_agreementinvoicesetup_msdyn_bookingalerts() {
        return this._msdyn_agreementinvoicesetup_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_msdyn_bookingalerts property.
     */
    public set msdyn_agreementinvoicesetup_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_agreementinvoicesetup_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_agreementinvoicesetup_msdyn_ocliveworkitems() {
        return this._msdyn_agreementinvoicesetup_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_msdyn_ocliveworkitems property.
     */
    public set msdyn_agreementinvoicesetup_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_agreementinvoicesetup_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages() {
        return this._msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages property.
     */
    public set msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_agreementinvoicesetup_msdyn_ocsessions() {
        return this._msdyn_agreementinvoicesetup_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_msdyn_ocsessions property.
     */
    public set msdyn_agreementinvoicesetup_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_agreementinvoicesetup_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_agreementinvoicesetup_msfp_alerts() {
        return this._msdyn_agreementinvoicesetup_msfp_alerts;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_msfp_alerts property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_msfp_alerts property.
     */
    public set msdyn_agreementinvoicesetup_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_agreementinvoicesetup_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_agreementinvoicesetup_msfp_surveyinvites() {
        return this._msdyn_agreementinvoicesetup_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_msfp_surveyinvites property.
     */
    public set msdyn_agreementinvoicesetup_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_agreementinvoicesetup_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_agreementinvoicesetup_msfp_surveyresponses() {
        return this._msdyn_agreementinvoicesetup_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_msfp_surveyresponses property.
     */
    public set msdyn_agreementinvoicesetup_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_agreementinvoicesetup_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_agreementinvoicesetup_PhoneCalls() {
        return this._msdyn_agreementinvoicesetup_PhoneCalls;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_PhoneCalls property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_PhoneCalls property.
     */
    public set msdyn_agreementinvoicesetup_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_agreementinvoicesetup_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses() {
        return this._msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_agreementinvoicesetup_ProcessSession() {
        return this._msdyn_agreementinvoicesetup_ProcessSession;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_ProcessSession property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_ProcessSession property.
     */
    public set msdyn_agreementinvoicesetup_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_agreementinvoicesetup_ProcessSession = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_agreementinvoicesetup_QueueItems() {
        return this._msdyn_agreementinvoicesetup_QueueItems;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_QueueItems property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_QueueItems property.
     */
    public set msdyn_agreementinvoicesetup_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_agreementinvoicesetup_QueueItems = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_agreementinvoicesetup_RecurringAppointmentMasters() {
        return this._msdyn_agreementinvoicesetup_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_RecurringAppointmentMasters property.
     */
    public set msdyn_agreementinvoicesetup_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_agreementinvoicesetup_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_agreementinvoicesetup_ServiceAppointments() {
        return this._msdyn_agreementinvoicesetup_ServiceAppointments;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_ServiceAppointments property.
     */
    public set msdyn_agreementinvoicesetup_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_agreementinvoicesetup_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_agreementinvoicesetup_SharePointDocumentLocations() {
        return this._msdyn_agreementinvoicesetup_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_SharePointDocumentLocations property.
     */
    public set msdyn_agreementinvoicesetup_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_agreementinvoicesetup_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_agreementinvoicesetup_SocialActivities() {
        return this._msdyn_agreementinvoicesetup_SocialActivities;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_SocialActivities property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_SocialActivities property.
     */
    public set msdyn_agreementinvoicesetup_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_agreementinvoicesetup_SocialActivities = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_agreementinvoicesetup_SyncErrors() {
        return this._msdyn_agreementinvoicesetup_SyncErrors;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_SyncErrors property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_SyncErrors property.
     */
    public set msdyn_agreementinvoicesetup_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_agreementinvoicesetup_SyncErrors = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetup_Tasks property value. 
     * @returns a task
     */
    public get msdyn_agreementinvoicesetup_Tasks() {
        return this._msdyn_agreementinvoicesetup_Tasks;
    };
    /**
     * Sets the msdyn_agreementinvoicesetup_Tasks property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetup_Tasks property.
     */
    public set msdyn_agreementinvoicesetup_Tasks(value: Task[] | undefined) {
        this._msdyn_agreementinvoicesetup_Tasks = value;
    };
    /**
     * Gets the msdyn_agreementinvoicesetupid property value. 
     * @returns a string
     */
    public get msdyn_agreementinvoicesetupid() {
        return this._msdyn_agreementinvoicesetupid;
    };
    /**
     * Sets the msdyn_agreementinvoicesetupid property value. 
     * @param value Value to set for the msdyn_agreementinvoicesetupid property.
     */
    public set msdyn_agreementinvoicesetupid(value: string | undefined) {
        this._msdyn_agreementinvoicesetupid = value;
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
     * Gets the msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup property value. 
     * @returns a msdyn_agreementinvoicedate
     */
    public get msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup() {
        return this._msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup;
    };
    /**
     * Sets the msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup property value. 
     * @param value Value to set for the msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup property.
     */
    public set msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup(value: Msdyn_agreementinvoicedate[] | undefined) {
        this._msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup = value;
    };
    /**
     * Gets the msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup property value. 
     * @returns a msdyn_agreementinvoiceproduct
     */
    public get msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup() {
        return this._msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup;
    };
    /**
     * Sets the msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup property value. 
     * @param value Value to set for the msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup property.
     */
    public set msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup(value: Msdyn_agreementinvoiceproduct[] | undefined) {
        this._msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup = value;
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
     * Gets the msdyn_postponegenerationuntil property value. 
     * @returns a Date
     */
    public get msdyn_postponegenerationuntil() {
        return this._msdyn_postponegenerationuntil;
    };
    /**
     * Sets the msdyn_postponegenerationuntil property value. 
     * @param value Value to set for the msdyn_postponegenerationuntil property.
     */
    public set msdyn_postponegenerationuntil(value: Date | undefined) {
        this._msdyn_postponegenerationuntil = value;
    };
    /**
     * Gets the msdyn_processstartedon property value. 
     * @returns a Date
     */
    public get msdyn_processstartedon() {
        return this._msdyn_processstartedon;
    };
    /**
     * Sets the msdyn_processstartedon property value. 
     * @param value Value to set for the msdyn_processstartedon property.
     */
    public set msdyn_processstartedon(value: Date | undefined) {
        this._msdyn_processstartedon = value;
    };
    /**
     * Gets the msdyn_recurrencesettings property value. 
     * @returns a string
     */
    public get msdyn_recurrencesettings() {
        return this._msdyn_recurrencesettings;
    };
    /**
     * Sets the msdyn_recurrencesettings property value. 
     * @param value Value to set for the msdyn_recurrencesettings property.
     */
    public set msdyn_recurrencesettings(value: string | undefined) {
        this._msdyn_recurrencesettings = value;
    };
    /**
     * Gets the msdyn_revision property value. 
     * @returns a integer
     */
    public get msdyn_revision() {
        return this._msdyn_revision;
    };
    /**
     * Sets the msdyn_revision property value. 
     * @param value Value to set for the msdyn_revision property.
     */
    public set msdyn_revision(value: number | undefined) {
        this._msdyn_revision = value;
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
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
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
        writer.writeStringValue("_msdyn_agreement_value", this._msdyn_agreement_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_stageid_value", this._stageid_value);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3>("bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3", this.bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_agreement>("msdyn_agreement", this.msdyn_agreement);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_agreementinvoicesetup_ActivityPointers", this.msdyn_agreementinvoicesetup_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_agreementinvoicesetup_Annotations", this.msdyn_agreementinvoicesetup_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_agreementinvoicesetup_Appointments", this.msdyn_agreementinvoicesetup_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_agreementinvoicesetup_AsyncOperations", this.msdyn_agreementinvoicesetup_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_agreementinvoicesetup_BulkDeleteFailures", this.msdyn_agreementinvoicesetup_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_agreementinvoicesetup_connections1", this.msdyn_agreementinvoicesetup_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_agreementinvoicesetup_connections2", this.msdyn_agreementinvoicesetup_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agreementinvoicesetup_DuplicateBaseRecord", this.msdyn_agreementinvoicesetup_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agreementinvoicesetup_DuplicateMatchingRecord", this.msdyn_agreementinvoicesetup_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_agreementinvoicesetup_Emails", this.msdyn_agreementinvoicesetup_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_agreementinvoicesetup_Faxes", this.msdyn_agreementinvoicesetup_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_agreementinvoicesetup_Letters", this.msdyn_agreementinvoicesetup_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_agreementinvoicesetup_MailboxTrackingFolders", this.msdyn_agreementinvoicesetup_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_agreementinvoicesetup_msdyn_approvals", this.msdyn_agreementinvoicesetup_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_agreementinvoicesetup_msdyn_bookingalerts", this.msdyn_agreementinvoicesetup_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_agreementinvoicesetup_msdyn_ocliveworkitems", this.msdyn_agreementinvoicesetup_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages", this.msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_agreementinvoicesetup_msdyn_ocsessions", this.msdyn_agreementinvoicesetup_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_agreementinvoicesetup_msfp_alerts", this.msdyn_agreementinvoicesetup_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_agreementinvoicesetup_msfp_surveyinvites", this.msdyn_agreementinvoicesetup_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_agreementinvoicesetup_msfp_surveyresponses", this.msdyn_agreementinvoicesetup_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_agreementinvoicesetup_PhoneCalls", this.msdyn_agreementinvoicesetup_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses", this.msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_agreementinvoicesetup_ProcessSession", this.msdyn_agreementinvoicesetup_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_agreementinvoicesetup_QueueItems", this.msdyn_agreementinvoicesetup_QueueItems);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_agreementinvoicesetup_RecurringAppointmentMasters", this.msdyn_agreementinvoicesetup_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_agreementinvoicesetup_ServiceAppointments", this.msdyn_agreementinvoicesetup_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_agreementinvoicesetup_SharePointDocumentLocations", this.msdyn_agreementinvoicesetup_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_agreementinvoicesetup_SocialActivities", this.msdyn_agreementinvoicesetup_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_agreementinvoicesetup_SyncErrors", this.msdyn_agreementinvoicesetup_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_agreementinvoicesetup_Tasks", this.msdyn_agreementinvoicesetup_Tasks);
        writer.writeStringValue("msdyn_agreementinvoicesetupid", this.msdyn_agreementinvoicesetupid);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeCollectionOfObjectValues<Msdyn_agreementinvoicedate>("msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup", this.msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup);
        writer.writeCollectionOfObjectValues<Msdyn_agreementinvoiceproduct>("msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup", this.msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeDateValue("msdyn_postponegenerationuntil", this.msdyn_postponegenerationuntil);
        writer.writeDateValue("msdyn_processstartedon", this.msdyn_processstartedon);
        writer.writeStringValue("msdyn_recurrencesettings", this.msdyn_recurrencesettings);
        writer.writeNumberValue("msdyn_revision", this.msdyn_revision);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Processstage>("stageid", this.stageid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a processstage
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: Processstage | undefined) {
        this._stageid = value;
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
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
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
