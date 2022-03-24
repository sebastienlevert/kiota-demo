import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createDuplicateruleconditionFromDiscriminatorValue} from './createDuplicateruleconditionFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Businessunit, Crmbaseentity, Duplicaterecord, Duplicaterulecondition, Principal, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Duplicaterule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _baseentitymatchcodetable?: string | undefined;
    private _baseentityname?: string | undefined;
    private _baseentitytypecode?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _duplicateRule_Annotation?: Annotation[] | undefined;
    private _duplicateRule_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _duplicateRule_DuplicateRuleConditions?: Duplicaterulecondition[] | undefined;
    private _duplicateRule_SyncErrors?: Syncerror[] | undefined;
    private _duplicateruleid?: string | undefined;
    private _excludeinactiverecords?: boolean | undefined;
    private _iscasesensitive?: boolean | undefined;
    private _matchingentitymatchcodetable?: string | undefined;
    private _matchingentityname?: string | undefined;
    private _matchingentitytypecode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _uniquename?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the baseentitymatchcodetable property value. 
     * @returns a string
     */
    public get baseentitymatchcodetable() {
        return this._baseentitymatchcodetable;
    };
    /**
     * Sets the baseentitymatchcodetable property value. 
     * @param value Value to set for the baseentitymatchcodetable property.
     */
    public set baseentitymatchcodetable(value: string | undefined) {
        this._baseentitymatchcodetable = value;
    };
    /**
     * Gets the baseentityname property value. 
     * @returns a string
     */
    public get baseentityname() {
        return this._baseentityname;
    };
    /**
     * Sets the baseentityname property value. 
     * @param value Value to set for the baseentityname property.
     */
    public set baseentityname(value: string | undefined) {
        this._baseentityname = value;
    };
    /**
     * Gets the baseentitytypecode property value. 
     * @returns a integer
     */
    public get baseentitytypecode() {
        return this._baseentitytypecode;
    };
    /**
     * Sets the baseentitytypecode property value. 
     * @param value Value to set for the baseentitytypecode property.
     */
    public set baseentitytypecode(value: number | undefined) {
        this._baseentitytypecode = value;
    };
    /**
     * Instantiates a new duplicaterule and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the duplicateRule_Annotation property value. 
     * @returns a annotation
     */
    public get duplicateRule_Annotation() {
        return this._duplicateRule_Annotation;
    };
    /**
     * Sets the duplicateRule_Annotation property value. 
     * @param value Value to set for the DuplicateRule_Annotation property.
     */
    public set duplicateRule_Annotation(value: Annotation[] | undefined) {
        this._duplicateRule_Annotation = value;
    };
    /**
     * Gets the duplicateRule_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get duplicateRule_DuplicateBaseRecord() {
        return this._duplicateRule_DuplicateBaseRecord;
    };
    /**
     * Sets the duplicateRule_DuplicateBaseRecord property value. 
     * @param value Value to set for the DuplicateRule_DuplicateBaseRecord property.
     */
    public set duplicateRule_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._duplicateRule_DuplicateBaseRecord = value;
    };
    /**
     * Gets the duplicateRule_DuplicateRuleConditions property value. 
     * @returns a duplicaterulecondition
     */
    public get duplicateRule_DuplicateRuleConditions() {
        return this._duplicateRule_DuplicateRuleConditions;
    };
    /**
     * Sets the duplicateRule_DuplicateRuleConditions property value. 
     * @param value Value to set for the DuplicateRule_DuplicateRuleConditions property.
     */
    public set duplicateRule_DuplicateRuleConditions(value: Duplicaterulecondition[] | undefined) {
        this._duplicateRule_DuplicateRuleConditions = value;
    };
    /**
     * Gets the duplicateRule_SyncErrors property value. 
     * @returns a syncerror
     */
    public get duplicateRule_SyncErrors() {
        return this._duplicateRule_SyncErrors;
    };
    /**
     * Sets the duplicateRule_SyncErrors property value. 
     * @param value Value to set for the DuplicateRule_SyncErrors property.
     */
    public set duplicateRule_SyncErrors(value: Syncerror[] | undefined) {
        this._duplicateRule_SyncErrors = value;
    };
    /**
     * Gets the duplicateruleid property value. 
     * @returns a string
     */
    public get duplicateruleid() {
        return this._duplicateruleid;
    };
    /**
     * Sets the duplicateruleid property value. 
     * @param value Value to set for the duplicateruleid property.
     */
    public set duplicateruleid(value: string | undefined) {
        this._duplicateruleid = value;
    };
    /**
     * Gets the excludeinactiverecords property value. 
     * @returns a boolean
     */
    public get excludeinactiverecords() {
        return this._excludeinactiverecords;
    };
    /**
     * Sets the excludeinactiverecords property value. 
     * @param value Value to set for the excludeinactiverecords property.
     */
    public set excludeinactiverecords(value: boolean | undefined) {
        this._excludeinactiverecords = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Duplicaterule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Duplicaterule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Duplicaterule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Duplicaterule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Duplicaterule)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Duplicaterule)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Duplicaterule)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Duplicaterule)._owninguser_value = n.getStringValue(); },
            "baseentitymatchcodetable": (o, n) => { (o as unknown as Duplicaterule).baseentitymatchcodetable = n.getStringValue(); },
            "baseentityname": (o, n) => { (o as unknown as Duplicaterule).baseentityname = n.getStringValue(); },
            "baseentitytypecode": (o, n) => { (o as unknown as Duplicaterule).baseentitytypecode = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Duplicaterule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Duplicaterule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Duplicaterule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Duplicaterule).description = n.getStringValue(); },
            "duplicateRule_Annotation": (o, n) => { (o as unknown as Duplicaterule).duplicateRule_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "duplicateRule_DuplicateBaseRecord": (o, n) => { (o as unknown as Duplicaterule).duplicateRule_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "duplicateRule_DuplicateRuleConditions": (o, n) => { (o as unknown as Duplicaterule).duplicateRule_DuplicateRuleConditions = n.getCollectionOfObjectValues<Duplicaterulecondition>(createDuplicateruleconditionFromDiscriminatorValue); },
            "duplicateRule_SyncErrors": (o, n) => { (o as unknown as Duplicaterule).duplicateRule_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "duplicateruleid": (o, n) => { (o as unknown as Duplicaterule).duplicateruleid = n.getStringValue(); },
            "excludeinactiverecords": (o, n) => { (o as unknown as Duplicaterule).excludeinactiverecords = n.getBooleanValue(); },
            "iscasesensitive": (o, n) => { (o as unknown as Duplicaterule).iscasesensitive = n.getBooleanValue(); },
            "matchingentitymatchcodetable": (o, n) => { (o as unknown as Duplicaterule).matchingentitymatchcodetable = n.getStringValue(); },
            "matchingentityname": (o, n) => { (o as unknown as Duplicaterule).matchingentityname = n.getStringValue(); },
            "matchingentitytypecode": (o, n) => { (o as unknown as Duplicaterule).matchingentitytypecode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Duplicaterule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Duplicaterule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Duplicaterule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Duplicaterule).name = n.getStringValue(); },
            "ownerid": (o, n) => { (o as unknown as Duplicaterule).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Duplicaterule).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Duplicaterule).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Duplicaterule).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Duplicaterule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Duplicaterule).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Duplicaterule).timezoneruleversionnumber = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Duplicaterule).uniquename = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Duplicaterule).utcconversiontimezonecode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the iscasesensitive property value. 
     * @returns a boolean
     */
    public get iscasesensitive() {
        return this._iscasesensitive;
    };
    /**
     * Sets the iscasesensitive property value. 
     * @param value Value to set for the iscasesensitive property.
     */
    public set iscasesensitive(value: boolean | undefined) {
        this._iscasesensitive = value;
    };
    /**
     * Gets the matchingentitymatchcodetable property value. 
     * @returns a string
     */
    public get matchingentitymatchcodetable() {
        return this._matchingentitymatchcodetable;
    };
    /**
     * Sets the matchingentitymatchcodetable property value. 
     * @param value Value to set for the matchingentitymatchcodetable property.
     */
    public set matchingentitymatchcodetable(value: string | undefined) {
        this._matchingentitymatchcodetable = value;
    };
    /**
     * Gets the matchingentityname property value. 
     * @returns a string
     */
    public get matchingentityname() {
        return this._matchingentityname;
    };
    /**
     * Sets the matchingentityname property value. 
     * @param value Value to set for the matchingentityname property.
     */
    public set matchingentityname(value: string | undefined) {
        this._matchingentityname = value;
    };
    /**
     * Gets the matchingentitytypecode property value. 
     * @returns a integer
     */
    public get matchingentitytypecode() {
        return this._matchingentitytypecode;
    };
    /**
     * Sets the matchingentitytypecode property value. 
     * @param value Value to set for the matchingentitytypecode property.
     */
    public set matchingentitytypecode(value: number | undefined) {
        this._matchingentitytypecode = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
        writer.writeStringValue("baseentitymatchcodetable", this.baseentitymatchcodetable);
        writer.writeStringValue("baseentityname", this.baseentityname);
        writer.writeNumberValue("baseentitytypecode", this.baseentitytypecode);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<Annotation>("duplicateRule_Annotation", this.duplicateRule_Annotation);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("duplicateRule_DuplicateBaseRecord", this.duplicateRule_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterulecondition>("duplicateRule_DuplicateRuleConditions", this.duplicateRule_DuplicateRuleConditions);
        writer.writeCollectionOfObjectValues<Syncerror>("duplicateRule_SyncErrors", this.duplicateRule_SyncErrors);
        writer.writeStringValue("duplicateruleid", this.duplicateruleid);
        writer.writeBooleanValue("excludeinactiverecords", this.excludeinactiverecords);
        writer.writeBooleanValue("iscasesensitive", this.iscasesensitive);
        writer.writeStringValue("matchingentitymatchcodetable", this.matchingentitymatchcodetable);
        writer.writeStringValue("matchingentityname", this.matchingentityname);
        writer.writeNumberValue("matchingentitytypecode", this.matchingentitytypecode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
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
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
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
}
