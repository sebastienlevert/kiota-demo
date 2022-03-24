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
import {createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue} from './createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_purchaseorderFromDiscriminatorValue} from './createMsdyn_purchaseorderFromDiscriminatorValue';
import {createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue} from './createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue';
import {createMsdyn_shipviaFromDiscriminatorValue} from './createMsdyn_shipviaFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_purchaseorder, Msdyn_purchaseorderreceiptproduct, Msdyn_shipvia, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Processstage, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_purchaseorderreceipt extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_purchaseorder_value?: string | undefined;
    private __msdyn_receivedby_value?: string | undefined;
    private __msdyn_shipvia_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __stageid_value?: string | undefined;
    private _bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799?: Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[] | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_datereceived?: Date | undefined;
    private _msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt?: Msdyn_purchaseorderreceiptproduct[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_note?: string | undefined;
    private _msdyn_purchaseorder?: Msdyn_purchaseorder | undefined;
    private _msdyn_purchaseorderreceipt_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_purchaseorderreceipt_Annotations?: Annotation[] | undefined;
    private _msdyn_purchaseorderreceipt_Appointments?: Appointment[] | undefined;
    private _msdyn_purchaseorderreceipt_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_purchaseorderreceipt_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_purchaseorderreceipt_connections1?: Connection[] | undefined;
    private _msdyn_purchaseorderreceipt_connections2?: Connection[] | undefined;
    private _msdyn_purchaseorderreceipt_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_purchaseorderreceipt_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_purchaseorderreceipt_Emails?: Email[] | undefined;
    private _msdyn_purchaseorderreceipt_Faxes?: Fax[] | undefined;
    private _msdyn_purchaseorderreceipt_Letters?: Letter[] | undefined;
    private _msdyn_purchaseorderreceipt_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_purchaseorderreceipt_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_purchaseorderreceipt_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_purchaseorderreceipt_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_purchaseorderreceipt_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_purchaseorderreceipt_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_purchaseorderreceipt_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_purchaseorderreceipt_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_purchaseorderreceipt_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_purchaseorderreceipt_ProcessSession?: Processsession[] | undefined;
    private _msdyn_purchaseorderreceipt_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_purchaseorderreceipt_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_purchaseorderreceipt_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_purchaseorderreceipt_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_purchaseorderreceipt_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_purchaseorderreceipt_Tasks?: Task[] | undefined;
    private _msdyn_purchaseorderreceiptid?: string | undefined;
    private _msdyn_receivedby?: Systemuser | undefined;
    private _msdyn_shipvia?: Msdyn_shipvia | undefined;
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
     * Gets the _msdyn_purchaseorder_value property value. 
     * @returns a string
     */
    public get _msdyn_purchaseorder_value() {
        return this.__msdyn_purchaseorder_value;
    };
    /**
     * Sets the _msdyn_purchaseorder_value property value. 
     * @param value Value to set for the _msdyn_purchaseorder_value property.
     */
    public set _msdyn_purchaseorder_value(value: string | undefined) {
        this.__msdyn_purchaseorder_value = value;
    };
    /**
     * Gets the _msdyn_receivedby_value property value. 
     * @returns a string
     */
    public get _msdyn_receivedby_value() {
        return this.__msdyn_receivedby_value;
    };
    /**
     * Sets the _msdyn_receivedby_value property value. 
     * @param value Value to set for the _msdyn_receivedby_value property.
     */
    public set _msdyn_receivedby_value(value: string | undefined) {
        this.__msdyn_receivedby_value = value;
    };
    /**
     * Gets the _msdyn_shipvia_value property value. 
     * @returns a string
     */
    public get _msdyn_shipvia_value() {
        return this.__msdyn_shipvia_value;
    };
    /**
     * Sets the _msdyn_shipvia_value property value. 
     * @param value Value to set for the _msdyn_shipvia_value property.
     */
    public set _msdyn_shipvia_value(value: string | undefined) {
        this.__msdyn_shipvia_value = value;
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
     * Gets the bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 property value. 
     * @returns a msdyn_bpf_2c5fe86acc8b414b8322ae571000c799
     */
    public get bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799() {
        return this._bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799;
    };
    /**
     * Sets the bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 property value. 
     * @param value Value to set for the bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 property.
     */
    public set bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799(value: Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[] | undefined) {
        this._bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 = value;
    };
    /**
     * Instantiates a new msdyn_purchaseorderreceipt and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_purchaseorder_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._msdyn_purchaseorder_value = n.getStringValue(); },
            "_msdyn_receivedby_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._msdyn_receivedby_value = n.getStringValue(); },
            "_msdyn_shipvia_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._msdyn_shipvia_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt)._stageid_value = n.getStringValue(); },
            "bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 = n.getCollectionOfObjectValues<Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799>(createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_datereceived": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_datereceived = n.getDateValue(); },
            "msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt = n.getCollectionOfObjectValues<Msdyn_purchaseorderreceiptproduct>(createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_name = n.getStringValue(); },
            "msdyn_note": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_note = n.getStringValue(); },
            "msdyn_purchaseorder": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorder = n.getObjectValue<Msdyn_purchaseorder>(createMsdyn_purchaseorderFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_ActivityPointers": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_Annotations": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_Appointments": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_AsyncOperations": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_connections1": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_connections2": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_Emails": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_Faxes": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_Letters": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_msfp_alerts": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_PhoneCalls": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_ProcessSession": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_SocialActivities": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_SyncErrors": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_purchaseorderreceipt_Tasks": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceipt_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_purchaseorderreceiptid": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_purchaseorderreceiptid = n.getStringValue(); },
            "msdyn_receivedby": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_receivedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_shipvia": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).msdyn_shipvia = n.getObjectValue<Msdyn_shipvia>(createMsdyn_shipviaFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).timezoneruleversionnumber = n.getNumberValue(); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_purchaseorderreceipt).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_datereceived property value. 
     * @returns a Date
     */
    public get msdyn_datereceived() {
        return this._msdyn_datereceived;
    };
    /**
     * Sets the msdyn_datereceived property value. 
     * @param value Value to set for the msdyn_datereceived property.
     */
    public set msdyn_datereceived(value: Date | undefined) {
        this._msdyn_datereceived = value;
    };
    /**
     * Gets the msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt property value. 
     * @returns a msdyn_purchaseorderreceiptproduct
     */
    public get msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt() {
        return this._msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt;
    };
    /**
     * Sets the msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt property value. 
     * @param value Value to set for the msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt property.
     */
    public set msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt(value: Msdyn_purchaseorderreceiptproduct[] | undefined) {
        this._msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt = value;
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
     * Gets the msdyn_note property value. 
     * @returns a string
     */
    public get msdyn_note() {
        return this._msdyn_note;
    };
    /**
     * Sets the msdyn_note property value. 
     * @param value Value to set for the msdyn_note property.
     */
    public set msdyn_note(value: string | undefined) {
        this._msdyn_note = value;
    };
    /**
     * Gets the msdyn_purchaseorder property value. 
     * @returns a msdyn_purchaseorder
     */
    public get msdyn_purchaseorder() {
        return this._msdyn_purchaseorder;
    };
    /**
     * Sets the msdyn_purchaseorder property value. 
     * @param value Value to set for the msdyn_purchaseorder property.
     */
    public set msdyn_purchaseorder(value: Msdyn_purchaseorder | undefined) {
        this._msdyn_purchaseorder = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_purchaseorderreceipt_ActivityPointers() {
        return this._msdyn_purchaseorderreceipt_ActivityPointers;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_ActivityPointers property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_ActivityPointers property.
     */
    public set msdyn_purchaseorderreceipt_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_purchaseorderreceipt_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_purchaseorderreceipt_Annotations() {
        return this._msdyn_purchaseorderreceipt_Annotations;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_Annotations property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_Annotations property.
     */
    public set msdyn_purchaseorderreceipt_Annotations(value: Annotation[] | undefined) {
        this._msdyn_purchaseorderreceipt_Annotations = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_purchaseorderreceipt_Appointments() {
        return this._msdyn_purchaseorderreceipt_Appointments;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_Appointments property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_Appointments property.
     */
    public set msdyn_purchaseorderreceipt_Appointments(value: Appointment[] | undefined) {
        this._msdyn_purchaseorderreceipt_Appointments = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_purchaseorderreceipt_AsyncOperations() {
        return this._msdyn_purchaseorderreceipt_AsyncOperations;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_AsyncOperations property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_AsyncOperations property.
     */
    public set msdyn_purchaseorderreceipt_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_purchaseorderreceipt_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_purchaseorderreceipt_BulkDeleteFailures() {
        return this._msdyn_purchaseorderreceipt_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_BulkDeleteFailures property.
     */
    public set msdyn_purchaseorderreceipt_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_purchaseorderreceipt_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_purchaseorderreceipt_connections1() {
        return this._msdyn_purchaseorderreceipt_connections1;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_connections1 property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_connections1 property.
     */
    public set msdyn_purchaseorderreceipt_connections1(value: Connection[] | undefined) {
        this._msdyn_purchaseorderreceipt_connections1 = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_purchaseorderreceipt_connections2() {
        return this._msdyn_purchaseorderreceipt_connections2;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_connections2 property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_connections2 property.
     */
    public set msdyn_purchaseorderreceipt_connections2(value: Connection[] | undefined) {
        this._msdyn_purchaseorderreceipt_connections2 = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_purchaseorderreceipt_DuplicateBaseRecord() {
        return this._msdyn_purchaseorderreceipt_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_DuplicateBaseRecord property.
     */
    public set msdyn_purchaseorderreceipt_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_purchaseorderreceipt_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_purchaseorderreceipt_DuplicateMatchingRecord() {
        return this._msdyn_purchaseorderreceipt_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_DuplicateMatchingRecord property.
     */
    public set msdyn_purchaseorderreceipt_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_purchaseorderreceipt_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_Emails property value. 
     * @returns a email
     */
    public get msdyn_purchaseorderreceipt_Emails() {
        return this._msdyn_purchaseorderreceipt_Emails;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_Emails property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_Emails property.
     */
    public set msdyn_purchaseorderreceipt_Emails(value: Email[] | undefined) {
        this._msdyn_purchaseorderreceipt_Emails = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_purchaseorderreceipt_Faxes() {
        return this._msdyn_purchaseorderreceipt_Faxes;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_Faxes property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_Faxes property.
     */
    public set msdyn_purchaseorderreceipt_Faxes(value: Fax[] | undefined) {
        this._msdyn_purchaseorderreceipt_Faxes = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_Letters property value. 
     * @returns a letter
     */
    public get msdyn_purchaseorderreceipt_Letters() {
        return this._msdyn_purchaseorderreceipt_Letters;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_Letters property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_Letters property.
     */
    public set msdyn_purchaseorderreceipt_Letters(value: Letter[] | undefined) {
        this._msdyn_purchaseorderreceipt_Letters = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_purchaseorderreceipt_MailboxTrackingFolders() {
        return this._msdyn_purchaseorderreceipt_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_MailboxTrackingFolders property.
     */
    public set msdyn_purchaseorderreceipt_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_purchaseorderreceipt_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_purchaseorderreceipt_msdyn_approvals() {
        return this._msdyn_purchaseorderreceipt_msdyn_approvals;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_msdyn_approvals property.
     */
    public set msdyn_purchaseorderreceipt_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_purchaseorderreceipt_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_purchaseorderreceipt_msdyn_bookingalerts() {
        return this._msdyn_purchaseorderreceipt_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_msdyn_bookingalerts property.
     */
    public set msdyn_purchaseorderreceipt_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_purchaseorderreceipt_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_purchaseorderreceipt_msdyn_ocliveworkitems() {
        return this._msdyn_purchaseorderreceipt_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_msdyn_ocliveworkitems property.
     */
    public set msdyn_purchaseorderreceipt_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_purchaseorderreceipt_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages() {
        return this._msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages property.
     */
    public set msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_purchaseorderreceipt_msdyn_ocsessions() {
        return this._msdyn_purchaseorderreceipt_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_msdyn_ocsessions property.
     */
    public set msdyn_purchaseorderreceipt_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_purchaseorderreceipt_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_purchaseorderreceipt_msfp_alerts() {
        return this._msdyn_purchaseorderreceipt_msfp_alerts;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_msfp_alerts property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_msfp_alerts property.
     */
    public set msdyn_purchaseorderreceipt_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_purchaseorderreceipt_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_purchaseorderreceipt_msfp_surveyinvites() {
        return this._msdyn_purchaseorderreceipt_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_msfp_surveyinvites property.
     */
    public set msdyn_purchaseorderreceipt_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_purchaseorderreceipt_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_purchaseorderreceipt_msfp_surveyresponses() {
        return this._msdyn_purchaseorderreceipt_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_msfp_surveyresponses property.
     */
    public set msdyn_purchaseorderreceipt_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_purchaseorderreceipt_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_purchaseorderreceipt_PhoneCalls() {
        return this._msdyn_purchaseorderreceipt_PhoneCalls;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_PhoneCalls property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_PhoneCalls property.
     */
    public set msdyn_purchaseorderreceipt_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_purchaseorderreceipt_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses() {
        return this._msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_purchaseorderreceipt_ProcessSession() {
        return this._msdyn_purchaseorderreceipt_ProcessSession;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_ProcessSession property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_ProcessSession property.
     */
    public set msdyn_purchaseorderreceipt_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_purchaseorderreceipt_ProcessSession = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_purchaseorderreceipt_RecurringAppointmentMasters() {
        return this._msdyn_purchaseorderreceipt_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_RecurringAppointmentMasters property.
     */
    public set msdyn_purchaseorderreceipt_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_purchaseorderreceipt_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_purchaseorderreceipt_ServiceAppointments() {
        return this._msdyn_purchaseorderreceipt_ServiceAppointments;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_ServiceAppointments property.
     */
    public set msdyn_purchaseorderreceipt_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_purchaseorderreceipt_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_purchaseorderreceipt_SharePointDocumentLocations() {
        return this._msdyn_purchaseorderreceipt_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_SharePointDocumentLocations property.
     */
    public set msdyn_purchaseorderreceipt_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_purchaseorderreceipt_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_purchaseorderreceipt_SocialActivities() {
        return this._msdyn_purchaseorderreceipt_SocialActivities;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_SocialActivities property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_SocialActivities property.
     */
    public set msdyn_purchaseorderreceipt_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_purchaseorderreceipt_SocialActivities = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_purchaseorderreceipt_SyncErrors() {
        return this._msdyn_purchaseorderreceipt_SyncErrors;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_SyncErrors property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_SyncErrors property.
     */
    public set msdyn_purchaseorderreceipt_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_purchaseorderreceipt_SyncErrors = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceipt_Tasks property value. 
     * @returns a task
     */
    public get msdyn_purchaseorderreceipt_Tasks() {
        return this._msdyn_purchaseorderreceipt_Tasks;
    };
    /**
     * Sets the msdyn_purchaseorderreceipt_Tasks property value. 
     * @param value Value to set for the msdyn_purchaseorderreceipt_Tasks property.
     */
    public set msdyn_purchaseorderreceipt_Tasks(value: Task[] | undefined) {
        this._msdyn_purchaseorderreceipt_Tasks = value;
    };
    /**
     * Gets the msdyn_purchaseorderreceiptid property value. 
     * @returns a string
     */
    public get msdyn_purchaseorderreceiptid() {
        return this._msdyn_purchaseorderreceiptid;
    };
    /**
     * Sets the msdyn_purchaseorderreceiptid property value. 
     * @param value Value to set for the msdyn_purchaseorderreceiptid property.
     */
    public set msdyn_purchaseorderreceiptid(value: string | undefined) {
        this._msdyn_purchaseorderreceiptid = value;
    };
    /**
     * Gets the msdyn_receivedby property value. 
     * @returns a systemuser
     */
    public get msdyn_receivedby() {
        return this._msdyn_receivedby;
    };
    /**
     * Sets the msdyn_receivedby property value. 
     * @param value Value to set for the msdyn_receivedby property.
     */
    public set msdyn_receivedby(value: Systemuser | undefined) {
        this._msdyn_receivedby = value;
    };
    /**
     * Gets the msdyn_shipvia property value. 
     * @returns a msdyn_shipvia
     */
    public get msdyn_shipvia() {
        return this._msdyn_shipvia;
    };
    /**
     * Sets the msdyn_shipvia property value. 
     * @param value Value to set for the msdyn_shipvia property.
     */
    public set msdyn_shipvia(value: Msdyn_shipvia | undefined) {
        this._msdyn_shipvia = value;
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
        writer.writeStringValue("_msdyn_purchaseorder_value", this._msdyn_purchaseorder_value);
        writer.writeStringValue("_msdyn_receivedby_value", this._msdyn_receivedby_value);
        writer.writeStringValue("_msdyn_shipvia_value", this._msdyn_shipvia_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_stageid_value", this._stageid_value);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799>("bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799", this.bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("msdyn_datereceived", this.msdyn_datereceived);
        writer.writeCollectionOfObjectValues<Msdyn_purchaseorderreceiptproduct>("msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt", this.msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_note", this.msdyn_note);
        writer.writeObjectValue<Msdyn_purchaseorder>("msdyn_purchaseorder", this.msdyn_purchaseorder);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_purchaseorderreceipt_ActivityPointers", this.msdyn_purchaseorderreceipt_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_purchaseorderreceipt_Annotations", this.msdyn_purchaseorderreceipt_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_purchaseorderreceipt_Appointments", this.msdyn_purchaseorderreceipt_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_purchaseorderreceipt_AsyncOperations", this.msdyn_purchaseorderreceipt_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_purchaseorderreceipt_BulkDeleteFailures", this.msdyn_purchaseorderreceipt_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_purchaseorderreceipt_connections1", this.msdyn_purchaseorderreceipt_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_purchaseorderreceipt_connections2", this.msdyn_purchaseorderreceipt_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_purchaseorderreceipt_DuplicateBaseRecord", this.msdyn_purchaseorderreceipt_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_purchaseorderreceipt_DuplicateMatchingRecord", this.msdyn_purchaseorderreceipt_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_purchaseorderreceipt_Emails", this.msdyn_purchaseorderreceipt_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_purchaseorderreceipt_Faxes", this.msdyn_purchaseorderreceipt_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_purchaseorderreceipt_Letters", this.msdyn_purchaseorderreceipt_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_purchaseorderreceipt_MailboxTrackingFolders", this.msdyn_purchaseorderreceipt_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_purchaseorderreceipt_msdyn_approvals", this.msdyn_purchaseorderreceipt_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_purchaseorderreceipt_msdyn_bookingalerts", this.msdyn_purchaseorderreceipt_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_purchaseorderreceipt_msdyn_ocliveworkitems", this.msdyn_purchaseorderreceipt_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages", this.msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_purchaseorderreceipt_msdyn_ocsessions", this.msdyn_purchaseorderreceipt_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_purchaseorderreceipt_msfp_alerts", this.msdyn_purchaseorderreceipt_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_purchaseorderreceipt_msfp_surveyinvites", this.msdyn_purchaseorderreceipt_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_purchaseorderreceipt_msfp_surveyresponses", this.msdyn_purchaseorderreceipt_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_purchaseorderreceipt_PhoneCalls", this.msdyn_purchaseorderreceipt_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses", this.msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_purchaseorderreceipt_ProcessSession", this.msdyn_purchaseorderreceipt_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_purchaseorderreceipt_RecurringAppointmentMasters", this.msdyn_purchaseorderreceipt_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_purchaseorderreceipt_ServiceAppointments", this.msdyn_purchaseorderreceipt_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_purchaseorderreceipt_SharePointDocumentLocations", this.msdyn_purchaseorderreceipt_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_purchaseorderreceipt_SocialActivities", this.msdyn_purchaseorderreceipt_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_purchaseorderreceipt_SyncErrors", this.msdyn_purchaseorderreceipt_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_purchaseorderreceipt_Tasks", this.msdyn_purchaseorderreceipt_Tasks);
        writer.writeStringValue("msdyn_purchaseorderreceiptid", this.msdyn_purchaseorderreceiptid);
        writer.writeObjectValue<Systemuser>("msdyn_receivedby", this.msdyn_receivedby);
        writer.writeObjectValue<Msdyn_shipvia>("msdyn_shipvia", this.msdyn_shipvia);
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
