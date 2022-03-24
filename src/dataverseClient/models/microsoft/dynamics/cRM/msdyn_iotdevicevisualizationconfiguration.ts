import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_iotdevicecategoryFromDiscriminatorValue} from './createMsdyn_iotdevicecategoryFromDiscriminatorValue';
import {createMsdyn_iotdeviceFromDiscriminatorValue} from './createMsdyn_iotdeviceFromDiscriminatorValue';
import {createMsdyn_iotpropertydefinitionFromDiscriminatorValue} from './createMsdyn_iotpropertydefinitionFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_iotdevice, Msdyn_iotdevicecategory, Msdyn_iotpropertydefinition, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_iotdevicevisualizationconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_iotdevice_value?: string | undefined;
    private __msdyn_iotdevicecategory_value?: string | undefined;
    private __msdyn_measurement_value?: string | undefined;
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
    private _msdyn_actionname?: string | undefined;
    private _msdyn_aggregation?: number | undefined;
    private _msdyn_deviceevent?: number | undefined;
    private _msdyn_IoTDevice?: Msdyn_iotdevice | undefined;
    private _msdyn_IoTDeviceCategory?: Msdyn_iotdevicecategory | undefined;
    private _msdyn_iotdevicevisualizationconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_iotdevicevisualizationconfiguration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_iotdevicevisualizationconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_iotdevicevisualizationconfigurationid?: string | undefined;
    private _msdyn_Measurement?: Msdyn_iotpropertydefinition | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_position?: number | undefined;
    private _msdyn_timerangetype?: number | undefined;
    private _msdyn_timerangevalue?: number | undefined;
    private _msdyn_visualizationconfigurationtype?: number | undefined;
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
     * Gets the _msdyn_iotdevice_value property value. 
     * @returns a string
     */
    public get _msdyn_iotdevice_value() {
        return this.__msdyn_iotdevice_value;
    };
    /**
     * Sets the _msdyn_iotdevice_value property value. 
     * @param value Value to set for the _msdyn_iotdevice_value property.
     */
    public set _msdyn_iotdevice_value(value: string | undefined) {
        this.__msdyn_iotdevice_value = value;
    };
    /**
     * Gets the _msdyn_iotdevicecategory_value property value. 
     * @returns a string
     */
    public get _msdyn_iotdevicecategory_value() {
        return this.__msdyn_iotdevicecategory_value;
    };
    /**
     * Sets the _msdyn_iotdevicecategory_value property value. 
     * @param value Value to set for the _msdyn_iotdevicecategory_value property.
     */
    public set _msdyn_iotdevicecategory_value(value: string | undefined) {
        this.__msdyn_iotdevicecategory_value = value;
    };
    /**
     * Gets the _msdyn_measurement_value property value. 
     * @returns a string
     */
    public get _msdyn_measurement_value() {
        return this.__msdyn_measurement_value;
    };
    /**
     * Sets the _msdyn_measurement_value property value. 
     * @param value Value to set for the _msdyn_measurement_value property.
     */
    public set _msdyn_measurement_value(value: string | undefined) {
        this.__msdyn_measurement_value = value;
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
     * Instantiates a new msdyn_iotdevicevisualizationconfiguration and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_iotdevice_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._msdyn_iotdevice_value = n.getStringValue(); },
            "_msdyn_iotdevicecategory_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._msdyn_iotdevicecategory_value = n.getStringValue(); },
            "_msdyn_measurement_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._msdyn_measurement_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_actionname": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_actionname = n.getStringValue(); },
            "msdyn_aggregation": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_aggregation = n.getNumberValue(); },
            "msdyn_deviceevent": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_deviceevent = n.getNumberValue(); },
            "msdyn_IoTDevice": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_IoTDevice = n.getObjectValue<Msdyn_iotdevice>(createMsdyn_iotdeviceFromDiscriminatorValue); },
            "msdyn_IoTDeviceCategory": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_IoTDeviceCategory = n.getObjectValue<Msdyn_iotdevicecategory>(createMsdyn_iotdevicecategoryFromDiscriminatorValue); },
            "msdyn_iotdevicevisualizationconfiguration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_iotdevicevisualizationconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_iotdevicevisualizationconfiguration_ProcessSession": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_iotdevicevisualizationconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_iotdevicevisualizationconfiguration_SyncErrors": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_iotdevicevisualizationconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_iotdevicevisualizationconfigurationid": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_iotdevicevisualizationconfigurationid = n.getStringValue(); },
            "msdyn_Measurement": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_Measurement = n.getObjectValue<Msdyn_iotpropertydefinition>(createMsdyn_iotpropertydefinitionFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_name = n.getStringValue(); },
            "msdyn_position": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_position = n.getNumberValue(); },
            "msdyn_timerangetype": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_timerangetype = n.getNumberValue(); },
            "msdyn_timerangevalue": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_timerangevalue = n.getNumberValue(); },
            "msdyn_visualizationconfigurationtype": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).msdyn_visualizationconfigurationtype = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_iotdevicevisualizationconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_actionname property value. 
     * @returns a string
     */
    public get msdyn_actionname() {
        return this._msdyn_actionname;
    };
    /**
     * Sets the msdyn_actionname property value. 
     * @param value Value to set for the msdyn_actionname property.
     */
    public set msdyn_actionname(value: string | undefined) {
        this._msdyn_actionname = value;
    };
    /**
     * Gets the msdyn_aggregation property value. 
     * @returns a integer
     */
    public get msdyn_aggregation() {
        return this._msdyn_aggregation;
    };
    /**
     * Sets the msdyn_aggregation property value. 
     * @param value Value to set for the msdyn_aggregation property.
     */
    public set msdyn_aggregation(value: number | undefined) {
        this._msdyn_aggregation = value;
    };
    /**
     * Gets the msdyn_deviceevent property value. 
     * @returns a integer
     */
    public get msdyn_deviceevent() {
        return this._msdyn_deviceevent;
    };
    /**
     * Sets the msdyn_deviceevent property value. 
     * @param value Value to set for the msdyn_deviceevent property.
     */
    public set msdyn_deviceevent(value: number | undefined) {
        this._msdyn_deviceevent = value;
    };
    /**
     * Gets the msdyn_IoTDevice property value. 
     * @returns a msdyn_iotdevice
     */
    public get msdyn_IoTDevice() {
        return this._msdyn_IoTDevice;
    };
    /**
     * Sets the msdyn_IoTDevice property value. 
     * @param value Value to set for the msdyn_IoTDevice property.
     */
    public set msdyn_IoTDevice(value: Msdyn_iotdevice | undefined) {
        this._msdyn_IoTDevice = value;
    };
    /**
     * Gets the msdyn_IoTDeviceCategory property value. 
     * @returns a msdyn_iotdevicecategory
     */
    public get msdyn_IoTDeviceCategory() {
        return this._msdyn_IoTDeviceCategory;
    };
    /**
     * Sets the msdyn_IoTDeviceCategory property value. 
     * @param value Value to set for the msdyn_IoTDeviceCategory property.
     */
    public set msdyn_IoTDeviceCategory(value: Msdyn_iotdevicecategory | undefined) {
        this._msdyn_IoTDeviceCategory = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_iotdevicevisualizationconfiguration_AsyncOperations() {
        return this._msdyn_iotdevicevisualizationconfiguration_AsyncOperations;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfiguration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfiguration_AsyncOperations property.
     */
    public set msdyn_iotdevicevisualizationconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_iotdevicevisualizationconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures() {
        return this._msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures property.
     */
    public set msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord() {
        return this._msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord property.
     */
    public set msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord() {
        return this._msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord property.
     */
    public set msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders() {
        return this._msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders property.
     */
    public set msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_iotdevicevisualizationconfiguration_ProcessSession() {
        return this._msdyn_iotdevicevisualizationconfiguration_ProcessSession;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfiguration_ProcessSession property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfiguration_ProcessSession property.
     */
    public set msdyn_iotdevicevisualizationconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_iotdevicevisualizationconfiguration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_iotdevicevisualizationconfiguration_SyncErrors() {
        return this._msdyn_iotdevicevisualizationconfiguration_SyncErrors;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfiguration_SyncErrors property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfiguration_SyncErrors property.
     */
    public set msdyn_iotdevicevisualizationconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_iotdevicevisualizationconfiguration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_iotdevicevisualizationconfigurationid property value. 
     * @returns a string
     */
    public get msdyn_iotdevicevisualizationconfigurationid() {
        return this._msdyn_iotdevicevisualizationconfigurationid;
    };
    /**
     * Sets the msdyn_iotdevicevisualizationconfigurationid property value. 
     * @param value Value to set for the msdyn_iotdevicevisualizationconfigurationid property.
     */
    public set msdyn_iotdevicevisualizationconfigurationid(value: string | undefined) {
        this._msdyn_iotdevicevisualizationconfigurationid = value;
    };
    /**
     * Gets the msdyn_Measurement property value. 
     * @returns a msdyn_iotpropertydefinition
     */
    public get msdyn_Measurement() {
        return this._msdyn_Measurement;
    };
    /**
     * Sets the msdyn_Measurement property value. 
     * @param value Value to set for the msdyn_Measurement property.
     */
    public set msdyn_Measurement(value: Msdyn_iotpropertydefinition | undefined) {
        this._msdyn_Measurement = value;
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
     * Gets the msdyn_position property value. 
     * @returns a integer
     */
    public get msdyn_position() {
        return this._msdyn_position;
    };
    /**
     * Sets the msdyn_position property value. 
     * @param value Value to set for the msdyn_position property.
     */
    public set msdyn_position(value: number | undefined) {
        this._msdyn_position = value;
    };
    /**
     * Gets the msdyn_timerangetype property value. 
     * @returns a integer
     */
    public get msdyn_timerangetype() {
        return this._msdyn_timerangetype;
    };
    /**
     * Sets the msdyn_timerangetype property value. 
     * @param value Value to set for the msdyn_timerangetype property.
     */
    public set msdyn_timerangetype(value: number | undefined) {
        this._msdyn_timerangetype = value;
    };
    /**
     * Gets the msdyn_timerangevalue property value. 
     * @returns a integer
     */
    public get msdyn_timerangevalue() {
        return this._msdyn_timerangevalue;
    };
    /**
     * Sets the msdyn_timerangevalue property value. 
     * @param value Value to set for the msdyn_timerangevalue property.
     */
    public set msdyn_timerangevalue(value: number | undefined) {
        this._msdyn_timerangevalue = value;
    };
    /**
     * Gets the msdyn_visualizationconfigurationtype property value. 
     * @returns a integer
     */
    public get msdyn_visualizationconfigurationtype() {
        return this._msdyn_visualizationconfigurationtype;
    };
    /**
     * Sets the msdyn_visualizationconfigurationtype property value. 
     * @param value Value to set for the msdyn_visualizationconfigurationtype property.
     */
    public set msdyn_visualizationconfigurationtype(value: number | undefined) {
        this._msdyn_visualizationconfigurationtype = value;
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
        writer.writeStringValue("_msdyn_iotdevice_value", this._msdyn_iotdevice_value);
        writer.writeStringValue("_msdyn_iotdevicecategory_value", this._msdyn_iotdevicecategory_value);
        writer.writeStringValue("_msdyn_measurement_value", this._msdyn_measurement_value);
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
        writer.writeStringValue("msdyn_actionname", this.msdyn_actionname);
        writer.writeNumberValue("msdyn_aggregation", this.msdyn_aggregation);
        writer.writeNumberValue("msdyn_deviceevent", this.msdyn_deviceevent);
        writer.writeObjectValue<Msdyn_iotdevice>("msdyn_IoTDevice", this.msdyn_IoTDevice);
        writer.writeObjectValue<Msdyn_iotdevicecategory>("msdyn_IoTDeviceCategory", this.msdyn_IoTDeviceCategory);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_iotdevicevisualizationconfiguration_AsyncOperations", this.msdyn_iotdevicevisualizationconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures", this.msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord", this.msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord", this.msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders", this.msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses", this.msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_iotdevicevisualizationconfiguration_ProcessSession", this.msdyn_iotdevicevisualizationconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_iotdevicevisualizationconfiguration_SyncErrors", this.msdyn_iotdevicevisualizationconfiguration_SyncErrors);
        writer.writeStringValue("msdyn_iotdevicevisualizationconfigurationid", this.msdyn_iotdevicevisualizationconfigurationid);
        writer.writeObjectValue<Msdyn_iotpropertydefinition>("msdyn_Measurement", this.msdyn_Measurement);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_position", this.msdyn_position);
        writer.writeNumberValue("msdyn_timerangetype", this.msdyn_timerangetype);
        writer.writeNumberValue("msdyn_timerangevalue", this.msdyn_timerangevalue);
        writer.writeNumberValue("msdyn_visualizationconfigurationtype", this.msdyn_visualizationconfigurationtype);
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
