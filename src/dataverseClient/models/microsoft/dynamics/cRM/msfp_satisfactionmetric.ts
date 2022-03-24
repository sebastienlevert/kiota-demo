import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_alertruleFromDiscriminatorValue} from './createMsfp_alertruleFromDiscriminatorValue';
import {createMsfp_projectFromDiscriminatorValue} from './createMsfp_projectFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msfp_alert, Msfp_alertrule, Msfp_project, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msfp_satisfactionmetric extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msfp_project_value?: string | undefined;
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
    private _msfp_description?: string | undefined;
    private _msfp_historicalcomputedvalue?: string | undefined;
    private _msfp_issystemkpi?: boolean | undefined;
    private _msfp_lastcomputedon?: Date | undefined;
    private _msfp_lastcomputedvalue?: string | undefined;
    private _msfp_maximumvalue?: number | undefined;
    private _msfp_minimumvalue?: number | undefined;
    private _msfp_msfp_satisfactionmetric_msfp_alert?: Msfp_alert[] | undefined;
    private _msfp_msfp_satisfactionmetric_msfp_alertrule?: Msfp_alertrule[] | undefined;
    private _msfp_name?: string | undefined;
    private _msfp_project?: Msfp_project | undefined;
    private _msfp_questions?: string | undefined;
    private _msfp_satisfactionmetric_AsyncOperations?: Asyncoperation[] | undefined;
    private _msfp_satisfactionmetric_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msfp_satisfactionmetric_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msfp_satisfactionmetric_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msfp_satisfactionmetric_ProcessSession?: Processsession[] | undefined;
    private _msfp_satisfactionmetric_SyncErrors?: Syncerror[] | undefined;
    private _msfp_satisfactionmetricid?: string | undefined;
    private _msfp_status?: number | undefined;
    private _msfp_threshold?: number | undefined;
    private _msfp_type?: string | undefined;
    private _msfp_versionnumber?: number | undefined;
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
     * Gets the _msfp_project_value property value. 
     * @returns a string
     */
    public get _msfp_project_value() {
        return this.__msfp_project_value;
    };
    /**
     * Sets the _msfp_project_value property value. 
     * @param value Value to set for the _msfp_project_value property.
     */
    public set _msfp_project_value(value: string | undefined) {
        this.__msfp_project_value = value;
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
     * Instantiates a new msfp_satisfactionmetric and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msfp_satisfactionmetric)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msfp_satisfactionmetric)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msfp_satisfactionmetric)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msfp_satisfactionmetric)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msfp_project_value": (o, n) => { (o as unknown as Msfp_satisfactionmetric)._msfp_project_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msfp_satisfactionmetric)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msfp_satisfactionmetric)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msfp_satisfactionmetric)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msfp_satisfactionmetric)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msfp_satisfactionmetric).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msfp_satisfactionmetric).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msfp_satisfactionmetric).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msfp_satisfactionmetric).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msfp_satisfactionmetric).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msfp_satisfactionmetric).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msfp_satisfactionmetric).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msfp_description": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_description = n.getStringValue(); },
            "msfp_historicalcomputedvalue": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_historicalcomputedvalue = n.getStringValue(); },
            "msfp_issystemkpi": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_issystemkpi = n.getBooleanValue(); },
            "msfp_lastcomputedon": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_lastcomputedon = n.getDateValue(); },
            "msfp_lastcomputedvalue": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_lastcomputedvalue = n.getStringValue(); },
            "msfp_maximumvalue": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_maximumvalue = n.getNumberValue(); },
            "msfp_minimumvalue": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_minimumvalue = n.getNumberValue(); },
            "msfp_msfp_satisfactionmetric_msfp_alert": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_msfp_satisfactionmetric_msfp_alert = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msfp_msfp_satisfactionmetric_msfp_alertrule": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_msfp_satisfactionmetric_msfp_alertrule = n.getCollectionOfObjectValues<Msfp_alertrule>(createMsfp_alertruleFromDiscriminatorValue); },
            "msfp_name": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_name = n.getStringValue(); },
            "msfp_project": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_project = n.getObjectValue<Msfp_project>(createMsfp_projectFromDiscriminatorValue); },
            "msfp_questions": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_questions = n.getStringValue(); },
            "msfp_satisfactionmetric_AsyncOperations": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_satisfactionmetric_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msfp_satisfactionmetric_BulkDeleteFailures": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_satisfactionmetric_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msfp_satisfactionmetric_MailboxTrackingFolders": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_satisfactionmetric_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msfp_satisfactionmetric_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_satisfactionmetric_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msfp_satisfactionmetric_ProcessSession": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_satisfactionmetric_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msfp_satisfactionmetric_SyncErrors": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_satisfactionmetric_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msfp_satisfactionmetricid": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_satisfactionmetricid = n.getStringValue(); },
            "msfp_status": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_status = n.getNumberValue(); },
            "msfp_threshold": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_threshold = n.getNumberValue(); },
            "msfp_type": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_type = n.getStringValue(); },
            "msfp_versionnumber": (o, n) => { (o as unknown as Msfp_satisfactionmetric).msfp_versionnumber = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msfp_satisfactionmetric).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msfp_satisfactionmetric).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msfp_satisfactionmetric).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msfp_satisfactionmetric).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msfp_satisfactionmetric).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msfp_satisfactionmetric).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msfp_satisfactionmetric).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msfp_satisfactionmetric).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msfp_satisfactionmetric).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msfp_satisfactionmetric).versionnumber = n.getNumberValue(); },
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
     * Gets the msfp_description property value. 
     * @returns a string
     */
    public get msfp_description() {
        return this._msfp_description;
    };
    /**
     * Sets the msfp_description property value. 
     * @param value Value to set for the msfp_description property.
     */
    public set msfp_description(value: string | undefined) {
        this._msfp_description = value;
    };
    /**
     * Gets the msfp_historicalcomputedvalue property value. 
     * @returns a string
     */
    public get msfp_historicalcomputedvalue() {
        return this._msfp_historicalcomputedvalue;
    };
    /**
     * Sets the msfp_historicalcomputedvalue property value. 
     * @param value Value to set for the msfp_historicalcomputedvalue property.
     */
    public set msfp_historicalcomputedvalue(value: string | undefined) {
        this._msfp_historicalcomputedvalue = value;
    };
    /**
     * Gets the msfp_issystemkpi property value. 
     * @returns a boolean
     */
    public get msfp_issystemkpi() {
        return this._msfp_issystemkpi;
    };
    /**
     * Sets the msfp_issystemkpi property value. 
     * @param value Value to set for the msfp_issystemkpi property.
     */
    public set msfp_issystemkpi(value: boolean | undefined) {
        this._msfp_issystemkpi = value;
    };
    /**
     * Gets the msfp_lastcomputedon property value. 
     * @returns a Date
     */
    public get msfp_lastcomputedon() {
        return this._msfp_lastcomputedon;
    };
    /**
     * Sets the msfp_lastcomputedon property value. 
     * @param value Value to set for the msfp_lastcomputedon property.
     */
    public set msfp_lastcomputedon(value: Date | undefined) {
        this._msfp_lastcomputedon = value;
    };
    /**
     * Gets the msfp_lastcomputedvalue property value. 
     * @returns a string
     */
    public get msfp_lastcomputedvalue() {
        return this._msfp_lastcomputedvalue;
    };
    /**
     * Sets the msfp_lastcomputedvalue property value. 
     * @param value Value to set for the msfp_lastcomputedvalue property.
     */
    public set msfp_lastcomputedvalue(value: string | undefined) {
        this._msfp_lastcomputedvalue = value;
    };
    /**
     * Gets the msfp_maximumvalue property value. 
     * @returns a integer
     */
    public get msfp_maximumvalue() {
        return this._msfp_maximumvalue;
    };
    /**
     * Sets the msfp_maximumvalue property value. 
     * @param value Value to set for the msfp_maximumvalue property.
     */
    public set msfp_maximumvalue(value: number | undefined) {
        this._msfp_maximumvalue = value;
    };
    /**
     * Gets the msfp_minimumvalue property value. 
     * @returns a integer
     */
    public get msfp_minimumvalue() {
        return this._msfp_minimumvalue;
    };
    /**
     * Sets the msfp_minimumvalue property value. 
     * @param value Value to set for the msfp_minimumvalue property.
     */
    public set msfp_minimumvalue(value: number | undefined) {
        this._msfp_minimumvalue = value;
    };
    /**
     * Gets the msfp_msfp_satisfactionmetric_msfp_alert property value. 
     * @returns a msfp_alert
     */
    public get msfp_msfp_satisfactionmetric_msfp_alert() {
        return this._msfp_msfp_satisfactionmetric_msfp_alert;
    };
    /**
     * Sets the msfp_msfp_satisfactionmetric_msfp_alert property value. 
     * @param value Value to set for the msfp_msfp_satisfactionmetric_msfp_alert property.
     */
    public set msfp_msfp_satisfactionmetric_msfp_alert(value: Msfp_alert[] | undefined) {
        this._msfp_msfp_satisfactionmetric_msfp_alert = value;
    };
    /**
     * Gets the msfp_msfp_satisfactionmetric_msfp_alertrule property value. 
     * @returns a msfp_alertrule
     */
    public get msfp_msfp_satisfactionmetric_msfp_alertrule() {
        return this._msfp_msfp_satisfactionmetric_msfp_alertrule;
    };
    /**
     * Sets the msfp_msfp_satisfactionmetric_msfp_alertrule property value. 
     * @param value Value to set for the msfp_msfp_satisfactionmetric_msfp_alertrule property.
     */
    public set msfp_msfp_satisfactionmetric_msfp_alertrule(value: Msfp_alertrule[] | undefined) {
        this._msfp_msfp_satisfactionmetric_msfp_alertrule = value;
    };
    /**
     * Gets the msfp_name property value. 
     * @returns a string
     */
    public get msfp_name() {
        return this._msfp_name;
    };
    /**
     * Sets the msfp_name property value. 
     * @param value Value to set for the msfp_name property.
     */
    public set msfp_name(value: string | undefined) {
        this._msfp_name = value;
    };
    /**
     * Gets the msfp_project property value. 
     * @returns a msfp_project
     */
    public get msfp_project() {
        return this._msfp_project;
    };
    /**
     * Sets the msfp_project property value. 
     * @param value Value to set for the msfp_project property.
     */
    public set msfp_project(value: Msfp_project | undefined) {
        this._msfp_project = value;
    };
    /**
     * Gets the msfp_questions property value. 
     * @returns a string
     */
    public get msfp_questions() {
        return this._msfp_questions;
    };
    /**
     * Sets the msfp_questions property value. 
     * @param value Value to set for the msfp_questions property.
     */
    public set msfp_questions(value: string | undefined) {
        this._msfp_questions = value;
    };
    /**
     * Gets the msfp_satisfactionmetric_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msfp_satisfactionmetric_AsyncOperations() {
        return this._msfp_satisfactionmetric_AsyncOperations;
    };
    /**
     * Sets the msfp_satisfactionmetric_AsyncOperations property value. 
     * @param value Value to set for the msfp_satisfactionmetric_AsyncOperations property.
     */
    public set msfp_satisfactionmetric_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msfp_satisfactionmetric_AsyncOperations = value;
    };
    /**
     * Gets the msfp_satisfactionmetric_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msfp_satisfactionmetric_BulkDeleteFailures() {
        return this._msfp_satisfactionmetric_BulkDeleteFailures;
    };
    /**
     * Sets the msfp_satisfactionmetric_BulkDeleteFailures property value. 
     * @param value Value to set for the msfp_satisfactionmetric_BulkDeleteFailures property.
     */
    public set msfp_satisfactionmetric_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msfp_satisfactionmetric_BulkDeleteFailures = value;
    };
    /**
     * Gets the msfp_satisfactionmetric_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msfp_satisfactionmetric_MailboxTrackingFolders() {
        return this._msfp_satisfactionmetric_MailboxTrackingFolders;
    };
    /**
     * Sets the msfp_satisfactionmetric_MailboxTrackingFolders property value. 
     * @param value Value to set for the msfp_satisfactionmetric_MailboxTrackingFolders property.
     */
    public set msfp_satisfactionmetric_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msfp_satisfactionmetric_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msfp_satisfactionmetric_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msfp_satisfactionmetric_PrincipalObjectAttributeAccesses() {
        return this._msfp_satisfactionmetric_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msfp_satisfactionmetric_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msfp_satisfactionmetric_PrincipalObjectAttributeAccesses property.
     */
    public set msfp_satisfactionmetric_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msfp_satisfactionmetric_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msfp_satisfactionmetric_ProcessSession property value. 
     * @returns a processsession
     */
    public get msfp_satisfactionmetric_ProcessSession() {
        return this._msfp_satisfactionmetric_ProcessSession;
    };
    /**
     * Sets the msfp_satisfactionmetric_ProcessSession property value. 
     * @param value Value to set for the msfp_satisfactionmetric_ProcessSession property.
     */
    public set msfp_satisfactionmetric_ProcessSession(value: Processsession[] | undefined) {
        this._msfp_satisfactionmetric_ProcessSession = value;
    };
    /**
     * Gets the msfp_satisfactionmetric_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msfp_satisfactionmetric_SyncErrors() {
        return this._msfp_satisfactionmetric_SyncErrors;
    };
    /**
     * Sets the msfp_satisfactionmetric_SyncErrors property value. 
     * @param value Value to set for the msfp_satisfactionmetric_SyncErrors property.
     */
    public set msfp_satisfactionmetric_SyncErrors(value: Syncerror[] | undefined) {
        this._msfp_satisfactionmetric_SyncErrors = value;
    };
    /**
     * Gets the msfp_satisfactionmetricid property value. 
     * @returns a string
     */
    public get msfp_satisfactionmetricid() {
        return this._msfp_satisfactionmetricid;
    };
    /**
     * Sets the msfp_satisfactionmetricid property value. 
     * @param value Value to set for the msfp_satisfactionmetricid property.
     */
    public set msfp_satisfactionmetricid(value: string | undefined) {
        this._msfp_satisfactionmetricid = value;
    };
    /**
     * Gets the msfp_status property value. 
     * @returns a integer
     */
    public get msfp_status() {
        return this._msfp_status;
    };
    /**
     * Sets the msfp_status property value. 
     * @param value Value to set for the msfp_status property.
     */
    public set msfp_status(value: number | undefined) {
        this._msfp_status = value;
    };
    /**
     * Gets the msfp_threshold property value. 
     * @returns a integer
     */
    public get msfp_threshold() {
        return this._msfp_threshold;
    };
    /**
     * Sets the msfp_threshold property value. 
     * @param value Value to set for the msfp_threshold property.
     */
    public set msfp_threshold(value: number | undefined) {
        this._msfp_threshold = value;
    };
    /**
     * Gets the msfp_type property value. 
     * @returns a string
     */
    public get msfp_type() {
        return this._msfp_type;
    };
    /**
     * Sets the msfp_type property value. 
     * @param value Value to set for the msfp_type property.
     */
    public set msfp_type(value: string | undefined) {
        this._msfp_type = value;
    };
    /**
     * Gets the msfp_versionnumber property value. 
     * @returns a integer
     */
    public get msfp_versionnumber() {
        return this._msfp_versionnumber;
    };
    /**
     * Sets the msfp_versionnumber property value. 
     * @param value Value to set for the msfp_versionnumber property.
     */
    public set msfp_versionnumber(value: number | undefined) {
        this._msfp_versionnumber = value;
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
        writer.writeStringValue("_msfp_project_value", this._msfp_project_value);
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
        writer.writeStringValue("msfp_description", this.msfp_description);
        writer.writeStringValue("msfp_historicalcomputedvalue", this.msfp_historicalcomputedvalue);
        writer.writeBooleanValue("msfp_issystemkpi", this.msfp_issystemkpi);
        writer.writeDateValue("msfp_lastcomputedon", this.msfp_lastcomputedon);
        writer.writeStringValue("msfp_lastcomputedvalue", this.msfp_lastcomputedvalue);
        writer.writeNumberValue("msfp_maximumvalue", this.msfp_maximumvalue);
        writer.writeNumberValue("msfp_minimumvalue", this.msfp_minimumvalue);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msfp_msfp_satisfactionmetric_msfp_alert", this.msfp_msfp_satisfactionmetric_msfp_alert);
        writer.writeCollectionOfObjectValues<Msfp_alertrule>("msfp_msfp_satisfactionmetric_msfp_alertrule", this.msfp_msfp_satisfactionmetric_msfp_alertrule);
        writer.writeStringValue("msfp_name", this.msfp_name);
        writer.writeObjectValue<Msfp_project>("msfp_project", this.msfp_project);
        writer.writeStringValue("msfp_questions", this.msfp_questions);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msfp_satisfactionmetric_AsyncOperations", this.msfp_satisfactionmetric_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msfp_satisfactionmetric_BulkDeleteFailures", this.msfp_satisfactionmetric_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msfp_satisfactionmetric_MailboxTrackingFolders", this.msfp_satisfactionmetric_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msfp_satisfactionmetric_PrincipalObjectAttributeAccesses", this.msfp_satisfactionmetric_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msfp_satisfactionmetric_ProcessSession", this.msfp_satisfactionmetric_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msfp_satisfactionmetric_SyncErrors", this.msfp_satisfactionmetric_SyncErrors);
        writer.writeStringValue("msfp_satisfactionmetricid", this.msfp_satisfactionmetricid);
        writer.writeNumberValue("msfp_status", this.msfp_status);
        writer.writeNumberValue("msfp_threshold", this.msfp_threshold);
        writer.writeStringValue("msfp_type", this.msfp_type);
        writer.writeNumberValue("msfp_versionnumber", this.msfp_versionnumber);
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
