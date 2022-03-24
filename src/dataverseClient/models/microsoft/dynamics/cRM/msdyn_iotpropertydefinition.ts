import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_iotdevicecommanddefinitionFromDiscriminatorValue} from './createMsdyn_iotdevicecommanddefinitionFromDiscriminatorValue';
import {createMsdyn_iotdevicepropertyFromDiscriminatorValue} from './createMsdyn_iotdevicepropertyFromDiscriminatorValue';
import {createMsdyn_iotdevicevisualizationconfigurationFromDiscriminatorValue} from './createMsdyn_iotdevicevisualizationconfigurationFromDiscriminatorValue';
import {createMsdyn_iotpropertydefinitionFromDiscriminatorValue} from './createMsdyn_iotpropertydefinitionFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_iotdevicecommanddefinition, Msdyn_iotdeviceproperty, Msdyn_iotdevicevisualizationconfiguration, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_iotpropertydefinition extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_parentproperty_value?: string | undefined;
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
    private _msdyn_additionalproperties?: string | undefined;
    private _msdyn_editable?: boolean | undefined;
    private _msdyn_iotdevicecommandparameters?: Msdyn_iotdevicecommanddefinition[] | undefined;
    private _msdyn_iotdevicevisualizationconfiguration_measurement?: Msdyn_iotdevicevisualizationconfiguration[] | undefined;
    private _msdyn_iotpropertydefinition_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_iotpropertydefinition_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_iotpropertydefinition_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_iotpropertydefinition_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_iotpropertydefinition_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_iotpropertydefinition_ProcessSession?: Processsession[] | undefined;
    private _msdyn_iotpropertydefinition_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_iotpropertydefinitionid?: string | undefined;
    private _msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property?: Msdyn_iotdeviceproperty[] | undefined;
    private _msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter?: Msdyn_iotpropertydefinition[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ParentProperty?: Msdyn_iotpropertydefinition | undefined;
    private _msdyn_type?: number | undefined;
    private _msdyn_unit?: string | undefined;
    private _msdyn_visible?: boolean | undefined;
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
     * Gets the _msdyn_parentproperty_value property value. 
     * @returns a string
     */
    public get _msdyn_parentproperty_value() {
        return this.__msdyn_parentproperty_value;
    };
    /**
     * Sets the _msdyn_parentproperty_value property value. 
     * @param value Value to set for the _msdyn_parentproperty_value property.
     */
    public set _msdyn_parentproperty_value(value: string | undefined) {
        this.__msdyn_parentproperty_value = value;
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
     * Instantiates a new msdyn_iotpropertydefinition and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_parentproperty_value": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition)._msdyn_parentproperty_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_additionalproperties": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_additionalproperties = n.getStringValue(); },
            "msdyn_editable": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_editable = n.getBooleanValue(); },
            "msdyn_iotdevicecommandparameters": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotdevicecommandparameters = n.getCollectionOfObjectValues<Msdyn_iotdevicecommanddefinition>(createMsdyn_iotdevicecommanddefinitionFromDiscriminatorValue); },
            "msdyn_iotdevicevisualizationconfiguration_measurement": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotdevicevisualizationconfiguration_measurement = n.getCollectionOfObjectValues<Msdyn_iotdevicevisualizationconfiguration>(createMsdyn_iotdevicevisualizationconfigurationFromDiscriminatorValue); },
            "msdyn_iotpropertydefinition_AsyncOperations": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotpropertydefinition_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_iotpropertydefinition_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotpropertydefinition_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_iotpropertydefinition_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotpropertydefinition_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_iotpropertydefinition_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotpropertydefinition_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_iotpropertydefinition_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotpropertydefinition_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_iotpropertydefinition_ProcessSession": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotpropertydefinition_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_iotpropertydefinition_SyncErrors": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotpropertydefinition_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_iotpropertydefinitionid": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_iotpropertydefinitionid = n.getStringValue(); },
            "msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property = n.getCollectionOfObjectValues<Msdyn_iotdeviceproperty>(createMsdyn_iotdevicepropertyFromDiscriminatorValue); },
            "msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter = n.getCollectionOfObjectValues<Msdyn_iotpropertydefinition>(createMsdyn_iotpropertydefinitionFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_name = n.getStringValue(); },
            "msdyn_ParentProperty": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_ParentProperty = n.getObjectValue<Msdyn_iotpropertydefinition>(createMsdyn_iotpropertydefinitionFromDiscriminatorValue); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_type = n.getNumberValue(); },
            "msdyn_unit": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_unit = n.getStringValue(); },
            "msdyn_visible": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).msdyn_visible = n.getBooleanValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_iotpropertydefinition).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_additionalproperties property value. 
     * @returns a string
     */
    public get msdyn_additionalproperties() {
        return this._msdyn_additionalproperties;
    };
    /**
     * Sets the msdyn_additionalproperties property value. 
     * @param value Value to set for the msdyn_additionalproperties property.
     */
    public set msdyn_additionalproperties(value: string | undefined) {
        this._msdyn_additionalproperties = value;
    };
    /**
     * Gets the msdyn_editable property value. 
     * @returns a boolean
     */
    public get msdyn_editable() {
        return this._msdyn_editable;
    };
    /**
     * Sets the msdyn_editable property value. 
     * @param value Value to set for the msdyn_editable property.
     */
    public set msdyn_editable(value: boolean | undefined) {
        this._msdyn_editable = value;
    };
    /**
     * Gets the msdyn_iotdevicecommandparameters property value. 
     * @returns a msdyn_iotdevicecommanddefinition
     */
    public get msdyn_iotdevicecommandparameters() {
        return this._msdyn_iotdevicecommandparameters;
    };
    /**
     * Sets the msdyn_iotdevicecommandparameters property value. 
     * @param value Value to set for the msdyn_iotdevicecommandparameters property.
     */
    public set msdyn_iotdevicecommandparameters(value: Msdyn_iotdevicecommanddefinition[] | undefined) {
        this._msdyn_iotdevicecommandparameters = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfiguration_measurement property value. 
     * @returns a msdyn_iotdevicevisualizationconfiguration
     */
    public get msdyn_iotdevicevisualizationconfiguration_measurement() {
        return this._msdyn_iotdevicevisualizationconfiguration_measurement;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfiguration_measurement property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfiguration_measurement property.
     */
    public set msdyn_iotdevicevisualizationconfiguration_measurement(value: Msdyn_iotdevicevisualizationconfiguration[] | undefined) {
        this._msdyn_iotdevicevisualizationconfiguration_measurement = value;
    };
    /**
     * Gets the msdyn_iotpropertydefinition_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_iotpropertydefinition_AsyncOperations() {
        return this._msdyn_iotpropertydefinition_AsyncOperations;
    };
    /**
     * Sets the msdyn_iotpropertydefinition_AsyncOperations property value. 
     * @param value Value to set for the msdyn_iotpropertydefinition_AsyncOperations property.
     */
    public set msdyn_iotpropertydefinition_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_iotpropertydefinition_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_iotpropertydefinition_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_iotpropertydefinition_BulkDeleteFailures() {
        return this._msdyn_iotpropertydefinition_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_iotpropertydefinition_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_iotpropertydefinition_BulkDeleteFailures property.
     */
    public set msdyn_iotpropertydefinition_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_iotpropertydefinition_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_iotpropertydefinition_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_iotpropertydefinition_DuplicateBaseRecord() {
        return this._msdyn_iotpropertydefinition_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_iotpropertydefinition_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_iotpropertydefinition_DuplicateBaseRecord property.
     */
    public set msdyn_iotpropertydefinition_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_iotpropertydefinition_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_iotpropertydefinition_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_iotpropertydefinition_DuplicateMatchingRecord() {
        return this._msdyn_iotpropertydefinition_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_iotpropertydefinition_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_iotpropertydefinition_DuplicateMatchingRecord property.
     */
    public set msdyn_iotpropertydefinition_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_iotpropertydefinition_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_iotpropertydefinition_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_iotpropertydefinition_MailboxTrackingFolders() {
        return this._msdyn_iotpropertydefinition_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_iotpropertydefinition_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_iotpropertydefinition_MailboxTrackingFolders property.
     */
    public set msdyn_iotpropertydefinition_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_iotpropertydefinition_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses() {
        return this._msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_iotpropertydefinition_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_iotpropertydefinition_ProcessSession() {
        return this._msdyn_iotpropertydefinition_ProcessSession;
    };
    /**
     * Sets the msdyn_iotpropertydefinition_ProcessSession property value. 
     * @param value Value to set for the msdyn_iotpropertydefinition_ProcessSession property.
     */
    public set msdyn_iotpropertydefinition_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_iotpropertydefinition_ProcessSession = value;
    };
    /**
     * Gets the msdyn_iotpropertydefinition_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_iotpropertydefinition_SyncErrors() {
        return this._msdyn_iotpropertydefinition_SyncErrors;
    };
    /**
     * Sets the msdyn_iotpropertydefinition_SyncErrors property value. 
     * @param value Value to set for the msdyn_iotpropertydefinition_SyncErrors property.
     */
    public set msdyn_iotpropertydefinition_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_iotpropertydefinition_SyncErrors = value;
    };
    /**
     * Gets the msdyn_iotpropertydefinitionid property value. 
     * @returns a string
     */
    public get msdyn_iotpropertydefinitionid() {
        return this._msdyn_iotpropertydefinitionid;
    };
    /**
     * Sets the msdyn_iotpropertydefinitionid property value. 
     * @param value Value to set for the msdyn_iotpropertydefinitionid property.
     */
    public set msdyn_iotpropertydefinitionid(value: string | undefined) {
        this._msdyn_iotpropertydefinitionid = value;
    };
    /**
     * Gets the msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property property value. 
     * @returns a msdyn_iotdeviceproperty
     */
    public get msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property() {
        return this._msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property;
    };
    /**
     * Sets the msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property property value. 
     * @param value Value to set for the msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property property.
     */
    public set msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property(value: Msdyn_iotdeviceproperty[] | undefined) {
        this._msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property = value;
    };
    /**
     * Gets the msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter property value. 
     * @returns a msdyn_iotpropertydefinition
     */
    public get msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter() {
        return this._msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter;
    };
    /**
     * Sets the msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter property value. 
     * @param value Value to set for the msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter property.
     */
    public set msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter(value: Msdyn_iotpropertydefinition[] | undefined) {
        this._msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter = value;
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
     * Gets the msdyn_ParentProperty property value. 
     * @returns a msdyn_iotpropertydefinition
     */
    public get msdyn_ParentProperty() {
        return this._msdyn_ParentProperty;
    };
    /**
     * Sets the msdyn_ParentProperty property value. 
     * @param value Value to set for the msdyn_ParentProperty property.
     */
    public set msdyn_ParentProperty(value: Msdyn_iotpropertydefinition | undefined) {
        this._msdyn_ParentProperty = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a integer
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: number | undefined) {
        this._msdyn_type = value;
    };
    /**
     * Gets the msdyn_unit property value. 
     * @returns a string
     */
    public get msdyn_unit() {
        return this._msdyn_unit;
    };
    /**
     * Sets the msdyn_unit property value. 
     * @param value Value to set for the msdyn_unit property.
     */
    public set msdyn_unit(value: string | undefined) {
        this._msdyn_unit = value;
    };
    /**
     * Gets the msdyn_visible property value. 
     * @returns a boolean
     */
    public get msdyn_visible() {
        return this._msdyn_visible;
    };
    /**
     * Sets the msdyn_visible property value. 
     * @param value Value to set for the msdyn_visible property.
     */
    public set msdyn_visible(value: boolean | undefined) {
        this._msdyn_visible = value;
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
        writer.writeStringValue("_msdyn_parentproperty_value", this._msdyn_parentproperty_value);
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
        writer.writeStringValue("msdyn_additionalproperties", this.msdyn_additionalproperties);
        writer.writeBooleanValue("msdyn_editable", this.msdyn_editable);
        writer.writeCollectionOfObjectValues<Msdyn_iotdevicecommanddefinition>("msdyn_iotdevicecommandparameters", this.msdyn_iotdevicecommandparameters);
        writer.writeCollectionOfObjectValues<Msdyn_iotdevicevisualizationconfiguration>("msdyn_iotdevicevisualizationconfiguration_measurement", this.msdyn_iotdevicevisualizationconfiguration_measurement);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_iotpropertydefinition_AsyncOperations", this.msdyn_iotpropertydefinition_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_iotpropertydefinition_BulkDeleteFailures", this.msdyn_iotpropertydefinition_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_iotpropertydefinition_DuplicateBaseRecord", this.msdyn_iotpropertydefinition_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_iotpropertydefinition_DuplicateMatchingRecord", this.msdyn_iotpropertydefinition_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_iotpropertydefinition_MailboxTrackingFolders", this.msdyn_iotpropertydefinition_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses", this.msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_iotpropertydefinition_ProcessSession", this.msdyn_iotpropertydefinition_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_iotpropertydefinition_SyncErrors", this.msdyn_iotpropertydefinition_SyncErrors);
        writer.writeStringValue("msdyn_iotpropertydefinitionid", this.msdyn_iotpropertydefinitionid);
        writer.writeCollectionOfObjectValues<Msdyn_iotdeviceproperty>("msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property", this.msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property);
        writer.writeCollectionOfObjectValues<Msdyn_iotpropertydefinition>("msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter", this.msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_iotpropertydefinition>("msdyn_ParentProperty", this.msdyn_ParentProperty);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
        writer.writeStringValue("msdyn_unit", this.msdyn_unit);
        writer.writeBooleanValue("msdyn_visible", this.msdyn_visible);
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
