import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_iotalertFromDiscriminatorValue} from './createMsdyn_iotalertFromDiscriminatorValue';
import {createMsdyn_iotdevicecategoryFromDiscriminatorValue} from './createMsdyn_iotdevicecategoryFromDiscriminatorValue';
import {createMsdyn_iotdevicecommandFromDiscriminatorValue} from './createMsdyn_iotdevicecommandFromDiscriminatorValue';
import {createMsdyn_iotdevicedatahistoryFromDiscriminatorValue} from './createMsdyn_iotdevicedatahistoryFromDiscriminatorValue';
import {createMsdyn_iotdeviceregistrationhistoryFromDiscriminatorValue} from './createMsdyn_iotdeviceregistrationhistoryFromDiscriminatorValue';
import {createMsdyn_iotdevicevisualizationconfigurationFromDiscriminatorValue} from './createMsdyn_iotdevicevisualizationconfigurationFromDiscriminatorValue';
import {createMsdyn_iotproviderinstanceFromDiscriminatorValue} from './createMsdyn_iotproviderinstanceFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Account, Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_iotalert, Msdyn_iotdevicecategory, Msdyn_iotdevicecommand, Msdyn_iotdevicedatahistory, Msdyn_iotdeviceregistrationhistory, Msdyn_iotdevicevisualizationconfiguration, Msdyn_iotproviderinstance, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_iotdevice extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_account_value?: string | undefined;
    private __msdyn_category_value?: string | undefined;
    private __msdyn_iotproviderinstance_value?: string | undefined;
    private __msdyn_lastcommandsent_value?: string | undefined;
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
    private _msdyn_Account?: Account | undefined;
    private _msdyn_Category?: Msdyn_iotdevicecategory | undefined;
    private _msdyn_connectionstate?: boolean | undefined;
    private _msdyn_deviceid?: string | undefined;
    private _msdyn_devicereportedproperties?: string | undefined;
    private _msdyn_devicesettings?: string | undefined;
    private _msdyn_iotdevice_Annotations?: Annotation[] | undefined;
    private _msdyn_iotdevice_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_iotdevice_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_iotdevice_connections1?: Connection[] | undefined;
    private _msdyn_iotdevice_connections2?: Connection[] | undefined;
    private _msdyn_iotdevice_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_iotdevice_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_iotdevice_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_iotdevice_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_iotdevice_ProcessSession?: Processsession[] | undefined;
    private _msdyn_iotdevice_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_iotdeviceid?: string | undefined;
    private _msdyn_iotdevicevisualizationconfiguration_iotdevice?: Msdyn_iotdevicevisualizationconfiguration[] | undefined;
    private _msdyn_IoTProviderInstance?: Msdyn_iotproviderinstance | undefined;
    private _msdyn_issimulated?: number | undefined;
    private _msdyn_lastactivitytime?: Date | undefined;
    private _msdyn_LastCommandSent?: Msdyn_iotdevicecommand | undefined;
    private _msdyn_lastcommandsenttime?: Date | undefined;
    private _msdyn_msdyn_iotdevice_msdyn_iotalert_Device?: Msdyn_iotalert[] | undefined;
    private _msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device?: Msdyn_iotdevicecommand[] | undefined;
    private _msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device?: Msdyn_iotdevicedatahistory[] | undefined;
    private _msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device?: Msdyn_iotdeviceregistrationhistory[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_registrationmessage?: string | undefined;
    private _msdyn_registrationstatus?: number | undefined;
    private _msdyn_tags?: string | undefined;
    private _msdyn_timezone?: number | undefined;
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
     * Gets the _msdyn_account_value property value. 
     * @returns a string
     */
    public get _msdyn_account_value() {
        return this.__msdyn_account_value;
    };
    /**
     * Sets the _msdyn_account_value property value. 
     * @param value Value to set for the _msdyn_account_value property.
     */
    public set _msdyn_account_value(value: string | undefined) {
        this.__msdyn_account_value = value;
    };
    /**
     * Gets the _msdyn_category_value property value. 
     * @returns a string
     */
    public get _msdyn_category_value() {
        return this.__msdyn_category_value;
    };
    /**
     * Sets the _msdyn_category_value property value. 
     * @param value Value to set for the _msdyn_category_value property.
     */
    public set _msdyn_category_value(value: string | undefined) {
        this.__msdyn_category_value = value;
    };
    /**
     * Gets the _msdyn_iotproviderinstance_value property value. 
     * @returns a string
     */
    public get _msdyn_iotproviderinstance_value() {
        return this.__msdyn_iotproviderinstance_value;
    };
    /**
     * Sets the _msdyn_iotproviderinstance_value property value. 
     * @param value Value to set for the _msdyn_iotproviderinstance_value property.
     */
    public set _msdyn_iotproviderinstance_value(value: string | undefined) {
        this.__msdyn_iotproviderinstance_value = value;
    };
    /**
     * Gets the _msdyn_lastcommandsent_value property value. 
     * @returns a string
     */
    public get _msdyn_lastcommandsent_value() {
        return this.__msdyn_lastcommandsent_value;
    };
    /**
     * Sets the _msdyn_lastcommandsent_value property value. 
     * @param value Value to set for the _msdyn_lastcommandsent_value property.
     */
    public set _msdyn_lastcommandsent_value(value: string | undefined) {
        this.__msdyn_lastcommandsent_value = value;
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
     * Instantiates a new msdyn_iotdevice and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_account_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._msdyn_account_value = n.getStringValue(); },
            "_msdyn_category_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._msdyn_category_value = n.getStringValue(); },
            "_msdyn_iotproviderinstance_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._msdyn_iotproviderinstance_value = n.getStringValue(); },
            "_msdyn_lastcommandsent_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._msdyn_lastcommandsent_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_iotdevice)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_iotdevice).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_iotdevice).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_iotdevice).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_iotdevice).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_iotdevice).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_iotdevice).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_iotdevice).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_Account": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_Account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_Category": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_Category = n.getObjectValue<Msdyn_iotdevicecategory>(createMsdyn_iotdevicecategoryFromDiscriminatorValue); },
            "msdyn_connectionstate": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_connectionstate = n.getBooleanValue(); },
            "msdyn_deviceid": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_deviceid = n.getStringValue(); },
            "msdyn_devicereportedproperties": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_devicereportedproperties = n.getStringValue(); },
            "msdyn_devicesettings": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_devicesettings = n.getStringValue(); },
            "msdyn_iotdevice_Annotations": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_iotdevice_AsyncOperations": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_iotdevice_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_iotdevice_connections1": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_iotdevice_connections2": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_iotdevice_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_iotdevice_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_iotdevice_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_iotdevice_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_iotdevice_ProcessSession": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_iotdevice_SyncErrors": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevice_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_iotdeviceid": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdeviceid = n.getStringValue(); },
            "msdyn_iotdevicevisualizationconfiguration_iotdevice": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_iotdevicevisualizationconfiguration_iotdevice = n.getCollectionOfObjectValues<Msdyn_iotdevicevisualizationconfiguration>(createMsdyn_iotdevicevisualizationconfigurationFromDiscriminatorValue); },
            "msdyn_IoTProviderInstance": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_IoTProviderInstance = n.getObjectValue<Msdyn_iotproviderinstance>(createMsdyn_iotproviderinstanceFromDiscriminatorValue); },
            "msdyn_issimulated": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_issimulated = n.getNumberValue(); },
            "msdyn_lastactivitytime": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_lastactivitytime = n.getDateValue(); },
            "msdyn_LastCommandSent": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_LastCommandSent = n.getObjectValue<Msdyn_iotdevicecommand>(createMsdyn_iotdevicecommandFromDiscriminatorValue); },
            "msdyn_lastcommandsenttime": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_lastcommandsenttime = n.getDateValue(); },
            "msdyn_msdyn_iotdevice_msdyn_iotalert_Device": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_msdyn_iotdevice_msdyn_iotalert_Device = n.getCollectionOfObjectValues<Msdyn_iotalert>(createMsdyn_iotalertFromDiscriminatorValue); },
            "msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device = n.getCollectionOfObjectValues<Msdyn_iotdevicecommand>(createMsdyn_iotdevicecommandFromDiscriminatorValue); },
            "msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device = n.getCollectionOfObjectValues<Msdyn_iotdevicedatahistory>(createMsdyn_iotdevicedatahistoryFromDiscriminatorValue); },
            "msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device = n.getCollectionOfObjectValues<Msdyn_iotdeviceregistrationhistory>(createMsdyn_iotdeviceregistrationhistoryFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_name = n.getStringValue(); },
            "msdyn_registrationmessage": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_registrationmessage = n.getStringValue(); },
            "msdyn_registrationstatus": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_registrationstatus = n.getNumberValue(); },
            "msdyn_tags": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_tags = n.getStringValue(); },
            "msdyn_timezone": (o, n) => { (o as unknown as Msdyn_iotdevice).msdyn_timezone = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_iotdevice).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_iotdevice).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_iotdevice).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_iotdevice).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_iotdevice).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_iotdevice).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_iotdevice).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_iotdevice).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_iotdevice).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_iotdevice).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_Account property value. 
     * @returns a account
     */
    public get msdyn_Account() {
        return this._msdyn_Account;
    };
    /**
     * Sets the msdyn_Account property value. 
     * @param value Value to set for the msdyn_Account property.
     */
    public set msdyn_Account(value: Account | undefined) {
        this._msdyn_Account = value;
    };
    /**
     * Gets the msdyn_Category property value. 
     * @returns a msdyn_iotdevicecategory
     */
    public get msdyn_Category() {
        return this._msdyn_Category;
    };
    /**
     * Sets the msdyn_Category property value. 
     * @param value Value to set for the msdyn_Category property.
     */
    public set msdyn_Category(value: Msdyn_iotdevicecategory | undefined) {
        this._msdyn_Category = value;
    };
    /**
     * Gets the msdyn_connectionstate property value. 
     * @returns a boolean
     */
    public get msdyn_connectionstate() {
        return this._msdyn_connectionstate;
    };
    /**
     * Sets the msdyn_connectionstate property value. 
     * @param value Value to set for the msdyn_connectionstate property.
     */
    public set msdyn_connectionstate(value: boolean | undefined) {
        this._msdyn_connectionstate = value;
    };
    /**
     * Gets the msdyn_deviceid property value. 
     * @returns a string
     */
    public get msdyn_deviceid() {
        return this._msdyn_deviceid;
    };
    /**
     * Sets the msdyn_deviceid property value. 
     * @param value Value to set for the msdyn_deviceid property.
     */
    public set msdyn_deviceid(value: string | undefined) {
        this._msdyn_deviceid = value;
    };
    /**
     * Gets the msdyn_devicereportedproperties property value. 
     * @returns a string
     */
    public get msdyn_devicereportedproperties() {
        return this._msdyn_devicereportedproperties;
    };
    /**
     * Sets the msdyn_devicereportedproperties property value. 
     * @param value Value to set for the msdyn_devicereportedproperties property.
     */
    public set msdyn_devicereportedproperties(value: string | undefined) {
        this._msdyn_devicereportedproperties = value;
    };
    /**
     * Gets the msdyn_devicesettings property value. 
     * @returns a string
     */
    public get msdyn_devicesettings() {
        return this._msdyn_devicesettings;
    };
    /**
     * Sets the msdyn_devicesettings property value. 
     * @param value Value to set for the msdyn_devicesettings property.
     */
    public set msdyn_devicesettings(value: string | undefined) {
        this._msdyn_devicesettings = value;
    };
    /**
     * Gets the msdyn_iotdevice_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_iotdevice_Annotations() {
        return this._msdyn_iotdevice_Annotations;
    };
    /**
     * Sets the msdyn_iotdevice_Annotations property value. 
     * @param value Value to set for the msdyn_iotdevice_Annotations property.
     */
    public set msdyn_iotdevice_Annotations(value: Annotation[] | undefined) {
        this._msdyn_iotdevice_Annotations = value;
    };
    /**
     * Gets the msdyn_iotdevice_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_iotdevice_AsyncOperations() {
        return this._msdyn_iotdevice_AsyncOperations;
    };
    /**
     * Sets the msdyn_iotdevice_AsyncOperations property value. 
     * @param value Value to set for the msdyn_iotdevice_AsyncOperations property.
     */
    public set msdyn_iotdevice_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_iotdevice_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_iotdevice_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_iotdevice_BulkDeleteFailures() {
        return this._msdyn_iotdevice_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_iotdevice_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_iotdevice_BulkDeleteFailures property.
     */
    public set msdyn_iotdevice_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_iotdevice_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_iotdevice_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_iotdevice_connections1() {
        return this._msdyn_iotdevice_connections1;
    };
    /**
     * Sets the msdyn_iotdevice_connections1 property value. 
     * @param value Value to set for the msdyn_iotdevice_connections1 property.
     */
    public set msdyn_iotdevice_connections1(value: Connection[] | undefined) {
        this._msdyn_iotdevice_connections1 = value;
    };
    /**
     * Gets the msdyn_iotdevice_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_iotdevice_connections2() {
        return this._msdyn_iotdevice_connections2;
    };
    /**
     * Sets the msdyn_iotdevice_connections2 property value. 
     * @param value Value to set for the msdyn_iotdevice_connections2 property.
     */
    public set msdyn_iotdevice_connections2(value: Connection[] | undefined) {
        this._msdyn_iotdevice_connections2 = value;
    };
    /**
     * Gets the msdyn_iotdevice_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_iotdevice_DuplicateBaseRecord() {
        return this._msdyn_iotdevice_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_iotdevice_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_iotdevice_DuplicateBaseRecord property.
     */
    public set msdyn_iotdevice_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_iotdevice_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_iotdevice_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_iotdevice_DuplicateMatchingRecord() {
        return this._msdyn_iotdevice_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_iotdevice_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_iotdevice_DuplicateMatchingRecord property.
     */
    public set msdyn_iotdevice_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_iotdevice_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_iotdevice_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_iotdevice_MailboxTrackingFolders() {
        return this._msdyn_iotdevice_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_iotdevice_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_iotdevice_MailboxTrackingFolders property.
     */
    public set msdyn_iotdevice_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_iotdevice_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_iotdevice_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_iotdevice_PrincipalObjectAttributeAccesses() {
        return this._msdyn_iotdevice_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_iotdevice_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_iotdevice_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_iotdevice_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_iotdevice_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_iotdevice_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_iotdevice_ProcessSession() {
        return this._msdyn_iotdevice_ProcessSession;
    };
    /**
     * Sets the msdyn_iotdevice_ProcessSession property value. 
     * @param value Value to set for the msdyn_iotdevice_ProcessSession property.
     */
    public set msdyn_iotdevice_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_iotdevice_ProcessSession = value;
    };
    /**
     * Gets the msdyn_iotdevice_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_iotdevice_SyncErrors() {
        return this._msdyn_iotdevice_SyncErrors;
    };
    /**
     * Sets the msdyn_iotdevice_SyncErrors property value. 
     * @param value Value to set for the msdyn_iotdevice_SyncErrors property.
     */
    public set msdyn_iotdevice_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_iotdevice_SyncErrors = value;
    };
    /**
     * Gets the msdyn_iotdeviceid property value. 
     * @returns a string
     */
    public get msdyn_iotdeviceid() {
        return this._msdyn_iotdeviceid;
    };
    /**
     * Sets the msdyn_iotdeviceid property value. 
     * @param value Value to set for the msdyn_iotdeviceid property.
     */
    public set msdyn_iotdeviceid(value: string | undefined) {
        this._msdyn_iotdeviceid = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfiguration_iotdevice property value. 
     * @returns a msdyn_iotdevicevisualizationconfiguration
     */
    public get msdyn_iotdevicevisualizationconfiguration_iotdevice() {
        return this._msdyn_iotdevicevisualizationconfiguration_iotdevice;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfiguration_iotdevice property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfiguration_iotdevice property.
     */
    public set msdyn_iotdevicevisualizationconfiguration_iotdevice(value: Msdyn_iotdevicevisualizationconfiguration[] | undefined) {
        this._msdyn_iotdevicevisualizationconfiguration_iotdevice = value;
    };
    /**
     * Gets the msdyn_IoTProviderInstance property value. 
     * @returns a msdyn_iotproviderinstance
     */
    public get msdyn_IoTProviderInstance() {
        return this._msdyn_IoTProviderInstance;
    };
    /**
     * Sets the msdyn_IoTProviderInstance property value. 
     * @param value Value to set for the msdyn_IoTProviderInstance property.
     */
    public set msdyn_IoTProviderInstance(value: Msdyn_iotproviderinstance | undefined) {
        this._msdyn_IoTProviderInstance = value;
    };
    /**
     * Gets the msdyn_issimulated property value. 
     * @returns a integer
     */
    public get msdyn_issimulated() {
        return this._msdyn_issimulated;
    };
    /**
     * Sets the msdyn_issimulated property value. 
     * @param value Value to set for the msdyn_issimulated property.
     */
    public set msdyn_issimulated(value: number | undefined) {
        this._msdyn_issimulated = value;
    };
    /**
     * Gets the msdyn_lastactivitytime property value. 
     * @returns a Date
     */
    public get msdyn_lastactivitytime() {
        return this._msdyn_lastactivitytime;
    };
    /**
     * Sets the msdyn_lastactivitytime property value. 
     * @param value Value to set for the msdyn_lastactivitytime property.
     */
    public set msdyn_lastactivitytime(value: Date | undefined) {
        this._msdyn_lastactivitytime = value;
    };
    /**
     * Gets the msdyn_LastCommandSent property value. 
     * @returns a msdyn_iotdevicecommand
     */
    public get msdyn_LastCommandSent() {
        return this._msdyn_LastCommandSent;
    };
    /**
     * Sets the msdyn_LastCommandSent property value. 
     * @param value Value to set for the msdyn_LastCommandSent property.
     */
    public set msdyn_LastCommandSent(value: Msdyn_iotdevicecommand | undefined) {
        this._msdyn_LastCommandSent = value;
    };
    /**
     * Gets the msdyn_lastcommandsenttime property value. 
     * @returns a Date
     */
    public get msdyn_lastcommandsenttime() {
        return this._msdyn_lastcommandsenttime;
    };
    /**
     * Sets the msdyn_lastcommandsenttime property value. 
     * @param value Value to set for the msdyn_lastcommandsenttime property.
     */
    public set msdyn_lastcommandsenttime(value: Date | undefined) {
        this._msdyn_lastcommandsenttime = value;
    };
    /**
     * Gets the msdyn_msdyn_iotdevice_msdyn_iotalert_Device property value. 
     * @returns a msdyn_iotalert
     */
    public get msdyn_msdyn_iotdevice_msdyn_iotalert_Device() {
        return this._msdyn_msdyn_iotdevice_msdyn_iotalert_Device;
    };
    /**
     * Sets the msdyn_msdyn_iotdevice_msdyn_iotalert_Device property value. 
     * @param value Value to set for the msdyn_msdyn_iotdevice_msdyn_iotalert_Device property.
     */
    public set msdyn_msdyn_iotdevice_msdyn_iotalert_Device(value: Msdyn_iotalert[] | undefined) {
        this._msdyn_msdyn_iotdevice_msdyn_iotalert_Device = value;
    };
    /**
     * Gets the msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device property value. 
     * @returns a msdyn_iotdevicecommand
     */
    public get msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device() {
        return this._msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device;
    };
    /**
     * Sets the msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device property value. 
     * @param value Value to set for the msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device property.
     */
    public set msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device(value: Msdyn_iotdevicecommand[] | undefined) {
        this._msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device = value;
    };
    /**
     * Gets the msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device property value. 
     * @returns a msdyn_iotdevicedatahistory
     */
    public get msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device() {
        return this._msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device;
    };
    /**
     * Sets the msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device property value. 
     * @param value Value to set for the msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device property.
     */
    public set msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device(value: Msdyn_iotdevicedatahistory[] | undefined) {
        this._msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device = value;
    };
    /**
     * Gets the msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device property value. 
     * @returns a msdyn_iotdeviceregistrationhistory
     */
    public get msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device() {
        return this._msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device;
    };
    /**
     * Sets the msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device property value. 
     * @param value Value to set for the msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device property.
     */
    public set msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device(value: Msdyn_iotdeviceregistrationhistory[] | undefined) {
        this._msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device = value;
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
     * Gets the msdyn_registrationmessage property value. 
     * @returns a string
     */
    public get msdyn_registrationmessage() {
        return this._msdyn_registrationmessage;
    };
    /**
     * Sets the msdyn_registrationmessage property value. 
     * @param value Value to set for the msdyn_registrationmessage property.
     */
    public set msdyn_registrationmessage(value: string | undefined) {
        this._msdyn_registrationmessage = value;
    };
    /**
     * Gets the msdyn_registrationstatus property value. 
     * @returns a integer
     */
    public get msdyn_registrationstatus() {
        return this._msdyn_registrationstatus;
    };
    /**
     * Sets the msdyn_registrationstatus property value. 
     * @param value Value to set for the msdyn_registrationstatus property.
     */
    public set msdyn_registrationstatus(value: number | undefined) {
        this._msdyn_registrationstatus = value;
    };
    /**
     * Gets the msdyn_tags property value. 
     * @returns a string
     */
    public get msdyn_tags() {
        return this._msdyn_tags;
    };
    /**
     * Sets the msdyn_tags property value. 
     * @param value Value to set for the msdyn_tags property.
     */
    public set msdyn_tags(value: string | undefined) {
        this._msdyn_tags = value;
    };
    /**
     * Gets the msdyn_timezone property value. 
     * @returns a integer
     */
    public get msdyn_timezone() {
        return this._msdyn_timezone;
    };
    /**
     * Sets the msdyn_timezone property value. 
     * @param value Value to set for the msdyn_timezone property.
     */
    public set msdyn_timezone(value: number | undefined) {
        this._msdyn_timezone = value;
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
        writer.writeStringValue("_msdyn_account_value", this._msdyn_account_value);
        writer.writeStringValue("_msdyn_category_value", this._msdyn_category_value);
        writer.writeStringValue("_msdyn_iotproviderinstance_value", this._msdyn_iotproviderinstance_value);
        writer.writeStringValue("_msdyn_lastcommandsent_value", this._msdyn_lastcommandsent_value);
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
        writer.writeObjectValue<Account>("msdyn_Account", this.msdyn_Account);
        writer.writeObjectValue<Msdyn_iotdevicecategory>("msdyn_Category", this.msdyn_Category);
        writer.writeBooleanValue("msdyn_connectionstate", this.msdyn_connectionstate);
        writer.writeStringValue("msdyn_deviceid", this.msdyn_deviceid);
        writer.writeStringValue("msdyn_devicereportedproperties", this.msdyn_devicereportedproperties);
        writer.writeStringValue("msdyn_devicesettings", this.msdyn_devicesettings);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_iotdevice_Annotations", this.msdyn_iotdevice_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_iotdevice_AsyncOperations", this.msdyn_iotdevice_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_iotdevice_BulkDeleteFailures", this.msdyn_iotdevice_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_iotdevice_connections1", this.msdyn_iotdevice_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_iotdevice_connections2", this.msdyn_iotdevice_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_iotdevice_DuplicateBaseRecord", this.msdyn_iotdevice_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_iotdevice_DuplicateMatchingRecord", this.msdyn_iotdevice_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_iotdevice_MailboxTrackingFolders", this.msdyn_iotdevice_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_iotdevice_PrincipalObjectAttributeAccesses", this.msdyn_iotdevice_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_iotdevice_ProcessSession", this.msdyn_iotdevice_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_iotdevice_SyncErrors", this.msdyn_iotdevice_SyncErrors);
        writer.writeStringValue("msdyn_iotdeviceid", this.msdyn_iotdeviceid);
        writer.writeCollectionOfObjectValues<Msdyn_iotdevicevisualizationconfiguration>("msdyn_iotdevicevisualizationconfiguration_iotdevice", this.msdyn_iotdevicevisualizationconfiguration_iotdevice);
        writer.writeObjectValue<Msdyn_iotproviderinstance>("msdyn_IoTProviderInstance", this.msdyn_IoTProviderInstance);
        writer.writeNumberValue("msdyn_issimulated", this.msdyn_issimulated);
        writer.writeDateValue("msdyn_lastactivitytime", this.msdyn_lastactivitytime);
        writer.writeObjectValue<Msdyn_iotdevicecommand>("msdyn_LastCommandSent", this.msdyn_LastCommandSent);
        writer.writeDateValue("msdyn_lastcommandsenttime", this.msdyn_lastcommandsenttime);
        writer.writeCollectionOfObjectValues<Msdyn_iotalert>("msdyn_msdyn_iotdevice_msdyn_iotalert_Device", this.msdyn_msdyn_iotdevice_msdyn_iotalert_Device);
        writer.writeCollectionOfObjectValues<Msdyn_iotdevicecommand>("msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device", this.msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device);
        writer.writeCollectionOfObjectValues<Msdyn_iotdevicedatahistory>("msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device", this.msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device);
        writer.writeCollectionOfObjectValues<Msdyn_iotdeviceregistrationhistory>("msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device", this.msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_registrationmessage", this.msdyn_registrationmessage);
        writer.writeNumberValue("msdyn_registrationstatus", this.msdyn_registrationstatus);
        writer.writeStringValue("msdyn_tags", this.msdyn_tags);
        writer.writeNumberValue("msdyn_timezone", this.msdyn_timezone);
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
