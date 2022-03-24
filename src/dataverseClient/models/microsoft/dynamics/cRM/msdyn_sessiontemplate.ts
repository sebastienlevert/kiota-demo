import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_appconfigurationFromDiscriminatorValue} from './createMsdyn_appconfigurationFromDiscriminatorValue';
import {createMsdyn_applicationtabtemplateFromDiscriminatorValue} from './createMsdyn_applicationtabtemplateFromDiscriminatorValue';
import {createMsdyn_productivityagentscriptFromDiscriminatorValue} from './createMsdyn_productivityagentscriptFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_appconfiguration, Msdyn_applicationtabtemplate, Msdyn_productivityagentscript, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_sessiontemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_anchortab_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_anchortab?: Msdyn_applicationtabtemplate | undefined;
    private _msdyn_appconfiguration_sessiontemplate?: Msdyn_appconfiguration[] | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_enablebuildexpression?: boolean | undefined;
    private _msdyn_entity?: string | undefined;
    private _msdyn_expressiondata?: string | undefined;
    private _msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat?: Msdyn_productivityagentscript[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_panelstate?: number | undefined;
    private _msdyn_sessiontemplate_applicationtab?: Msdyn_applicationtabtemplate[] | undefined;
    private _msdyn_sessiontemplate_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_sessiontemplate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_sessiontemplate_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sessiontemplate_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_sessiontemplate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_sessiontemplate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_sessiontemplate_ProcessSession?: Processsession[] | undefined;
    private _msdyn_sessiontemplate_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_sessiontemplateid?: string | undefined;
    private _msdyn_sessiontype?: number | undefined;
    private _msdyn_title?: string | undefined;
    private _msdyn_type?: boolean | undefined;
    private _msdyn_uniquename?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the _msdyn_anchortab_value property value. 
     * @returns a string
     */
    public get _msdyn_anchortab_value() {
        return this.__msdyn_anchortab_value;
    };
    /**
     * Sets the _msdyn_anchortab_value property value. 
     * @param value Value to set for the _msdyn_anchortab_value property.
     */
    public set _msdyn_anchortab_value(value: string | undefined) {
        this.__msdyn_anchortab_value = value;
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
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new msdyn_sessiontemplate and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_sessiontemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sessiontemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_sessiontemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_sessiontemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_anchortab_value": (o, n) => { (o as unknown as Msdyn_sessiontemplate)._msdyn_anchortab_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_sessiontemplate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_sessiontemplate)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_sessiontemplate)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_sessiontemplate)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_sessiontemplate).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_sessiontemplate).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_sessiontemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_sessiontemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_sessiontemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_sessiontemplate).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_sessiontemplate).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_sessiontemplate).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_sessiontemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_sessiontemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_sessiontemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_anchortab": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_anchortab = n.getObjectValue<Msdyn_applicationtabtemplate>(createMsdyn_applicationtabtemplateFromDiscriminatorValue); },
            "msdyn_appconfiguration_sessiontemplate": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_appconfiguration_sessiontemplate = n.getCollectionOfObjectValues<Msdyn_appconfiguration>(createMsdyn_appconfigurationFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_description = n.getStringValue(); },
            "msdyn_enablebuildexpression": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_enablebuildexpression = n.getBooleanValue(); },
            "msdyn_entity": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_entity = n.getStringValue(); },
            "msdyn_expressiondata": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_expressiondata = n.getStringValue(); },
            "msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat = n.getCollectionOfObjectValues<Msdyn_productivityagentscript>(createMsdyn_productivityagentscriptFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_name = n.getStringValue(); },
            "msdyn_panelstate": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_panelstate = n.getNumberValue(); },
            "msdyn_sessiontemplate_applicationtab": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontemplate_applicationtab = n.getCollectionOfObjectValues<Msdyn_applicationtabtemplate>(createMsdyn_applicationtabtemplateFromDiscriminatorValue); },
            "msdyn_sessiontemplate_AsyncOperations": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontemplate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_sessiontemplate_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontemplate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_sessiontemplate_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontemplate_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sessiontemplate_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontemplate_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_sessiontemplate_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontemplate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_sessiontemplate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontemplate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_sessiontemplate_ProcessSession": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontemplate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_sessiontemplate_SyncErrors": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_sessiontemplateid": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontemplateid = n.getStringValue(); },
            "msdyn_sessiontype": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_sessiontype = n.getNumberValue(); },
            "msdyn_title": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_title = n.getStringValue(); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_type = n.getBooleanValue(); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_sessiontemplate).msdyn_uniquename = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_sessiontemplate).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_sessiontemplate).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_sessiontemplate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_sessiontemplate).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_sessiontemplate).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_sessiontemplate).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_sessiontemplate).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_sessiontemplate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_sessiontemplate).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_sessiontemplate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_sessiontemplate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_sessiontemplate).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the msdyn_anchortab property value. 
     * @returns a msdyn_applicationtabtemplate
     */
    public get msdyn_anchortab() {
        return this._msdyn_anchortab;
    };
    /**
     * Sets the msdyn_anchortab property value. 
     * @param value Value to set for the msdyn_anchortab property.
     */
    public set msdyn_anchortab(value: Msdyn_applicationtabtemplate | undefined) {
        this._msdyn_anchortab = value;
    };
    /**
     * Gets the msdyn_appconfiguration_sessiontemplate property value. 
     * @returns a msdyn_appconfiguration
     */
    public get msdyn_appconfiguration_sessiontemplate() {
        return this._msdyn_appconfiguration_sessiontemplate;
    };
    /**
     * Sets the msdyn_appconfiguration_sessiontemplate property value. 
     * @param value Value to set for the msdyn_appconfiguration_sessiontemplate property.
     */
    public set msdyn_appconfiguration_sessiontemplate(value: Msdyn_appconfiguration[] | undefined) {
        this._msdyn_appconfiguration_sessiontemplate = value;
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
     * Gets the msdyn_enablebuildexpression property value. 
     * @returns a boolean
     */
    public get msdyn_enablebuildexpression() {
        return this._msdyn_enablebuildexpression;
    };
    /**
     * Sets the msdyn_enablebuildexpression property value. 
     * @param value Value to set for the msdyn_enablebuildexpression property.
     */
    public set msdyn_enablebuildexpression(value: boolean | undefined) {
        this._msdyn_enablebuildexpression = value;
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
     * Gets the msdyn_expressiondata property value. 
     * @returns a string
     */
    public get msdyn_expressiondata() {
        return this._msdyn_expressiondata;
    };
    /**
     * Sets the msdyn_expressiondata property value. 
     * @param value Value to set for the msdyn_expressiondata property.
     */
    public set msdyn_expressiondata(value: string | undefined) {
        this._msdyn_expressiondata = value;
    };
    /**
     * Gets the msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat property value. 
     * @returns a msdyn_productivityagentscript
     */
    public get msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat() {
        return this._msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat;
    };
    /**
     * Sets the msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat property value. 
     * @param value Value to set for the msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat property.
     */
    public set msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat(value: Msdyn_productivityagentscript[] | undefined) {
        this._msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat = value;
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
     * Gets the msdyn_panelstate property value. 
     * @returns a integer
     */
    public get msdyn_panelstate() {
        return this._msdyn_panelstate;
    };
    /**
     * Sets the msdyn_panelstate property value. 
     * @param value Value to set for the msdyn_panelstate property.
     */
    public set msdyn_panelstate(value: number | undefined) {
        this._msdyn_panelstate = value;
    };
    /**
     * Gets the msdyn_sessiontemplate_applicationtab property value. 
     * @returns a msdyn_applicationtabtemplate
     */
    public get msdyn_sessiontemplate_applicationtab() {
        return this._msdyn_sessiontemplate_applicationtab;
    };
    /**
     * Sets the msdyn_sessiontemplate_applicationtab property value. 
     * @param value Value to set for the msdyn_sessiontemplate_applicationtab property.
     */
    public set msdyn_sessiontemplate_applicationtab(value: Msdyn_applicationtabtemplate[] | undefined) {
        this._msdyn_sessiontemplate_applicationtab = value;
    };
    /**
     * Gets the msdyn_sessiontemplate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_sessiontemplate_AsyncOperations() {
        return this._msdyn_sessiontemplate_AsyncOperations;
    };
    /**
     * Sets the msdyn_sessiontemplate_AsyncOperations property value. 
     * @param value Value to set for the msdyn_sessiontemplate_AsyncOperations property.
     */
    public set msdyn_sessiontemplate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_sessiontemplate_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_sessiontemplate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_sessiontemplate_BulkDeleteFailures() {
        return this._msdyn_sessiontemplate_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_sessiontemplate_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_sessiontemplate_BulkDeleteFailures property.
     */
    public set msdyn_sessiontemplate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_sessiontemplate_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_sessiontemplate_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sessiontemplate_DuplicateBaseRecord() {
        return this._msdyn_sessiontemplate_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_sessiontemplate_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_sessiontemplate_DuplicateBaseRecord property.
     */
    public set msdyn_sessiontemplate_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sessiontemplate_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_sessiontemplate_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_sessiontemplate_DuplicateMatchingRecord() {
        return this._msdyn_sessiontemplate_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_sessiontemplate_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_sessiontemplate_DuplicateMatchingRecord property.
     */
    public set msdyn_sessiontemplate_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_sessiontemplate_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_sessiontemplate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_sessiontemplate_MailboxTrackingFolders() {
        return this._msdyn_sessiontemplate_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_sessiontemplate_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_sessiontemplate_MailboxTrackingFolders property.
     */
    public set msdyn_sessiontemplate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_sessiontemplate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_sessiontemplate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_sessiontemplate_PrincipalObjectAttributeAccesses() {
        return this._msdyn_sessiontemplate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_sessiontemplate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_sessiontemplate_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_sessiontemplate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_sessiontemplate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_sessiontemplate_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_sessiontemplate_ProcessSession() {
        return this._msdyn_sessiontemplate_ProcessSession;
    };
    /**
     * Sets the msdyn_sessiontemplate_ProcessSession property value. 
     * @param value Value to set for the msdyn_sessiontemplate_ProcessSession property.
     */
    public set msdyn_sessiontemplate_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_sessiontemplate_ProcessSession = value;
    };
    /**
     * Gets the msdyn_sessiontemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_sessiontemplate_SyncErrors() {
        return this._msdyn_sessiontemplate_SyncErrors;
    };
    /**
     * Sets the msdyn_sessiontemplate_SyncErrors property value. 
     * @param value Value to set for the msdyn_sessiontemplate_SyncErrors property.
     */
    public set msdyn_sessiontemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_sessiontemplate_SyncErrors = value;
    };
    /**
     * Gets the msdyn_sessiontemplateid property value. 
     * @returns a string
     */
    public get msdyn_sessiontemplateid() {
        return this._msdyn_sessiontemplateid;
    };
    /**
     * Sets the msdyn_sessiontemplateid property value. 
     * @param value Value to set for the msdyn_sessiontemplateid property.
     */
    public set msdyn_sessiontemplateid(value: string | undefined) {
        this._msdyn_sessiontemplateid = value;
    };
    /**
     * Gets the msdyn_sessiontype property value. 
     * @returns a integer
     */
    public get msdyn_sessiontype() {
        return this._msdyn_sessiontype;
    };
    /**
     * Sets the msdyn_sessiontype property value. 
     * @param value Value to set for the msdyn_sessiontype property.
     */
    public set msdyn_sessiontype(value: number | undefined) {
        this._msdyn_sessiontype = value;
    };
    /**
     * Gets the msdyn_title property value. 
     * @returns a string
     */
    public get msdyn_title() {
        return this._msdyn_title;
    };
    /**
     * Sets the msdyn_title property value. 
     * @param value Value to set for the msdyn_title property.
     */
    public set msdyn_title(value: string | undefined) {
        this._msdyn_title = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a boolean
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: boolean | undefined) {
        this._msdyn_type = value;
    };
    /**
     * Gets the msdyn_uniquename property value. 
     * @returns a string
     */
    public get msdyn_uniquename() {
        return this._msdyn_uniquename;
    };
    /**
     * Sets the msdyn_uniquename property value. 
     * @param value Value to set for the msdyn_uniquename property.
     */
    public set msdyn_uniquename(value: string | undefined) {
        this._msdyn_uniquename = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
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
        writer.writeStringValue("_msdyn_anchortab_value", this._msdyn_anchortab_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_applicationtabtemplate>("msdyn_anchortab", this.msdyn_anchortab);
        writer.writeCollectionOfObjectValues<Msdyn_appconfiguration>("msdyn_appconfiguration_sessiontemplate", this.msdyn_appconfiguration_sessiontemplate);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeBooleanValue("msdyn_enablebuildexpression", this.msdyn_enablebuildexpression);
        writer.writeStringValue("msdyn_entity", this.msdyn_entity);
        writer.writeStringValue("msdyn_expressiondata", this.msdyn_expressiondata);
        writer.writeCollectionOfObjectValues<Msdyn_productivityagentscript>("msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat", this.msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_panelstate", this.msdyn_panelstate);
        writer.writeCollectionOfObjectValues<Msdyn_applicationtabtemplate>("msdyn_sessiontemplate_applicationtab", this.msdyn_sessiontemplate_applicationtab);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_sessiontemplate_AsyncOperations", this.msdyn_sessiontemplate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_sessiontemplate_BulkDeleteFailures", this.msdyn_sessiontemplate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sessiontemplate_DuplicateBaseRecord", this.msdyn_sessiontemplate_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_sessiontemplate_DuplicateMatchingRecord", this.msdyn_sessiontemplate_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_sessiontemplate_MailboxTrackingFolders", this.msdyn_sessiontemplate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_sessiontemplate_PrincipalObjectAttributeAccesses", this.msdyn_sessiontemplate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_sessiontemplate_ProcessSession", this.msdyn_sessiontemplate_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_sessiontemplate_SyncErrors", this.msdyn_sessiontemplate_SyncErrors);
        writer.writeStringValue("msdyn_sessiontemplateid", this.msdyn_sessiontemplateid);
        writer.writeNumberValue("msdyn_sessiontype", this.msdyn_sessiontype);
        writer.writeStringValue("msdyn_title", this.msdyn_title);
        writer.writeBooleanValue("msdyn_type", this.msdyn_type);
        writer.writeStringValue("msdyn_uniquename", this.msdyn_uniquename);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
