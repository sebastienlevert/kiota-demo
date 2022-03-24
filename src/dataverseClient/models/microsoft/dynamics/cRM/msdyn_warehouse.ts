import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_fieldservicesettingFromDiscriminatorValue} from './createMsdyn_fieldservicesettingFromDiscriminatorValue';
import {createMsdyn_inventoryadjustmentFromDiscriminatorValue} from './createMsdyn_inventoryadjustmentFromDiscriminatorValue';
import {createMsdyn_inventoryjournalFromDiscriminatorValue} from './createMsdyn_inventoryjournalFromDiscriminatorValue';
import {createMsdyn_inventorytransferFromDiscriminatorValue} from './createMsdyn_inventorytransferFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_productinventoryFromDiscriminatorValue} from './createMsdyn_productinventoryFromDiscriminatorValue';
import {createMsdyn_purchaseorderFromDiscriminatorValue} from './createMsdyn_purchaseorderFromDiscriminatorValue';
import {createMsdyn_purchaseorderproductFromDiscriminatorValue} from './createMsdyn_purchaseorderproductFromDiscriminatorValue';
import {createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue} from './createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue';
import {createMsdyn_rmaproductFromDiscriminatorValue} from './createMsdyn_rmaproductFromDiscriminatorValue';
import {createMsdyn_rtvproductFromDiscriminatorValue} from './createMsdyn_rtvproductFromDiscriminatorValue';
import {createMsdyn_workorderproductFromDiscriminatorValue} from './createMsdyn_workorderproductFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresource, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_actual, Msdyn_approval, Msdyn_bookingalert, Msdyn_fieldservicesetting, Msdyn_inventoryadjustment, Msdyn_inventoryjournal, Msdyn_inventorytransfer, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_productinventory, Msdyn_purchaseorder, Msdyn_purchaseorderproduct, Msdyn_purchaseorderreceiptproduct, Msdyn_rmaproduct, Msdyn_rtvproduct, Msdyn_workorderproduct, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_warehouse extends Crmbaseentity implements Parsable {
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
    private _msdyn_description?: string | undefined;
    private _msdyn_msdyn_warehouse_bookableresource_Warehouse?: Bookableresource[] | undefined;
    private _msdyn_msdyn_warehouse_businessunit_Warehouse?: Businessunit[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_actual_Warehouse?: Msdyn_actual[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse?: Msdyn_fieldservicesetting[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse?: Msdyn_inventoryadjustment[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse?: Msdyn_inventoryjournal[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse?: Msdyn_inventorytransfer[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse?: Msdyn_inventorytransfer[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse?: Msdyn_productinventory[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse?: Msdyn_purchaseorder[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse?: Msdyn_purchaseorderproduct[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse?: Msdyn_purchaseorderreceiptproduct[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse?: Msdyn_rmaproduct[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse?: Msdyn_rtvproduct[] | undefined;
    private _msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse?: Msdyn_workorderproduct[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_warehouse_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_warehouse_Annotations?: Annotation[] | undefined;
    private _msdyn_warehouse_Appointments?: Appointment[] | undefined;
    private _msdyn_warehouse_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_warehouse_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_warehouse_connections1?: Connection[] | undefined;
    private _msdyn_warehouse_connections2?: Connection[] | undefined;
    private _msdyn_warehouse_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_warehouse_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_warehouse_Emails?: Email[] | undefined;
    private _msdyn_warehouse_Faxes?: Fax[] | undefined;
    private _msdyn_warehouse_Letters?: Letter[] | undefined;
    private _msdyn_warehouse_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_warehouse_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_warehouse_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_warehouse_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_warehouse_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_warehouse_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_warehouse_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_warehouse_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_warehouse_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_warehouse_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_warehouse_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_warehouse_ProcessSession?: Processsession[] | undefined;
    private _msdyn_warehouse_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_warehouse_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_warehouse_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_warehouse_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_warehouse_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_warehouse_Tasks?: Task[] | undefined;
    private _msdyn_warehouseid?: string | undefined;
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
     * Instantiates a new msdyn_warehouse and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_warehouse)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_warehouse)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_warehouse)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_warehouse)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_warehouse)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_warehouse)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_warehouse)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_warehouse)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_warehouse).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_warehouse).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_warehouse).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_warehouse).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_warehouse).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_warehouse).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_warehouse).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_description = n.getStringValue(); },
            "msdyn_msdyn_warehouse_bookableresource_Warehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_bookableresource_Warehouse = n.getCollectionOfObjectValues<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_businessunit_Warehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_businessunit_Warehouse = n.getCollectionOfObjectValues<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_actual_Warehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_actual_Warehouse = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse = n.getCollectionOfObjectValues<Msdyn_fieldservicesetting>(createMsdyn_fieldservicesettingFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse = n.getCollectionOfObjectValues<Msdyn_inventoryadjustment>(createMsdyn_inventoryadjustmentFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse = n.getCollectionOfObjectValues<Msdyn_inventoryjournal>(createMsdyn_inventoryjournalFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse = n.getCollectionOfObjectValues<Msdyn_inventorytransfer>(createMsdyn_inventorytransferFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse = n.getCollectionOfObjectValues<Msdyn_inventorytransfer>(createMsdyn_inventorytransferFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse = n.getCollectionOfObjectValues<Msdyn_productinventory>(createMsdyn_productinventoryFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse = n.getCollectionOfObjectValues<Msdyn_purchaseorder>(createMsdyn_purchaseorderFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse = n.getCollectionOfObjectValues<Msdyn_purchaseorderproduct>(createMsdyn_purchaseorderproductFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse = n.getCollectionOfObjectValues<Msdyn_purchaseorderreceiptproduct>(createMsdyn_purchaseorderreceiptproductFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse = n.getCollectionOfObjectValues<Msdyn_rmaproduct>(createMsdyn_rmaproductFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse = n.getCollectionOfObjectValues<Msdyn_rtvproduct>(createMsdyn_rtvproductFromDiscriminatorValue); },
            "msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse = n.getCollectionOfObjectValues<Msdyn_workorderproduct>(createMsdyn_workorderproductFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_name = n.getStringValue(); },
            "msdyn_warehouse_ActivityPointers": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_warehouse_Annotations": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_warehouse_Appointments": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_warehouse_AsyncOperations": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_warehouse_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_warehouse_connections1": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_warehouse_connections2": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_warehouse_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_warehouse_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_warehouse_Emails": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_warehouse_Faxes": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_warehouse_Letters": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_warehouse_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_warehouse_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_warehouse_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_warehouse_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_warehouse_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_warehouse_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_warehouse_msfp_alerts": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_warehouse_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_warehouse_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_warehouse_PhoneCalls": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_warehouse_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_warehouse_ProcessSession": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_warehouse_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_warehouse_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_warehouse_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_warehouse_SocialActivities": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_warehouse_SyncErrors": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_warehouse_Tasks": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouse_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_warehouseid": (o, n) => { (o as unknown as Msdyn_warehouse).msdyn_warehouseid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_warehouse).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_warehouse).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_warehouse).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_warehouse).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_warehouse).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_warehouse).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_warehouse).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_warehouse).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_warehouse).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_warehouse).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_msdyn_warehouse_bookableresource_Warehouse property value. 
     * @returns a bookableresource
     */
    public get msdyn_msdyn_warehouse_bookableresource_Warehouse() {
        return this._msdyn_msdyn_warehouse_bookableresource_Warehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_bookableresource_Warehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_bookableresource_Warehouse property.
     */
    public set msdyn_msdyn_warehouse_bookableresource_Warehouse(value: Bookableresource[] | undefined) {
        this._msdyn_msdyn_warehouse_bookableresource_Warehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_businessunit_Warehouse property value. 
     * @returns a businessunit
     */
    public get msdyn_msdyn_warehouse_businessunit_Warehouse() {
        return this._msdyn_msdyn_warehouse_businessunit_Warehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_businessunit_Warehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_businessunit_Warehouse property.
     */
    public set msdyn_msdyn_warehouse_businessunit_Warehouse(value: Businessunit[] | undefined) {
        this._msdyn_msdyn_warehouse_businessunit_Warehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_actual_Warehouse property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_msdyn_warehouse_msdyn_actual_Warehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_actual_Warehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_actual_Warehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_actual_Warehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_actual_Warehouse(value: Msdyn_actual[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_actual_Warehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse property value. 
     * @returns a msdyn_fieldservicesetting
     */
    public get msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse(value: Msdyn_fieldservicesetting[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse property value. 
     * @returns a msdyn_inventoryadjustment
     */
    public get msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse(value: Msdyn_inventoryadjustment[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse property value. 
     * @returns a msdyn_inventoryjournal
     */
    public get msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse(value: Msdyn_inventoryjournal[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse property value. 
     * @returns a msdyn_inventorytransfer
     */
    public get msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse(value: Msdyn_inventorytransfer[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse property value. 
     * @returns a msdyn_inventorytransfer
     */
    public get msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse(value: Msdyn_inventorytransfer[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse property value. 
     * @returns a msdyn_productinventory
     */
    public get msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse(value: Msdyn_productinventory[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse property value. 
     * @returns a msdyn_purchaseorder
     */
    public get msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse(value: Msdyn_purchaseorder[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse property value. 
     * @returns a msdyn_purchaseorderproduct
     */
    public get msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse(value: Msdyn_purchaseorderproduct[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse property value. 
     * @returns a msdyn_purchaseorderreceiptproduct
     */
    public get msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse(value: Msdyn_purchaseorderreceiptproduct[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse property value. 
     * @returns a msdyn_rmaproduct
     */
    public get msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse(value: Msdyn_rmaproduct[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse property value. 
     * @returns a msdyn_rtvproduct
     */
    public get msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse(value: Msdyn_rtvproduct[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse = value;
    };
    /**
     * Gets the msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse property value. 
     * @returns a msdyn_workorderproduct
     */
    public get msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse() {
        return this._msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse;
    };
    /**
     * Sets the msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse property value. 
     * @param value Value to set for the msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse property.
     */
    public set msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse(value: Msdyn_workorderproduct[] | undefined) {
        this._msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse = value;
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
     * Gets the msdyn_warehouse_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_warehouse_ActivityPointers() {
        return this._msdyn_warehouse_ActivityPointers;
    };
    /**
     * Sets the msdyn_warehouse_ActivityPointers property value. 
     * @param value Value to set for the msdyn_warehouse_ActivityPointers property.
     */
    public set msdyn_warehouse_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_warehouse_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_warehouse_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_warehouse_Annotations() {
        return this._msdyn_warehouse_Annotations;
    };
    /**
     * Sets the msdyn_warehouse_Annotations property value. 
     * @param value Value to set for the msdyn_warehouse_Annotations property.
     */
    public set msdyn_warehouse_Annotations(value: Annotation[] | undefined) {
        this._msdyn_warehouse_Annotations = value;
    };
    /**
     * Gets the msdyn_warehouse_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_warehouse_Appointments() {
        return this._msdyn_warehouse_Appointments;
    };
    /**
     * Sets the msdyn_warehouse_Appointments property value. 
     * @param value Value to set for the msdyn_warehouse_Appointments property.
     */
    public set msdyn_warehouse_Appointments(value: Appointment[] | undefined) {
        this._msdyn_warehouse_Appointments = value;
    };
    /**
     * Gets the msdyn_warehouse_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_warehouse_AsyncOperations() {
        return this._msdyn_warehouse_AsyncOperations;
    };
    /**
     * Sets the msdyn_warehouse_AsyncOperations property value. 
     * @param value Value to set for the msdyn_warehouse_AsyncOperations property.
     */
    public set msdyn_warehouse_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_warehouse_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_warehouse_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_warehouse_BulkDeleteFailures() {
        return this._msdyn_warehouse_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_warehouse_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_warehouse_BulkDeleteFailures property.
     */
    public set msdyn_warehouse_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_warehouse_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_warehouse_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_warehouse_connections1() {
        return this._msdyn_warehouse_connections1;
    };
    /**
     * Sets the msdyn_warehouse_connections1 property value. 
     * @param value Value to set for the msdyn_warehouse_connections1 property.
     */
    public set msdyn_warehouse_connections1(value: Connection[] | undefined) {
        this._msdyn_warehouse_connections1 = value;
    };
    /**
     * Gets the msdyn_warehouse_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_warehouse_connections2() {
        return this._msdyn_warehouse_connections2;
    };
    /**
     * Sets the msdyn_warehouse_connections2 property value. 
     * @param value Value to set for the msdyn_warehouse_connections2 property.
     */
    public set msdyn_warehouse_connections2(value: Connection[] | undefined) {
        this._msdyn_warehouse_connections2 = value;
    };
    /**
     * Gets the msdyn_warehouse_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_warehouse_DuplicateBaseRecord() {
        return this._msdyn_warehouse_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_warehouse_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_warehouse_DuplicateBaseRecord property.
     */
    public set msdyn_warehouse_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_warehouse_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_warehouse_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_warehouse_DuplicateMatchingRecord() {
        return this._msdyn_warehouse_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_warehouse_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_warehouse_DuplicateMatchingRecord property.
     */
    public set msdyn_warehouse_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_warehouse_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_warehouse_Emails property value. 
     * @returns a email
     */
    public get msdyn_warehouse_Emails() {
        return this._msdyn_warehouse_Emails;
    };
    /**
     * Sets the msdyn_warehouse_Emails property value. 
     * @param value Value to set for the msdyn_warehouse_Emails property.
     */
    public set msdyn_warehouse_Emails(value: Email[] | undefined) {
        this._msdyn_warehouse_Emails = value;
    };
    /**
     * Gets the msdyn_warehouse_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_warehouse_Faxes() {
        return this._msdyn_warehouse_Faxes;
    };
    /**
     * Sets the msdyn_warehouse_Faxes property value. 
     * @param value Value to set for the msdyn_warehouse_Faxes property.
     */
    public set msdyn_warehouse_Faxes(value: Fax[] | undefined) {
        this._msdyn_warehouse_Faxes = value;
    };
    /**
     * Gets the msdyn_warehouse_Letters property value. 
     * @returns a letter
     */
    public get msdyn_warehouse_Letters() {
        return this._msdyn_warehouse_Letters;
    };
    /**
     * Sets the msdyn_warehouse_Letters property value. 
     * @param value Value to set for the msdyn_warehouse_Letters property.
     */
    public set msdyn_warehouse_Letters(value: Letter[] | undefined) {
        this._msdyn_warehouse_Letters = value;
    };
    /**
     * Gets the msdyn_warehouse_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_warehouse_MailboxTrackingFolders() {
        return this._msdyn_warehouse_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_warehouse_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_warehouse_MailboxTrackingFolders property.
     */
    public set msdyn_warehouse_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_warehouse_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_warehouse_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_warehouse_msdyn_approvals() {
        return this._msdyn_warehouse_msdyn_approvals;
    };
    /**
     * Sets the msdyn_warehouse_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_warehouse_msdyn_approvals property.
     */
    public set msdyn_warehouse_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_warehouse_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_warehouse_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_warehouse_msdyn_bookingalerts() {
        return this._msdyn_warehouse_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_warehouse_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_warehouse_msdyn_bookingalerts property.
     */
    public set msdyn_warehouse_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_warehouse_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_warehouse_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_warehouse_msdyn_ocliveworkitems() {
        return this._msdyn_warehouse_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_warehouse_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_warehouse_msdyn_ocliveworkitems property.
     */
    public set msdyn_warehouse_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_warehouse_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_warehouse_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_warehouse_msdyn_ocoutboundmessages() {
        return this._msdyn_warehouse_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_warehouse_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_warehouse_msdyn_ocoutboundmessages property.
     */
    public set msdyn_warehouse_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_warehouse_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_warehouse_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_warehouse_msdyn_ocsessions() {
        return this._msdyn_warehouse_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_warehouse_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_warehouse_msdyn_ocsessions property.
     */
    public set msdyn_warehouse_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_warehouse_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_warehouse_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_warehouse_msfp_alerts() {
        return this._msdyn_warehouse_msfp_alerts;
    };
    /**
     * Sets the msdyn_warehouse_msfp_alerts property value. 
     * @param value Value to set for the msdyn_warehouse_msfp_alerts property.
     */
    public set msdyn_warehouse_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_warehouse_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_warehouse_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_warehouse_msfp_surveyinvites() {
        return this._msdyn_warehouse_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_warehouse_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_warehouse_msfp_surveyinvites property.
     */
    public set msdyn_warehouse_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_warehouse_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_warehouse_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_warehouse_msfp_surveyresponses() {
        return this._msdyn_warehouse_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_warehouse_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_warehouse_msfp_surveyresponses property.
     */
    public set msdyn_warehouse_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_warehouse_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_warehouse_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_warehouse_PhoneCalls() {
        return this._msdyn_warehouse_PhoneCalls;
    };
    /**
     * Sets the msdyn_warehouse_PhoneCalls property value. 
     * @param value Value to set for the msdyn_warehouse_PhoneCalls property.
     */
    public set msdyn_warehouse_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_warehouse_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_warehouse_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_warehouse_PrincipalObjectAttributeAccesses() {
        return this._msdyn_warehouse_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_warehouse_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_warehouse_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_warehouse_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_warehouse_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_warehouse_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_warehouse_ProcessSession() {
        return this._msdyn_warehouse_ProcessSession;
    };
    /**
     * Sets the msdyn_warehouse_ProcessSession property value. 
     * @param value Value to set for the msdyn_warehouse_ProcessSession property.
     */
    public set msdyn_warehouse_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_warehouse_ProcessSession = value;
    };
    /**
     * Gets the msdyn_warehouse_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_warehouse_RecurringAppointmentMasters() {
        return this._msdyn_warehouse_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_warehouse_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_warehouse_RecurringAppointmentMasters property.
     */
    public set msdyn_warehouse_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_warehouse_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_warehouse_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_warehouse_ServiceAppointments() {
        return this._msdyn_warehouse_ServiceAppointments;
    };
    /**
     * Sets the msdyn_warehouse_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_warehouse_ServiceAppointments property.
     */
    public set msdyn_warehouse_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_warehouse_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_warehouse_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_warehouse_SharePointDocumentLocations() {
        return this._msdyn_warehouse_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_warehouse_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_warehouse_SharePointDocumentLocations property.
     */
    public set msdyn_warehouse_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_warehouse_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_warehouse_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_warehouse_SocialActivities() {
        return this._msdyn_warehouse_SocialActivities;
    };
    /**
     * Sets the msdyn_warehouse_SocialActivities property value. 
     * @param value Value to set for the msdyn_warehouse_SocialActivities property.
     */
    public set msdyn_warehouse_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_warehouse_SocialActivities = value;
    };
    /**
     * Gets the msdyn_warehouse_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_warehouse_SyncErrors() {
        return this._msdyn_warehouse_SyncErrors;
    };
    /**
     * Sets the msdyn_warehouse_SyncErrors property value. 
     * @param value Value to set for the msdyn_warehouse_SyncErrors property.
     */
    public set msdyn_warehouse_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_warehouse_SyncErrors = value;
    };
    /**
     * Gets the msdyn_warehouse_Tasks property value. 
     * @returns a task
     */
    public get msdyn_warehouse_Tasks() {
        return this._msdyn_warehouse_Tasks;
    };
    /**
     * Sets the msdyn_warehouse_Tasks property value. 
     * @param value Value to set for the msdyn_warehouse_Tasks property.
     */
    public set msdyn_warehouse_Tasks(value: Task[] | undefined) {
        this._msdyn_warehouse_Tasks = value;
    };
    /**
     * Gets the msdyn_warehouseid property value. 
     * @returns a string
     */
    public get msdyn_warehouseid() {
        return this._msdyn_warehouseid;
    };
    /**
     * Sets the msdyn_warehouseid property value. 
     * @param value Value to set for the msdyn_warehouseid property.
     */
    public set msdyn_warehouseid(value: string | undefined) {
        this._msdyn_warehouseid = value;
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
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeCollectionOfObjectValues<Bookableresource>("msdyn_msdyn_warehouse_bookableresource_Warehouse", this.msdyn_msdyn_warehouse_bookableresource_Warehouse);
        writer.writeCollectionOfObjectValues<Businessunit>("msdyn_msdyn_warehouse_businessunit_Warehouse", this.msdyn_msdyn_warehouse_businessunit_Warehouse);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_msdyn_warehouse_msdyn_actual_Warehouse", this.msdyn_msdyn_warehouse_msdyn_actual_Warehouse);
        writer.writeCollectionOfObjectValues<Msdyn_fieldservicesetting>("msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse", this.msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse);
        writer.writeCollectionOfObjectValues<Msdyn_inventoryadjustment>("msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse", this.msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse);
        writer.writeCollectionOfObjectValues<Msdyn_inventoryjournal>("msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse", this.msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse);
        writer.writeCollectionOfObjectValues<Msdyn_inventorytransfer>("msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse", this.msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse);
        writer.writeCollectionOfObjectValues<Msdyn_inventorytransfer>("msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse", this.msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse);
        writer.writeCollectionOfObjectValues<Msdyn_productinventory>("msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse", this.msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse);
        writer.writeCollectionOfObjectValues<Msdyn_purchaseorder>("msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse", this.msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse);
        writer.writeCollectionOfObjectValues<Msdyn_purchaseorderproduct>("msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse", this.msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse);
        writer.writeCollectionOfObjectValues<Msdyn_purchaseorderreceiptproduct>("msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse", this.msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse);
        writer.writeCollectionOfObjectValues<Msdyn_rmaproduct>("msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse", this.msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse);
        writer.writeCollectionOfObjectValues<Msdyn_rtvproduct>("msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse", this.msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse);
        writer.writeCollectionOfObjectValues<Msdyn_workorderproduct>("msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse", this.msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_warehouse_ActivityPointers", this.msdyn_warehouse_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_warehouse_Annotations", this.msdyn_warehouse_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_warehouse_Appointments", this.msdyn_warehouse_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_warehouse_AsyncOperations", this.msdyn_warehouse_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_warehouse_BulkDeleteFailures", this.msdyn_warehouse_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_warehouse_connections1", this.msdyn_warehouse_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_warehouse_connections2", this.msdyn_warehouse_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_warehouse_DuplicateBaseRecord", this.msdyn_warehouse_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_warehouse_DuplicateMatchingRecord", this.msdyn_warehouse_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_warehouse_Emails", this.msdyn_warehouse_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_warehouse_Faxes", this.msdyn_warehouse_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_warehouse_Letters", this.msdyn_warehouse_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_warehouse_MailboxTrackingFolders", this.msdyn_warehouse_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_warehouse_msdyn_approvals", this.msdyn_warehouse_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_warehouse_msdyn_bookingalerts", this.msdyn_warehouse_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_warehouse_msdyn_ocliveworkitems", this.msdyn_warehouse_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_warehouse_msdyn_ocoutboundmessages", this.msdyn_warehouse_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_warehouse_msdyn_ocsessions", this.msdyn_warehouse_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_warehouse_msfp_alerts", this.msdyn_warehouse_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_warehouse_msfp_surveyinvites", this.msdyn_warehouse_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_warehouse_msfp_surveyresponses", this.msdyn_warehouse_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_warehouse_PhoneCalls", this.msdyn_warehouse_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_warehouse_PrincipalObjectAttributeAccesses", this.msdyn_warehouse_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_warehouse_ProcessSession", this.msdyn_warehouse_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_warehouse_RecurringAppointmentMasters", this.msdyn_warehouse_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_warehouse_ServiceAppointments", this.msdyn_warehouse_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_warehouse_SharePointDocumentLocations", this.msdyn_warehouse_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_warehouse_SocialActivities", this.msdyn_warehouse_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_warehouse_SyncErrors", this.msdyn_warehouse_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_warehouse_Tasks", this.msdyn_warehouse_Tasks);
        writer.writeStringValue("msdyn_warehouseid", this.msdyn_warehouseid);
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
