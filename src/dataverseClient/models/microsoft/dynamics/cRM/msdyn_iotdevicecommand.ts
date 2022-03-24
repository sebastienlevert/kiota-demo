import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_iotalertFromDiscriminatorValue} from './createMsdyn_iotalertFromDiscriminatorValue';
import {createMsdyn_iotdevicecommanddefinitionFromDiscriminatorValue} from './createMsdyn_iotdevicecommanddefinitionFromDiscriminatorValue';
import {createMsdyn_iotdeviceFromDiscriminatorValue} from './createMsdyn_iotdeviceFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_customerasset, Msdyn_iotalert, Msdyn_iotdevice, Msdyn_iotdevicecommanddefinition, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_iotdevicecommand extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_command_value?: string | undefined;
    private __msdyn_customerasset_value?: string | undefined;
    private __msdyn_device_value?: string | undefined;
    private __msdyn_parentalert_value?: string | undefined;
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
    private _msdyn_Command?: Msdyn_iotdevicecommanddefinition | undefined;
    private _msdyn_commandstatus?: number | undefined;
    private _msdyn_commandstatusreason?: string | undefined;
    private _msdyn_CustomerAsset?: Msdyn_customerasset | undefined;
    private _msdyn_Device?: Msdyn_iotdevice | undefined;
    private _msdyn_deviceid?: string | undefined;
    private _msdyn_iotdevicecommand_Annotations?: Annotation[] | undefined;
    private _msdyn_iotdevicecommand_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_iotdevicecommand_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_iotdevicecommand_connections1?: Connection[] | undefined;
    private _msdyn_iotdevicecommand_connections2?: Connection[] | undefined;
    private _msdyn_iotdevicecommand_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_iotdevicecommand_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_iotdevicecommand_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_iotdevicecommand_ProcessSession?: Processsession[] | undefined;
    private _msdyn_iotdevicecommand_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_iotdevicecommandid?: string | undefined;
    private _msdyn_message?: string | undefined;
    private _msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent?: Msdyn_customerasset[] | undefined;
    private _msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent?: Msdyn_iotalert[] | undefined;
    private _msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent?: Msdyn_iotdevice[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ParentAlert?: Msdyn_iotalert | undefined;
    private _msdyn_sendtoallconnecteddevices?: boolean | undefined;
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
     * Gets the _msdyn_command_value property value. 
     * @returns a string
     */
    public get _msdyn_command_value() {
        return this.__msdyn_command_value;
    };
    /**
     * Sets the _msdyn_command_value property value. 
     * @param value Value to set for the _msdyn_command_value property.
     */
    public set _msdyn_command_value(value: string | undefined) {
        this.__msdyn_command_value = value;
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
     * Gets the _msdyn_device_value property value. 
     * @returns a string
     */
    public get _msdyn_device_value() {
        return this.__msdyn_device_value;
    };
    /**
     * Sets the _msdyn_device_value property value. 
     * @param value Value to set for the _msdyn_device_value property.
     */
    public set _msdyn_device_value(value: string | undefined) {
        this.__msdyn_device_value = value;
    };
    /**
     * Gets the _msdyn_parentalert_value property value. 
     * @returns a string
     */
    public get _msdyn_parentalert_value() {
        return this.__msdyn_parentalert_value;
    };
    /**
     * Sets the _msdyn_parentalert_value property value. 
     * @param value Value to set for the _msdyn_parentalert_value property.
     */
    public set _msdyn_parentalert_value(value: string | undefined) {
        this.__msdyn_parentalert_value = value;
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
     * Instantiates a new msdyn_iotdevicecommand and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_command_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._msdyn_command_value = n.getStringValue(); },
            "_msdyn_customerasset_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._msdyn_customerasset_value = n.getStringValue(); },
            "_msdyn_device_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._msdyn_device_value = n.getStringValue(); },
            "_msdyn_parentalert_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._msdyn_parentalert_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_iotdevicecommand)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_Command": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_Command = n.getObjectValue<Msdyn_iotdevicecommanddefinition>(createMsdyn_iotdevicecommanddefinitionFromDiscriminatorValue); },
            "msdyn_commandstatus": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_commandstatus = n.getNumberValue(); },
            "msdyn_commandstatusreason": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_commandstatusreason = n.getStringValue(); },
            "msdyn_CustomerAsset": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_CustomerAsset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_Device": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_Device = n.getObjectValue<Msdyn_iotdevice>(createMsdyn_iotdeviceFromDiscriminatorValue); },
            "msdyn_deviceid": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_deviceid = n.getStringValue(); },
            "msdyn_iotdevicecommand_Annotations": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_iotdevicecommand_AsyncOperations": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_iotdevicecommand_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_iotdevicecommand_connections1": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_iotdevicecommand_connections2": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_iotdevicecommand_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_iotdevicecommand_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_iotdevicecommand_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_iotdevicecommand_ProcessSession": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_iotdevicecommand_SyncErrors": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommand_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_iotdevicecommandid": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_iotdevicecommandid = n.getStringValue(); },
            "msdyn_message": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_message = n.getStringValue(); },
            "msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent = n.getCollectionOfObjectValues<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent = n.getCollectionOfObjectValues<Msdyn_iotalert>(createMsdyn_iotalertFromDiscriminatorValue); },
            "msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent = n.getCollectionOfObjectValues<Msdyn_iotdevice>(createMsdyn_iotdeviceFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_name = n.getStringValue(); },
            "msdyn_ParentAlert": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_ParentAlert = n.getObjectValue<Msdyn_iotalert>(createMsdyn_iotalertFromDiscriminatorValue); },
            "msdyn_sendtoallconnecteddevices": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).msdyn_sendtoallconnecteddevices = n.getBooleanValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_iotdevicecommand).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_Command property value. 
     * @returns a msdyn_iotdevicecommanddefinition
     */
    public get msdyn_Command() {
        return this._msdyn_Command;
    };
    /**
     * Sets the msdyn_Command property value. 
     * @param value Value to set for the msdyn_Command property.
     */
    public set msdyn_Command(value: Msdyn_iotdevicecommanddefinition | undefined) {
        this._msdyn_Command = value;
    };
    /**
     * Gets the msdyn_commandstatus property value. 
     * @returns a integer
     */
    public get msdyn_commandstatus() {
        return this._msdyn_commandstatus;
    };
    /**
     * Sets the msdyn_commandstatus property value. 
     * @param value Value to set for the msdyn_commandstatus property.
     */
    public set msdyn_commandstatus(value: number | undefined) {
        this._msdyn_commandstatus = value;
    };
    /**
     * Gets the msdyn_commandstatusreason property value. 
     * @returns a string
     */
    public get msdyn_commandstatusreason() {
        return this._msdyn_commandstatusreason;
    };
    /**
     * Sets the msdyn_commandstatusreason property value. 
     * @param value Value to set for the msdyn_commandstatusreason property.
     */
    public set msdyn_commandstatusreason(value: string | undefined) {
        this._msdyn_commandstatusreason = value;
    };
    /**
     * Gets the msdyn_CustomerAsset property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_CustomerAsset() {
        return this._msdyn_CustomerAsset;
    };
    /**
     * Sets the msdyn_CustomerAsset property value. 
     * @param value Value to set for the msdyn_CustomerAsset property.
     */
    public set msdyn_CustomerAsset(value: Msdyn_customerasset | undefined) {
        this._msdyn_CustomerAsset = value;
    };
    /**
     * Gets the msdyn_Device property value. 
     * @returns a msdyn_iotdevice
     */
    public get msdyn_Device() {
        return this._msdyn_Device;
    };
    /**
     * Sets the msdyn_Device property value. 
     * @param value Value to set for the msdyn_Device property.
     */
    public set msdyn_Device(value: Msdyn_iotdevice | undefined) {
        this._msdyn_Device = value;
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
     * Gets the msdyn_iotdevicecommand_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_iotdevicecommand_Annotations() {
        return this._msdyn_iotdevicecommand_Annotations;
    };
    /**
     * Sets the msdyn_iotdevicecommand_Annotations property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_Annotations property.
     */
    public set msdyn_iotdevicecommand_Annotations(value: Annotation[] | undefined) {
        this._msdyn_iotdevicecommand_Annotations = value;
    };
    /**
     * Gets the msdyn_iotdevicecommand_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_iotdevicecommand_AsyncOperations() {
        return this._msdyn_iotdevicecommand_AsyncOperations;
    };
    /**
     * Sets the msdyn_iotdevicecommand_AsyncOperations property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_AsyncOperations property.
     */
    public set msdyn_iotdevicecommand_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_iotdevicecommand_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_iotdevicecommand_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_iotdevicecommand_BulkDeleteFailures() {
        return this._msdyn_iotdevicecommand_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_iotdevicecommand_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_BulkDeleteFailures property.
     */
    public set msdyn_iotdevicecommand_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_iotdevicecommand_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_iotdevicecommand_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_iotdevicecommand_connections1() {
        return this._msdyn_iotdevicecommand_connections1;
    };
    /**
     * Sets the msdyn_iotdevicecommand_connections1 property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_connections1 property.
     */
    public set msdyn_iotdevicecommand_connections1(value: Connection[] | undefined) {
        this._msdyn_iotdevicecommand_connections1 = value;
    };
    /**
     * Gets the msdyn_iotdevicecommand_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_iotdevicecommand_connections2() {
        return this._msdyn_iotdevicecommand_connections2;
    };
    /**
     * Sets the msdyn_iotdevicecommand_connections2 property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_connections2 property.
     */
    public set msdyn_iotdevicecommand_connections2(value: Connection[] | undefined) {
        this._msdyn_iotdevicecommand_connections2 = value;
    };
    /**
     * Gets the msdyn_iotdevicecommand_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_iotdevicecommand_DuplicateBaseRecord() {
        return this._msdyn_iotdevicecommand_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_iotdevicecommand_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_DuplicateBaseRecord property.
     */
    public set msdyn_iotdevicecommand_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_iotdevicecommand_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_iotdevicecommand_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_iotdevicecommand_DuplicateMatchingRecord() {
        return this._msdyn_iotdevicecommand_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_iotdevicecommand_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_DuplicateMatchingRecord property.
     */
    public set msdyn_iotdevicecommand_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_iotdevicecommand_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_iotdevicecommand_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_iotdevicecommand_MailboxTrackingFolders() {
        return this._msdyn_iotdevicecommand_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_iotdevicecommand_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_MailboxTrackingFolders property.
     */
    public set msdyn_iotdevicecommand_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_iotdevicecommand_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses() {
        return this._msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_iotdevicecommand_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_iotdevicecommand_ProcessSession() {
        return this._msdyn_iotdevicecommand_ProcessSession;
    };
    /**
     * Sets the msdyn_iotdevicecommand_ProcessSession property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_ProcessSession property.
     */
    public set msdyn_iotdevicecommand_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_iotdevicecommand_ProcessSession = value;
    };
    /**
     * Gets the msdyn_iotdevicecommand_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_iotdevicecommand_SyncErrors() {
        return this._msdyn_iotdevicecommand_SyncErrors;
    };
    /**
     * Sets the msdyn_iotdevicecommand_SyncErrors property value. 
     * @param value Value to set for the msdyn_iotdevicecommand_SyncErrors property.
     */
    public set msdyn_iotdevicecommand_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_iotdevicecommand_SyncErrors = value;
    };
    /**
     * Gets the msdyn_iotdevicecommandid property value. 
     * @returns a string
     */
    public get msdyn_iotdevicecommandid() {
        return this._msdyn_iotdevicecommandid;
    };
    /**
     * Sets the msdyn_iotdevicecommandid property value. 
     * @param value Value to set for the msdyn_iotdevicecommandid property.
     */
    public set msdyn_iotdevicecommandid(value: string | undefined) {
        this._msdyn_iotdevicecommandid = value;
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
     * Gets the msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent() {
        return this._msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent;
    };
    /**
     * Sets the msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent property value. 
     * @param value Value to set for the msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent property.
     */
    public set msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent(value: Msdyn_customerasset[] | undefined) {
        this._msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent = value;
    };
    /**
     * Gets the msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent property value. 
     * @returns a msdyn_iotalert
     */
    public get msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent() {
        return this._msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent;
    };
    /**
     * Sets the msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent property value. 
     * @param value Value to set for the msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent property.
     */
    public set msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent(value: Msdyn_iotalert[] | undefined) {
        this._msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent = value;
    };
    /**
     * Gets the msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent property value. 
     * @returns a msdyn_iotdevice
     */
    public get msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent() {
        return this._msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent;
    };
    /**
     * Sets the msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent property value. 
     * @param value Value to set for the msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent property.
     */
    public set msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent(value: Msdyn_iotdevice[] | undefined) {
        this._msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent = value;
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
     * Gets the msdyn_ParentAlert property value. 
     * @returns a msdyn_iotalert
     */
    public get msdyn_ParentAlert() {
        return this._msdyn_ParentAlert;
    };
    /**
     * Sets the msdyn_ParentAlert property value. 
     * @param value Value to set for the msdyn_ParentAlert property.
     */
    public set msdyn_ParentAlert(value: Msdyn_iotalert | undefined) {
        this._msdyn_ParentAlert = value;
    };
    /**
     * Gets the msdyn_sendtoallconnecteddevices property value. 
     * @returns a boolean
     */
    public get msdyn_sendtoallconnecteddevices() {
        return this._msdyn_sendtoallconnecteddevices;
    };
    /**
     * Sets the msdyn_sendtoallconnecteddevices property value. 
     * @param value Value to set for the msdyn_sendtoallconnecteddevices property.
     */
    public set msdyn_sendtoallconnecteddevices(value: boolean | undefined) {
        this._msdyn_sendtoallconnecteddevices = value;
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
        writer.writeStringValue("_msdyn_command_value", this._msdyn_command_value);
        writer.writeStringValue("_msdyn_customerasset_value", this._msdyn_customerasset_value);
        writer.writeStringValue("_msdyn_device_value", this._msdyn_device_value);
        writer.writeStringValue("_msdyn_parentalert_value", this._msdyn_parentalert_value);
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
        writer.writeObjectValue<Msdyn_iotdevicecommanddefinition>("msdyn_Command", this.msdyn_Command);
        writer.writeNumberValue("msdyn_commandstatus", this.msdyn_commandstatus);
        writer.writeStringValue("msdyn_commandstatusreason", this.msdyn_commandstatusreason);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_CustomerAsset", this.msdyn_CustomerAsset);
        writer.writeObjectValue<Msdyn_iotdevice>("msdyn_Device", this.msdyn_Device);
        writer.writeStringValue("msdyn_deviceid", this.msdyn_deviceid);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_iotdevicecommand_Annotations", this.msdyn_iotdevicecommand_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_iotdevicecommand_AsyncOperations", this.msdyn_iotdevicecommand_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_iotdevicecommand_BulkDeleteFailures", this.msdyn_iotdevicecommand_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_iotdevicecommand_connections1", this.msdyn_iotdevicecommand_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_iotdevicecommand_connections2", this.msdyn_iotdevicecommand_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_iotdevicecommand_DuplicateBaseRecord", this.msdyn_iotdevicecommand_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_iotdevicecommand_DuplicateMatchingRecord", this.msdyn_iotdevicecommand_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_iotdevicecommand_MailboxTrackingFolders", this.msdyn_iotdevicecommand_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses", this.msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_iotdevicecommand_ProcessSession", this.msdyn_iotdevicecommand_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_iotdevicecommand_SyncErrors", this.msdyn_iotdevicecommand_SyncErrors);
        writer.writeStringValue("msdyn_iotdevicecommandid", this.msdyn_iotdevicecommandid);
        writer.writeStringValue("msdyn_message", this.msdyn_message);
        writer.writeCollectionOfObjectValues<Msdyn_customerasset>("msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent", this.msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent);
        writer.writeCollectionOfObjectValues<Msdyn_iotalert>("msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent", this.msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent);
        writer.writeCollectionOfObjectValues<Msdyn_iotdevice>("msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent", this.msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_iotalert>("msdyn_ParentAlert", this.msdyn_ParentAlert);
        writer.writeBooleanValue("msdyn_sendtoallconnecteddevices", this.msdyn_sendtoallconnecteddevices);
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
