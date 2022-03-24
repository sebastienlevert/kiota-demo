import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_iotproviderinstanceFromDiscriminatorValue} from './createMsdyn_iotproviderinstanceFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_iotproviderinstance, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_iotsettings extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_defaultiotproviderinstance_value?: string | undefined;
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
    private _msdyn_commandnameproperty?: string | undefined;
    private _msdyn_commandparametersproperty?: string | undefined;
    private _msdyn_DefaultIoTProviderInstance?: Msdyn_iotproviderinstance | undefined;
    private _msdyn_defaultiotsource?: number | undefined;
    private _msdyn_deploymentappurl?: string | undefined;
    private _msdyn_devicedatapullfrequency?: number | undefined;
    private _msdyn_enableiotsuggestions?: boolean | undefined;
    private _msdyn_enhancedbackgroundprocessing?: boolean | undefined;
    private _msdyn_iotalertaggregationrule?: string | undefined;
    private _msdyn_iotsettings_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_iotsettings_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_iotsettings_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_iotsettings_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_iotsettings_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_iotsettings_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_iotsettings_ProcessSession?: Processsession[] | undefined;
    private _msdyn_iotsettings_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_iotsettingsid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_nextdevicedatapulltime?: Date | undefined;
    private _msdyn_scheduleddevicedatapull?: boolean | undefined;
    private _msdyn_showwelcome?: boolean | undefined;
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
     * Gets the _msdyn_defaultiotproviderinstance_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultiotproviderinstance_value() {
        return this.__msdyn_defaultiotproviderinstance_value;
    };
    /**
     * Sets the _msdyn_defaultiotproviderinstance_value property value. 
     * @param value Value to set for the _msdyn_defaultiotproviderinstance_value property.
     */
    public set _msdyn_defaultiotproviderinstance_value(value: string | undefined) {
        this.__msdyn_defaultiotproviderinstance_value = value;
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
     * Instantiates a new msdyn_iotsettings and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_iotsettings)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotsettings)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_iotsettings)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_iotsettings)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_defaultiotproviderinstance_value": (o, n) => { (o as unknown as Msdyn_iotsettings)._msdyn_defaultiotproviderinstance_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_iotsettings)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_iotsettings)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_iotsettings)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_iotsettings)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_iotsettings).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_iotsettings).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_iotsettings).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_iotsettings).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_iotsettings).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_iotsettings).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_iotsettings).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_commandnameproperty": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_commandnameproperty = n.getStringValue(); },
            "msdyn_commandparametersproperty": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_commandparametersproperty = n.getStringValue(); },
            "msdyn_DefaultIoTProviderInstance": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_DefaultIoTProviderInstance = n.getObjectValue<Msdyn_iotproviderinstance>(createMsdyn_iotproviderinstanceFromDiscriminatorValue); },
            "msdyn_defaultiotsource": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_defaultiotsource = n.getNumberValue(); },
            "msdyn_deploymentappurl": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_deploymentappurl = n.getStringValue(); },
            "msdyn_devicedatapullfrequency": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_devicedatapullfrequency = n.getNumberValue(); },
            "msdyn_enableiotsuggestions": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_enableiotsuggestions = n.getBooleanValue(); },
            "msdyn_enhancedbackgroundprocessing": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_enhancedbackgroundprocessing = n.getBooleanValue(); },
            "msdyn_iotalertaggregationrule": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_iotalertaggregationrule = n.getStringValue(); },
            "msdyn_iotsettings_AsyncOperations": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_iotsettings_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_iotsettings_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_iotsettings_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_iotsettings_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_iotsettings_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_iotsettings_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_iotsettings_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_iotsettings_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_iotsettings_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_iotsettings_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_iotsettings_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_iotsettings_ProcessSession": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_iotsettings_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_iotsettings_SyncErrors": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_iotsettings_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_iotsettingsid": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_iotsettingsid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_name = n.getStringValue(); },
            "msdyn_nextdevicedatapulltime": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_nextdevicedatapulltime = n.getDateValue(); },
            "msdyn_scheduleddevicedatapull": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_scheduleddevicedatapull = n.getBooleanValue(); },
            "msdyn_showwelcome": (o, n) => { (o as unknown as Msdyn_iotsettings).msdyn_showwelcome = n.getBooleanValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_iotsettings).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_iotsettings).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_iotsettings).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_iotsettings).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_iotsettings).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_iotsettings).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_iotsettings).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_iotsettings).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_iotsettings).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_iotsettings).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_commandnameproperty property value. 
     * @returns a string
     */
    public get msdyn_commandnameproperty() {
        return this._msdyn_commandnameproperty;
    };
    /**
     * Sets the msdyn_commandnameproperty property value. 
     * @param value Value to set for the msdyn_commandnameproperty property.
     */
    public set msdyn_commandnameproperty(value: string | undefined) {
        this._msdyn_commandnameproperty = value;
    };
    /**
     * Gets the msdyn_commandparametersproperty property value. 
     * @returns a string
     */
    public get msdyn_commandparametersproperty() {
        return this._msdyn_commandparametersproperty;
    };
    /**
     * Sets the msdyn_commandparametersproperty property value. 
     * @param value Value to set for the msdyn_commandparametersproperty property.
     */
    public set msdyn_commandparametersproperty(value: string | undefined) {
        this._msdyn_commandparametersproperty = value;
    };
    /**
     * Gets the msdyn_DefaultIoTProviderInstance property value. 
     * @returns a msdyn_iotproviderinstance
     */
    public get msdyn_DefaultIoTProviderInstance() {
        return this._msdyn_DefaultIoTProviderInstance;
    };
    /**
     * Sets the msdyn_DefaultIoTProviderInstance property value. 
     * @param value Value to set for the msdyn_DefaultIoTProviderInstance property.
     */
    public set msdyn_DefaultIoTProviderInstance(value: Msdyn_iotproviderinstance | undefined) {
        this._msdyn_DefaultIoTProviderInstance = value;
    };
    /**
     * Gets the msdyn_defaultiotsource property value. 
     * @returns a integer
     */
    public get msdyn_defaultiotsource() {
        return this._msdyn_defaultiotsource;
    };
    /**
     * Sets the msdyn_defaultiotsource property value. 
     * @param value Value to set for the msdyn_defaultiotsource property.
     */
    public set msdyn_defaultiotsource(value: number | undefined) {
        this._msdyn_defaultiotsource = value;
    };
    /**
     * Gets the msdyn_deploymentappurl property value. 
     * @returns a string
     */
    public get msdyn_deploymentappurl() {
        return this._msdyn_deploymentappurl;
    };
    /**
     * Sets the msdyn_deploymentappurl property value. 
     * @param value Value to set for the msdyn_deploymentappurl property.
     */
    public set msdyn_deploymentappurl(value: string | undefined) {
        this._msdyn_deploymentappurl = value;
    };
    /**
     * Gets the msdyn_devicedatapullfrequency property value. 
     * @returns a integer
     */
    public get msdyn_devicedatapullfrequency() {
        return this._msdyn_devicedatapullfrequency;
    };
    /**
     * Sets the msdyn_devicedatapullfrequency property value. 
     * @param value Value to set for the msdyn_devicedatapullfrequency property.
     */
    public set msdyn_devicedatapullfrequency(value: number | undefined) {
        this._msdyn_devicedatapullfrequency = value;
    };
    /**
     * Gets the msdyn_enableiotsuggestions property value. 
     * @returns a boolean
     */
    public get msdyn_enableiotsuggestions() {
        return this._msdyn_enableiotsuggestions;
    };
    /**
     * Sets the msdyn_enableiotsuggestions property value. 
     * @param value Value to set for the msdyn_enableiotsuggestions property.
     */
    public set msdyn_enableiotsuggestions(value: boolean | undefined) {
        this._msdyn_enableiotsuggestions = value;
    };
    /**
     * Gets the msdyn_enhancedbackgroundprocessing property value. 
     * @returns a boolean
     */
    public get msdyn_enhancedbackgroundprocessing() {
        return this._msdyn_enhancedbackgroundprocessing;
    };
    /**
     * Sets the msdyn_enhancedbackgroundprocessing property value. 
     * @param value Value to set for the msdyn_enhancedbackgroundprocessing property.
     */
    public set msdyn_enhancedbackgroundprocessing(value: boolean | undefined) {
        this._msdyn_enhancedbackgroundprocessing = value;
    };
    /**
     * Gets the msdyn_iotalertaggregationrule property value. 
     * @returns a string
     */
    public get msdyn_iotalertaggregationrule() {
        return this._msdyn_iotalertaggregationrule;
    };
    /**
     * Sets the msdyn_iotalertaggregationrule property value. 
     * @param value Value to set for the msdyn_iotalertaggregationrule property.
     */
    public set msdyn_iotalertaggregationrule(value: string | undefined) {
        this._msdyn_iotalertaggregationrule = value;
    };
    /**
     * Gets the msdyn_iotsettings_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_iotsettings_AsyncOperations() {
        return this._msdyn_iotsettings_AsyncOperations;
    };
    /**
     * Sets the msdyn_iotsettings_AsyncOperations property value. 
     * @param value Value to set for the msdyn_iotsettings_AsyncOperations property.
     */
    public set msdyn_iotsettings_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_iotsettings_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_iotsettings_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_iotsettings_BulkDeleteFailures() {
        return this._msdyn_iotsettings_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_iotsettings_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_iotsettings_BulkDeleteFailures property.
     */
    public set msdyn_iotsettings_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_iotsettings_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_iotsettings_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_iotsettings_DuplicateBaseRecord() {
        return this._msdyn_iotsettings_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_iotsettings_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_iotsettings_DuplicateBaseRecord property.
     */
    public set msdyn_iotsettings_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_iotsettings_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_iotsettings_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_iotsettings_DuplicateMatchingRecord() {
        return this._msdyn_iotsettings_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_iotsettings_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_iotsettings_DuplicateMatchingRecord property.
     */
    public set msdyn_iotsettings_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_iotsettings_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_iotsettings_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_iotsettings_MailboxTrackingFolders() {
        return this._msdyn_iotsettings_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_iotsettings_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_iotsettings_MailboxTrackingFolders property.
     */
    public set msdyn_iotsettings_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_iotsettings_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_iotsettings_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_iotsettings_PrincipalObjectAttributeAccesses() {
        return this._msdyn_iotsettings_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_iotsettings_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_iotsettings_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_iotsettings_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_iotsettings_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_iotsettings_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_iotsettings_ProcessSession() {
        return this._msdyn_iotsettings_ProcessSession;
    };
    /**
     * Sets the msdyn_iotsettings_ProcessSession property value. 
     * @param value Value to set for the msdyn_iotsettings_ProcessSession property.
     */
    public set msdyn_iotsettings_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_iotsettings_ProcessSession = value;
    };
    /**
     * Gets the msdyn_iotsettings_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_iotsettings_SyncErrors() {
        return this._msdyn_iotsettings_SyncErrors;
    };
    /**
     * Sets the msdyn_iotsettings_SyncErrors property value. 
     * @param value Value to set for the msdyn_iotsettings_SyncErrors property.
     */
    public set msdyn_iotsettings_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_iotsettings_SyncErrors = value;
    };
    /**
     * Gets the msdyn_iotsettingsid property value. 
     * @returns a string
     */
    public get msdyn_iotsettingsid() {
        return this._msdyn_iotsettingsid;
    };
    /**
     * Sets the msdyn_iotsettingsid property value. 
     * @param value Value to set for the msdyn_iotsettingsid property.
     */
    public set msdyn_iotsettingsid(value: string | undefined) {
        this._msdyn_iotsettingsid = value;
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
     * Gets the msdyn_nextdevicedatapulltime property value. 
     * @returns a Date
     */
    public get msdyn_nextdevicedatapulltime() {
        return this._msdyn_nextdevicedatapulltime;
    };
    /**
     * Sets the msdyn_nextdevicedatapulltime property value. 
     * @param value Value to set for the msdyn_nextdevicedatapulltime property.
     */
    public set msdyn_nextdevicedatapulltime(value: Date | undefined) {
        this._msdyn_nextdevicedatapulltime = value;
    };
    /**
     * Gets the msdyn_scheduleddevicedatapull property value. 
     * @returns a boolean
     */
    public get msdyn_scheduleddevicedatapull() {
        return this._msdyn_scheduleddevicedatapull;
    };
    /**
     * Sets the msdyn_scheduleddevicedatapull property value. 
     * @param value Value to set for the msdyn_scheduleddevicedatapull property.
     */
    public set msdyn_scheduleddevicedatapull(value: boolean | undefined) {
        this._msdyn_scheduleddevicedatapull = value;
    };
    /**
     * Gets the msdyn_showwelcome property value. 
     * @returns a boolean
     */
    public get msdyn_showwelcome() {
        return this._msdyn_showwelcome;
    };
    /**
     * Sets the msdyn_showwelcome property value. 
     * @param value Value to set for the msdyn_showwelcome property.
     */
    public set msdyn_showwelcome(value: boolean | undefined) {
        this._msdyn_showwelcome = value;
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
        writer.writeStringValue("_msdyn_defaultiotproviderinstance_value", this._msdyn_defaultiotproviderinstance_value);
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
        writer.writeStringValue("msdyn_commandnameproperty", this.msdyn_commandnameproperty);
        writer.writeStringValue("msdyn_commandparametersproperty", this.msdyn_commandparametersproperty);
        writer.writeObjectValue<Msdyn_iotproviderinstance>("msdyn_DefaultIoTProviderInstance", this.msdyn_DefaultIoTProviderInstance);
        writer.writeNumberValue("msdyn_defaultiotsource", this.msdyn_defaultiotsource);
        writer.writeStringValue("msdyn_deploymentappurl", this.msdyn_deploymentappurl);
        writer.writeNumberValue("msdyn_devicedatapullfrequency", this.msdyn_devicedatapullfrequency);
        writer.writeBooleanValue("msdyn_enableiotsuggestions", this.msdyn_enableiotsuggestions);
        writer.writeBooleanValue("msdyn_enhancedbackgroundprocessing", this.msdyn_enhancedbackgroundprocessing);
        writer.writeStringValue("msdyn_iotalertaggregationrule", this.msdyn_iotalertaggregationrule);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_iotsettings_AsyncOperations", this.msdyn_iotsettings_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_iotsettings_BulkDeleteFailures", this.msdyn_iotsettings_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_iotsettings_DuplicateBaseRecord", this.msdyn_iotsettings_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_iotsettings_DuplicateMatchingRecord", this.msdyn_iotsettings_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_iotsettings_MailboxTrackingFolders", this.msdyn_iotsettings_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_iotsettings_PrincipalObjectAttributeAccesses", this.msdyn_iotsettings_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_iotsettings_ProcessSession", this.msdyn_iotsettings_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_iotsettings_SyncErrors", this.msdyn_iotsettings_SyncErrors);
        writer.writeStringValue("msdyn_iotsettingsid", this.msdyn_iotsettingsid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeDateValue("msdyn_nextdevicedatapulltime", this.msdyn_nextdevicedatapulltime);
        writer.writeBooleanValue("msdyn_scheduleddevicedatapull", this.msdyn_scheduleddevicedatapull);
        writer.writeBooleanValue("msdyn_showwelcome", this.msdyn_showwelcome);
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
