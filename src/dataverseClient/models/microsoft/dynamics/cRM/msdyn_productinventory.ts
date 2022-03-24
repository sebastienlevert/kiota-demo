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
import {createMsdyn_warehouseFromDiscriminatorValue} from './createMsdyn_warehouseFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_warehouse, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Organization, Phonecall, Principalobjectattributeaccess, Processsession, Product, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_productinventory extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_product_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __msdyn_warehouse_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_bin?: string | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_product?: Product | undefined;
    private _msdyn_productinventory_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_productinventory_Annotations?: Annotation[] | undefined;
    private _msdyn_productinventory_Appointments?: Appointment[] | undefined;
    private _msdyn_productinventory_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_productinventory_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_productinventory_connections1?: Connection[] | undefined;
    private _msdyn_productinventory_connections2?: Connection[] | undefined;
    private _msdyn_productinventory_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_productinventory_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_productinventory_Emails?: Email[] | undefined;
    private _msdyn_productinventory_Faxes?: Fax[] | undefined;
    private _msdyn_productinventory_Letters?: Letter[] | undefined;
    private _msdyn_productinventory_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_productinventory_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_productinventory_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_productinventory_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_productinventory_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_productinventory_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_productinventory_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_productinventory_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_productinventory_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_productinventory_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_productinventory_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_productinventory_ProcessSession?: Processsession[] | undefined;
    private _msdyn_productinventory_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_productinventory_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_productinventory_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_productinventory_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_productinventory_Tasks?: Task[] | undefined;
    private _msdyn_productinventoryid?: string | undefined;
    private _msdyn_qtyallocated?: number | undefined;
    private _msdyn_qtyavailable?: number | undefined;
    private _msdyn_qtyonhand?: number | undefined;
    private _msdyn_qtyonorder?: number | undefined;
    private _msdyn_reorderpoint?: number | undefined;
    private _msdyn_row?: string | undefined;
    private _msdyn_unit?: Uom | undefined;
    private _msdyn_warehouse?: Msdyn_warehouse | undefined;
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
     * Gets the _msdyn_product_value property value. 
     * @returns a string
     */
    public get _msdyn_product_value() {
        return this.__msdyn_product_value;
    };
    /**
     * Sets the _msdyn_product_value property value. 
     * @param value Value to set for the _msdyn_product_value property.
     */
    public set _msdyn_product_value(value: string | undefined) {
        this.__msdyn_product_value = value;
    };
    /**
     * Gets the _msdyn_unit_value property value. 
     * @returns a string
     */
    public get _msdyn_unit_value() {
        return this.__msdyn_unit_value;
    };
    /**
     * Sets the _msdyn_unit_value property value. 
     * @param value Value to set for the _msdyn_unit_value property.
     */
    public set _msdyn_unit_value(value: string | undefined) {
        this.__msdyn_unit_value = value;
    };
    /**
     * Gets the _msdyn_warehouse_value property value. 
     * @returns a string
     */
    public get _msdyn_warehouse_value() {
        return this.__msdyn_warehouse_value;
    };
    /**
     * Sets the _msdyn_warehouse_value property value. 
     * @param value Value to set for the _msdyn_warehouse_value property.
     */
    public set _msdyn_warehouse_value(value: string | undefined) {
        this.__msdyn_warehouse_value = value;
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
     * Instantiates a new msdyn_productinventory and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_productinventory)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_productinventory)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_productinventory)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_productinventory)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_product_value": (o, n) => { (o as unknown as Msdyn_productinventory)._msdyn_product_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_productinventory)._msdyn_unit_value = n.getStringValue(); },
            "_msdyn_warehouse_value": (o, n) => { (o as unknown as Msdyn_productinventory)._msdyn_warehouse_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_productinventory)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_productinventory).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_productinventory).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_productinventory).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_productinventory).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_productinventory).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_productinventory).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_productinventory).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_bin": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_bin = n.getStringValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_internalflags = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_name = n.getStringValue(); },
            "msdyn_product": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_productinventory_ActivityPointers": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_productinventory_Annotations": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_productinventory_Appointments": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_productinventory_AsyncOperations": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_productinventory_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_productinventory_connections1": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_productinventory_connections2": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_productinventory_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_productinventory_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_productinventory_Emails": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_productinventory_Faxes": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_productinventory_Letters": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_productinventory_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_productinventory_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_productinventory_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_productinventory_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_productinventory_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_productinventory_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_productinventory_msfp_alerts": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_productinventory_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_productinventory_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_productinventory_PhoneCalls": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_productinventory_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_productinventory_ProcessSession": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_productinventory_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_productinventory_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_productinventory_SocialActivities": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_productinventory_SyncErrors": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_productinventory_Tasks": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventory_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_productinventoryid": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_productinventoryid = n.getStringValue(); },
            "msdyn_qtyallocated": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_qtyallocated = n.getNumberValue(); },
            "msdyn_qtyavailable": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_qtyavailable = n.getNumberValue(); },
            "msdyn_qtyonhand": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_qtyonhand = n.getNumberValue(); },
            "msdyn_qtyonorder": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_qtyonorder = n.getNumberValue(); },
            "msdyn_reorderpoint": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_reorderpoint = n.getNumberValue(); },
            "msdyn_row": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_row = n.getStringValue(); },
            "msdyn_unit": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_warehouse": (o, n) => { (o as unknown as Msdyn_productinventory).msdyn_warehouse = n.getObjectValue<Msdyn_warehouse>(createMsdyn_warehouseFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_productinventory).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_productinventory).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_productinventory).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_productinventory).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_productinventory).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_productinventory).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_productinventory).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_bin property value. 
     * @returns a string
     */
    public get msdyn_bin() {
        return this._msdyn_bin;
    };
    /**
     * Sets the msdyn_bin property value. 
     * @param value Value to set for the msdyn_bin property.
     */
    public set msdyn_bin(value: string | undefined) {
        this._msdyn_bin = value;
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
     * Gets the msdyn_product property value. 
     * @returns a product
     */
    public get msdyn_product() {
        return this._msdyn_product;
    };
    /**
     * Sets the msdyn_product property value. 
     * @param value Value to set for the msdyn_product property.
     */
    public set msdyn_product(value: Product | undefined) {
        this._msdyn_product = value;
    };
    /**
     * Gets the msdyn_productinventory_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_productinventory_ActivityPointers() {
        return this._msdyn_productinventory_ActivityPointers;
    };
    /**
     * Sets the msdyn_productinventory_ActivityPointers property value. 
     * @param value Value to set for the msdyn_productinventory_ActivityPointers property.
     */
    public set msdyn_productinventory_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_productinventory_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_productinventory_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_productinventory_Annotations() {
        return this._msdyn_productinventory_Annotations;
    };
    /**
     * Sets the msdyn_productinventory_Annotations property value. 
     * @param value Value to set for the msdyn_productinventory_Annotations property.
     */
    public set msdyn_productinventory_Annotations(value: Annotation[] | undefined) {
        this._msdyn_productinventory_Annotations = value;
    };
    /**
     * Gets the msdyn_productinventory_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_productinventory_Appointments() {
        return this._msdyn_productinventory_Appointments;
    };
    /**
     * Sets the msdyn_productinventory_Appointments property value. 
     * @param value Value to set for the msdyn_productinventory_Appointments property.
     */
    public set msdyn_productinventory_Appointments(value: Appointment[] | undefined) {
        this._msdyn_productinventory_Appointments = value;
    };
    /**
     * Gets the msdyn_productinventory_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_productinventory_AsyncOperations() {
        return this._msdyn_productinventory_AsyncOperations;
    };
    /**
     * Sets the msdyn_productinventory_AsyncOperations property value. 
     * @param value Value to set for the msdyn_productinventory_AsyncOperations property.
     */
    public set msdyn_productinventory_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_productinventory_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_productinventory_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_productinventory_BulkDeleteFailures() {
        return this._msdyn_productinventory_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_productinventory_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_productinventory_BulkDeleteFailures property.
     */
    public set msdyn_productinventory_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_productinventory_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_productinventory_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_productinventory_connections1() {
        return this._msdyn_productinventory_connections1;
    };
    /**
     * Sets the msdyn_productinventory_connections1 property value. 
     * @param value Value to set for the msdyn_productinventory_connections1 property.
     */
    public set msdyn_productinventory_connections1(value: Connection[] | undefined) {
        this._msdyn_productinventory_connections1 = value;
    };
    /**
     * Gets the msdyn_productinventory_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_productinventory_connections2() {
        return this._msdyn_productinventory_connections2;
    };
    /**
     * Sets the msdyn_productinventory_connections2 property value. 
     * @param value Value to set for the msdyn_productinventory_connections2 property.
     */
    public set msdyn_productinventory_connections2(value: Connection[] | undefined) {
        this._msdyn_productinventory_connections2 = value;
    };
    /**
     * Gets the msdyn_productinventory_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_productinventory_DuplicateBaseRecord() {
        return this._msdyn_productinventory_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_productinventory_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_productinventory_DuplicateBaseRecord property.
     */
    public set msdyn_productinventory_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_productinventory_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_productinventory_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_productinventory_DuplicateMatchingRecord() {
        return this._msdyn_productinventory_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_productinventory_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_productinventory_DuplicateMatchingRecord property.
     */
    public set msdyn_productinventory_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_productinventory_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_productinventory_Emails property value. 
     * @returns a email
     */
    public get msdyn_productinventory_Emails() {
        return this._msdyn_productinventory_Emails;
    };
    /**
     * Sets the msdyn_productinventory_Emails property value. 
     * @param value Value to set for the msdyn_productinventory_Emails property.
     */
    public set msdyn_productinventory_Emails(value: Email[] | undefined) {
        this._msdyn_productinventory_Emails = value;
    };
    /**
     * Gets the msdyn_productinventory_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_productinventory_Faxes() {
        return this._msdyn_productinventory_Faxes;
    };
    /**
     * Sets the msdyn_productinventory_Faxes property value. 
     * @param value Value to set for the msdyn_productinventory_Faxes property.
     */
    public set msdyn_productinventory_Faxes(value: Fax[] | undefined) {
        this._msdyn_productinventory_Faxes = value;
    };
    /**
     * Gets the msdyn_productinventory_Letters property value. 
     * @returns a letter
     */
    public get msdyn_productinventory_Letters() {
        return this._msdyn_productinventory_Letters;
    };
    /**
     * Sets the msdyn_productinventory_Letters property value. 
     * @param value Value to set for the msdyn_productinventory_Letters property.
     */
    public set msdyn_productinventory_Letters(value: Letter[] | undefined) {
        this._msdyn_productinventory_Letters = value;
    };
    /**
     * Gets the msdyn_productinventory_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_productinventory_MailboxTrackingFolders() {
        return this._msdyn_productinventory_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_productinventory_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_productinventory_MailboxTrackingFolders property.
     */
    public set msdyn_productinventory_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_productinventory_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_productinventory_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_productinventory_msdyn_approvals() {
        return this._msdyn_productinventory_msdyn_approvals;
    };
    /**
     * Sets the msdyn_productinventory_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_productinventory_msdyn_approvals property.
     */
    public set msdyn_productinventory_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_productinventory_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_productinventory_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_productinventory_msdyn_bookingalerts() {
        return this._msdyn_productinventory_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_productinventory_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_productinventory_msdyn_bookingalerts property.
     */
    public set msdyn_productinventory_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_productinventory_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_productinventory_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_productinventory_msdyn_ocliveworkitems() {
        return this._msdyn_productinventory_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_productinventory_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_productinventory_msdyn_ocliveworkitems property.
     */
    public set msdyn_productinventory_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_productinventory_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_productinventory_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_productinventory_msdyn_ocoutboundmessages() {
        return this._msdyn_productinventory_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_productinventory_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_productinventory_msdyn_ocoutboundmessages property.
     */
    public set msdyn_productinventory_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_productinventory_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_productinventory_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_productinventory_msdyn_ocsessions() {
        return this._msdyn_productinventory_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_productinventory_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_productinventory_msdyn_ocsessions property.
     */
    public set msdyn_productinventory_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_productinventory_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_productinventory_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_productinventory_msfp_alerts() {
        return this._msdyn_productinventory_msfp_alerts;
    };
    /**
     * Sets the msdyn_productinventory_msfp_alerts property value. 
     * @param value Value to set for the msdyn_productinventory_msfp_alerts property.
     */
    public set msdyn_productinventory_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_productinventory_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_productinventory_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_productinventory_msfp_surveyinvites() {
        return this._msdyn_productinventory_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_productinventory_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_productinventory_msfp_surveyinvites property.
     */
    public set msdyn_productinventory_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_productinventory_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_productinventory_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_productinventory_msfp_surveyresponses() {
        return this._msdyn_productinventory_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_productinventory_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_productinventory_msfp_surveyresponses property.
     */
    public set msdyn_productinventory_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_productinventory_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_productinventory_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_productinventory_PhoneCalls() {
        return this._msdyn_productinventory_PhoneCalls;
    };
    /**
     * Sets the msdyn_productinventory_PhoneCalls property value. 
     * @param value Value to set for the msdyn_productinventory_PhoneCalls property.
     */
    public set msdyn_productinventory_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_productinventory_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_productinventory_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_productinventory_PrincipalObjectAttributeAccesses() {
        return this._msdyn_productinventory_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_productinventory_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_productinventory_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_productinventory_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_productinventory_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_productinventory_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_productinventory_ProcessSession() {
        return this._msdyn_productinventory_ProcessSession;
    };
    /**
     * Sets the msdyn_productinventory_ProcessSession property value. 
     * @param value Value to set for the msdyn_productinventory_ProcessSession property.
     */
    public set msdyn_productinventory_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_productinventory_ProcessSession = value;
    };
    /**
     * Gets the msdyn_productinventory_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_productinventory_RecurringAppointmentMasters() {
        return this._msdyn_productinventory_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_productinventory_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_productinventory_RecurringAppointmentMasters property.
     */
    public set msdyn_productinventory_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_productinventory_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_productinventory_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_productinventory_ServiceAppointments() {
        return this._msdyn_productinventory_ServiceAppointments;
    };
    /**
     * Sets the msdyn_productinventory_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_productinventory_ServiceAppointments property.
     */
    public set msdyn_productinventory_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_productinventory_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_productinventory_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_productinventory_SocialActivities() {
        return this._msdyn_productinventory_SocialActivities;
    };
    /**
     * Sets the msdyn_productinventory_SocialActivities property value. 
     * @param value Value to set for the msdyn_productinventory_SocialActivities property.
     */
    public set msdyn_productinventory_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_productinventory_SocialActivities = value;
    };
    /**
     * Gets the msdyn_productinventory_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_productinventory_SyncErrors() {
        return this._msdyn_productinventory_SyncErrors;
    };
    /**
     * Sets the msdyn_productinventory_SyncErrors property value. 
     * @param value Value to set for the msdyn_productinventory_SyncErrors property.
     */
    public set msdyn_productinventory_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_productinventory_SyncErrors = value;
    };
    /**
     * Gets the msdyn_productinventory_Tasks property value. 
     * @returns a task
     */
    public get msdyn_productinventory_Tasks() {
        return this._msdyn_productinventory_Tasks;
    };
    /**
     * Sets the msdyn_productinventory_Tasks property value. 
     * @param value Value to set for the msdyn_productinventory_Tasks property.
     */
    public set msdyn_productinventory_Tasks(value: Task[] | undefined) {
        this._msdyn_productinventory_Tasks = value;
    };
    /**
     * Gets the msdyn_productinventoryid property value. 
     * @returns a string
     */
    public get msdyn_productinventoryid() {
        return this._msdyn_productinventoryid;
    };
    /**
     * Sets the msdyn_productinventoryid property value. 
     * @param value Value to set for the msdyn_productinventoryid property.
     */
    public set msdyn_productinventoryid(value: string | undefined) {
        this._msdyn_productinventoryid = value;
    };
    /**
     * Gets the msdyn_qtyallocated property value. 
     * @returns a double
     */
    public get msdyn_qtyallocated() {
        return this._msdyn_qtyallocated;
    };
    /**
     * Sets the msdyn_qtyallocated property value. 
     * @param value Value to set for the msdyn_qtyallocated property.
     */
    public set msdyn_qtyallocated(value: number | undefined) {
        this._msdyn_qtyallocated = value;
    };
    /**
     * Gets the msdyn_qtyavailable property value. 
     * @returns a double
     */
    public get msdyn_qtyavailable() {
        return this._msdyn_qtyavailable;
    };
    /**
     * Sets the msdyn_qtyavailable property value. 
     * @param value Value to set for the msdyn_qtyavailable property.
     */
    public set msdyn_qtyavailable(value: number | undefined) {
        this._msdyn_qtyavailable = value;
    };
    /**
     * Gets the msdyn_qtyonhand property value. 
     * @returns a double
     */
    public get msdyn_qtyonhand() {
        return this._msdyn_qtyonhand;
    };
    /**
     * Sets the msdyn_qtyonhand property value. 
     * @param value Value to set for the msdyn_qtyonhand property.
     */
    public set msdyn_qtyonhand(value: number | undefined) {
        this._msdyn_qtyonhand = value;
    };
    /**
     * Gets the msdyn_qtyonorder property value. 
     * @returns a double
     */
    public get msdyn_qtyonorder() {
        return this._msdyn_qtyonorder;
    };
    /**
     * Sets the msdyn_qtyonorder property value. 
     * @param value Value to set for the msdyn_qtyonorder property.
     */
    public set msdyn_qtyonorder(value: number | undefined) {
        this._msdyn_qtyonorder = value;
    };
    /**
     * Gets the msdyn_reorderpoint property value. 
     * @returns a double
     */
    public get msdyn_reorderpoint() {
        return this._msdyn_reorderpoint;
    };
    /**
     * Sets the msdyn_reorderpoint property value. 
     * @param value Value to set for the msdyn_reorderpoint property.
     */
    public set msdyn_reorderpoint(value: number | undefined) {
        this._msdyn_reorderpoint = value;
    };
    /**
     * Gets the msdyn_row property value. 
     * @returns a string
     */
    public get msdyn_row() {
        return this._msdyn_row;
    };
    /**
     * Sets the msdyn_row property value. 
     * @param value Value to set for the msdyn_row property.
     */
    public set msdyn_row(value: string | undefined) {
        this._msdyn_row = value;
    };
    /**
     * Gets the msdyn_unit property value. 
     * @returns a uom
     */
    public get msdyn_unit() {
        return this._msdyn_unit;
    };
    /**
     * Sets the msdyn_unit property value. 
     * @param value Value to set for the msdyn_unit property.
     */
    public set msdyn_unit(value: Uom | undefined) {
        this._msdyn_unit = value;
    };
    /**
     * Gets the msdyn_warehouse property value. 
     * @returns a msdyn_warehouse
     */
    public get msdyn_warehouse() {
        return this._msdyn_warehouse;
    };
    /**
     * Sets the msdyn_warehouse property value. 
     * @param value Value to set for the msdyn_warehouse property.
     */
    public set msdyn_warehouse(value: Msdyn_warehouse | undefined) {
        this._msdyn_warehouse = value;
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
        writer.writeStringValue("_msdyn_product_value", this._msdyn_product_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_msdyn_warehouse_value", this._msdyn_warehouse_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_bin", this.msdyn_bin);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Product>("msdyn_product", this.msdyn_product);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_productinventory_ActivityPointers", this.msdyn_productinventory_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_productinventory_Annotations", this.msdyn_productinventory_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_productinventory_Appointments", this.msdyn_productinventory_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_productinventory_AsyncOperations", this.msdyn_productinventory_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_productinventory_BulkDeleteFailures", this.msdyn_productinventory_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_productinventory_connections1", this.msdyn_productinventory_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_productinventory_connections2", this.msdyn_productinventory_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_productinventory_DuplicateBaseRecord", this.msdyn_productinventory_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_productinventory_DuplicateMatchingRecord", this.msdyn_productinventory_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_productinventory_Emails", this.msdyn_productinventory_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_productinventory_Faxes", this.msdyn_productinventory_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_productinventory_Letters", this.msdyn_productinventory_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_productinventory_MailboxTrackingFolders", this.msdyn_productinventory_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_productinventory_msdyn_approvals", this.msdyn_productinventory_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_productinventory_msdyn_bookingalerts", this.msdyn_productinventory_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_productinventory_msdyn_ocliveworkitems", this.msdyn_productinventory_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_productinventory_msdyn_ocoutboundmessages", this.msdyn_productinventory_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_productinventory_msdyn_ocsessions", this.msdyn_productinventory_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_productinventory_msfp_alerts", this.msdyn_productinventory_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_productinventory_msfp_surveyinvites", this.msdyn_productinventory_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_productinventory_msfp_surveyresponses", this.msdyn_productinventory_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_productinventory_PhoneCalls", this.msdyn_productinventory_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_productinventory_PrincipalObjectAttributeAccesses", this.msdyn_productinventory_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_productinventory_ProcessSession", this.msdyn_productinventory_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_productinventory_RecurringAppointmentMasters", this.msdyn_productinventory_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_productinventory_ServiceAppointments", this.msdyn_productinventory_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_productinventory_SocialActivities", this.msdyn_productinventory_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_productinventory_SyncErrors", this.msdyn_productinventory_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_productinventory_Tasks", this.msdyn_productinventory_Tasks);
        writer.writeStringValue("msdyn_productinventoryid", this.msdyn_productinventoryid);
        writer.writeNumberValue("msdyn_qtyallocated", this.msdyn_qtyallocated);
        writer.writeNumberValue("msdyn_qtyavailable", this.msdyn_qtyavailable);
        writer.writeNumberValue("msdyn_qtyonhand", this.msdyn_qtyonhand);
        writer.writeNumberValue("msdyn_qtyonorder", this.msdyn_qtyonorder);
        writer.writeNumberValue("msdyn_reorderpoint", this.msdyn_reorderpoint);
        writer.writeStringValue("msdyn_row", this.msdyn_row);
        writer.writeObjectValue<Uom>("msdyn_unit", this.msdyn_unit);
        writer.writeObjectValue<Msdyn_warehouse>("msdyn_warehouse", this.msdyn_warehouse);
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
